import { Permit, ResourceCreate, ResourceUpdate } from "permitio";
import { getNodesAndEdgesForGraph } from "../models/githubData";

const environmentsApiKeys =
  "permit_key_XuICSqsGvKsulXtSc7TWZDqumejt45b3dqabC3B7AtMFPi17ERmAGlic5StIKaIq6a8RwQ9057ggP1Pc0RDCQE";

const permit = new Permit({
  token: environmentsApiKeys,
  pdp: "http://localhost:3000",
  log: {
    level: "debug",
  },
  throwOnError: true,
});

const { nodes } = getNodesAndEdgesForGraph();

function createMainResources(): { [key: string]: ResourceUpdate[] } {
  const createResourcesMap: { [key: string]: ResourceCreate } = {};
  const updateResourcesMap: { [key: string]: ResourceUpdate[] } = {};

  for (const node of nodes) {
    const { id } = node;
    const [entity1, entity2, action] = id.split("#");
    // this if block generates the resources only
    if (entity1 in createResourcesMap) {
      if (action) {
        const newAction = {
          ...createResourcesMap[entity1].actions,
          ...{ [action]: { name: action } },
        };
        createResourcesMap[entity1].actions = newAction;
      } else {
        console.log("weird state investigate");
      }
    } else {
      createResourcesMap[entity1] = {
        key: entity1,
        name: entity1,
        actions: {},
      };
    }
    // this if block generates the rebac relationship/roles

    if (entity2) {
      if (entity1 in updateResourcesMap) {
        updateResourcesMap[entity1].push({
          roles: {
            [entity2]: {
              name: entity2,
              permissions: [action],
            },
          },
        });
      } else {
        // create and place here
        // todo create the update object
        updateResourcesMap[entity1] = [
          {
            roles: {
              [entity2]: {
                name: entity2,
                permissions: [action],
              },
            },
          },
        ];
      }
    }
  }

  for (const resource of Object.values(createResourcesMap)) {
    // uncomment this later
    permit.api.createResource(resource);
  }

  return updateResourcesMap;
}

function createResourcesInPermit() {
  console.log("Creating resources");
  const resourcesToUpdate = createMainResources();
  console.log("resources to update", JSON.stringify(resourcesToUpdate));
  console.log("Completed creating resources");
  console.log("Waiting 5 seconds before updating just created resources");
  // we need a timeout because we can't update the resource just after it is created
  // api throws not found error
  setTimeout(() => {
    console.log("Updating the resources");
    for (const [key, updateRequests] of Object.entries(resourcesToUpdate)) {
      for (const request of updateRequests) {
        permit.api.updateResource(key, request);
      }
    }
    console.log("Updated the resources");
  }, 5000);
}

createResourcesInPermit();
