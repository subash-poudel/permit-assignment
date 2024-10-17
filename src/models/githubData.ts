import { GraphEdge, GraphNode } from "reagraph";
import { ResourceData, ResourceRole } from "./models";

// Policy json copied from permit.io
const API_POLICY_DATA = {
  data: [
    {
      key: "Teams",
      id: "5194d4f747974d7db73762caef21538d",
      organization_id: "189605cc04954ed29b1e3c0ef513c31c",
      project_id: "1f4b840f265b4d2e8a08715487f1834b",
      environment_id: "867423c62e45471ba5895a3b6a230be7",
      created_at: "2024-10-17T06:27:14+00:00",
      updated_at: "2024-10-17T06:27:14+00:00",
      name: "Teams",
      urn: "prn:github-assignment:default:Teams",
      description: null,
      actions: {
        create: {
          name: "create",
          description: null,
          attributes: null,
          id: "453a53c8f525427a9703b804cd2e410d",
          key: "create",
        },
        update: {
          name: "update",
          description: null,
          attributes: null,
          id: "37e8c850902c49858b339882fa9d29bf",
          key: "update",
        },
        read: {
          name: "read",
          description: null,
          attributes: null,
          id: "e201d0982d6649849f0f3c2741de353d",
          key: "read",
        },
      },
      type_attributes: null,
      attributes: {},
      roles: {
        Repository: {
          name: "Repository",
          description: "",
          permissions: ["update", "read", "create"],
          attributes: {},
          extends: [],
          granted_to: null,
          key: "Repository",
          id: "57d8e5393a334adc8aed4032ec541a08",
          organization_id: "189605cc04954ed29b1e3c0ef513c31c",
          project_id: "1f4b840f265b4d2e8a08715487f1834b",
          environment_id: "867423c62e45471ba5895a3b6a230be7",
          resource_id: "5194d4f747974d7db73762caef21538d",
          resource: "Teams",
          created_at: "2024-10-17T06:38:49+00:00",
          updated_at: "2024-10-17T06:38:49+00:00",
        },
        Member: {
          name: "Member",
          description: "",
          permissions: ["update", "create", "read"],
          attributes: {},
          extends: [],
          granted_to: null,
          key: "Member",
          id: "b0b3a6423bdd49a4a451b37b4446d687",
          organization_id: "189605cc04954ed29b1e3c0ef513c31c",
          project_id: "1f4b840f265b4d2e8a08715487f1834b",
          environment_id: "867423c62e45471ba5895a3b6a230be7",
          resource_id: "5194d4f747974d7db73762caef21538d",
          resource: "Teams",
          created_at: "2024-10-17T06:35:18+00:00",
          updated_at: "2024-10-17T06:35:18+00:00",
        },
      },
      relations: {},
      action_groups: {},
    },
    {
      key: "PR",
      id: "58a9aeb1073645e59f2c747c3cd042b1",
      organization_id: "189605cc04954ed29b1e3c0ef513c31c",
      project_id: "1f4b840f265b4d2e8a08715487f1834b",
      environment_id: "867423c62e45471ba5895a3b6a230be7",
      created_at: "2024-10-17T06:28:14+00:00",
      updated_at: "2024-10-17T06:28:14+00:00",
      name: "PR",
      urn: "prn:github-assignment:default:PR",
      description: null,
      actions: {
        read: {
          name: "read",
          description: null,
          attributes: null,
          id: "86e1c28d0317492b887173cd1a6b1df1",
          key: "read",
        },
        delete: {
          name: "delete",
          description: null,
          attributes: null,
          id: "92809b69cd3348d3881b6e95d1b74c09",
          key: "delete",
        },
        create: {
          name: "create",
          description: null,
          attributes: null,
          id: "eb9f0fdefa8e4161b26146b71416293b",
          key: "create",
        },
        update: {
          name: "update",
          description: null,
          attributes: null,
          id: "348af0c915574e5388f1898ca2c4d593",
          key: "update",
        },
      },
      type_attributes: null,
      attributes: {},
      roles: {},
      relations: {},
      action_groups: {},
    },
    {
      key: "Repository",
      id: "5e0a432cbd9c440e9c49956ad6dbc219",
      organization_id: "189605cc04954ed29b1e3c0ef513c31c",
      project_id: "1f4b840f265b4d2e8a08715487f1834b",
      environment_id: "867423c62e45471ba5895a3b6a230be7",
      created_at: "2024-10-17T06:27:53+00:00",
      updated_at: "2024-10-17T06:27:53+00:00",
      name: "Repository",
      urn: "prn:github-assignment:default:Repository",
      description: null,
      actions: {
        create: {
          name: "create",
          description: null,
          attributes: null,
          id: "c4cc4d857945407e99d7a7ac097a9ad0",
          key: "create",
        },
        read: {
          name: "read",
          description: null,
          attributes: null,
          id: "b0424da20a3e41dba6aaa8fb0ff4c1da",
          key: "read",
        },
        update: {
          name: "update",
          description: null,
          attributes: null,
          id: "ec9978db7309447490797a787ff2e2a4",
          key: "update",
        },
      },
      type_attributes: null,
      attributes: {},
      roles: {
        PR: {
          name: "PR",
          description: "",
          permissions: ["read"],
          attributes: {},
          extends: [],
          granted_to: null,
          key: "PR",
          id: "695453d9832c41d79f97e92d92c958a3",
          organization_id: "189605cc04954ed29b1e3c0ef513c31c",
          project_id: "1f4b840f265b4d2e8a08715487f1834b",
          environment_id: "867423c62e45471ba5895a3b6a230be7",
          resource_id: "5e0a432cbd9c440e9c49956ad6dbc219",
          resource: "Repository",
          created_at: "2024-10-17T06:34:48+00:00",
          updated_at: "2024-10-17T06:34:48+00:00",
        },
      },
      relations: {},
      action_groups: {},
    },
    {
      key: "Members",
      id: "90cec35b3daf49e691726d7ed73cb76c",
      organization_id: "189605cc04954ed29b1e3c0ef513c31c",
      project_id: "1f4b840f265b4d2e8a08715487f1834b",
      environment_id: "867423c62e45471ba5895a3b6a230be7",
      created_at: "2024-10-17T06:27:31+00:00",
      updated_at: "2024-10-17T06:27:31+00:00",
      name: "Members",
      urn: "prn:github-assignment:default:Members",
      description: null,
      actions: {
        create: {
          name: "create",
          description: null,
          attributes: null,
          id: "2afd82bfd1784e6a9fda885e30c4e7bc",
          key: "create",
        },
        read: {
          name: "read",
          description: null,
          attributes: null,
          id: "c2f720ac591244de819161b436874b97",
          key: "read",
        },
        update: {
          name: "update",
          description: null,
          attributes: null,
          id: "201a275dcfb04b2cb960cfd1d6bb6f2d",
          key: "update",
        },
      },
      type_attributes: null,
      attributes: {},
      roles: {
        Repository: {
          name: "Repository",
          description: "",
          permissions: ["update", "create", "read"],
          attributes: {},
          extends: [],
          granted_to: null,
          key: "Repository",
          id: "9baefd2c637048c68ca0a2b99da8b705",
          organization_id: "189605cc04954ed29b1e3c0ef513c31c",
          project_id: "1f4b840f265b4d2e8a08715487f1834b",
          environment_id: "867423c62e45471ba5895a3b6a230be7",
          resource_id: "90cec35b3daf49e691726d7ed73cb76c",
          resource: "Members",
          created_at: "2024-10-17T06:34:22+00:00",
          updated_at: "2024-10-17T06:34:22+00:00",
        },
        PR: {
          name: "PR",
          description: "",
          permissions: ["create", "update", "read"],
          attributes: {},
          extends: [],
          granted_to: null,
          key: "PR",
          id: "6966898d036d4ed3bf9abc769cced63b",
          organization_id: "189605cc04954ed29b1e3c0ef513c31c",
          project_id: "1f4b840f265b4d2e8a08715487f1834b",
          environment_id: "867423c62e45471ba5895a3b6a230be7",
          resource_id: "90cec35b3daf49e691726d7ed73cb76c",
          resource: "Members",
          created_at: "2024-10-17T06:34:22+00:00",
          updated_at: "2024-10-17T06:34:22+00:00",
        },
      },
      relations: {},
      action_groups: {},
    },
    {
      key: "Owner",
      id: "afa8128a30604ea49b8f162661254ed4",
      organization_id: "189605cc04954ed29b1e3c0ef513c31c",
      project_id: "1f4b840f265b4d2e8a08715487f1834b",
      environment_id: "867423c62e45471ba5895a3b6a230be7",
      created_at: "2024-10-17T06:26:52+00:00",
      updated_at: "2024-10-17T06:26:52+00:00",
      name: "Owner",
      urn: "prn:github-assignment:default:Owner",
      description: null,
      actions: {
        delete: {
          name: "delete",
          description: null,
          attributes: null,
          id: "35ff7fca894544b49d1defe668ae84e9",
          key: "delete",
        },
        update: {
          name: "update",
          description: null,
          attributes: null,
          id: "d457393b120a47f7aea3ad5edabb4658",
          key: "update",
        },
        create: {
          name: "create",
          description: null,
          attributes: null,
          id: "69bc727c87af4815a36b9107d694f253",
          key: "create",
        },
        read: {
          name: "read",
          description: null,
          attributes: null,
          id: "b75577f9d5af47e696d9673eecce182b",
          key: "read",
        },
      },
      type_attributes: null,
      attributes: {},
      roles: {
        Repository: {
          name: "Repository",
          description: "",
          permissions: ["update", "delete", "create", "read"],
          attributes: {},
          extends: [],
          granted_to: null,
          key: "Repository",
          id: "618bd1b5f57e42f7aa37afdf26a41854",
          organization_id: "189605cc04954ed29b1e3c0ef513c31c",
          project_id: "1f4b840f265b4d2e8a08715487f1834b",
          environment_id: "867423c62e45471ba5895a3b6a230be7",
          resource_id: "afa8128a30604ea49b8f162661254ed4",
          resource: "Owner",
          created_at: "2024-10-17T06:33:42+00:00",
          updated_at: "2024-10-17T06:33:42+00:00",
        },
        Teams: {
          name: "Teams",
          description: "",
          permissions: ["create", "update", "delete", "read"],
          attributes: {},
          extends: [],
          granted_to: null,
          key: "Teams",
          id: "6b947c01d6244d6ca047356583629a86",
          organization_id: "189605cc04954ed29b1e3c0ef513c31c",
          project_id: "1f4b840f265b4d2e8a08715487f1834b",
          environment_id: "867423c62e45471ba5895a3b6a230be7",
          resource_id: "afa8128a30604ea49b8f162661254ed4",
          resource: "Owner",
          created_at: "2024-10-17T06:33:42+00:00",
          updated_at: "2024-10-17T06:33:42+00:00",
        },
      },
      relations: {},
      action_groups: {},
    },
  ],
  total_count: 5,
  page_count: 5,
};

// function to extract useful parts from json to make it more useable for graph visualizations
function makeSmaller() {
  const result = {};
  const mappedPolicies = [];
  for (const policy of API_POLICY_DATA.data) {
    const {
      key,
      name,
      description,
      actions,
      attributes,
      roles,
      relations,
      action_groups,
    } = policy;
    const actionsArray = [];
    if (actions.read) {
      actionsArray.push("read");
    }
    if (actions.create) {
      actionsArray.push("read");
    }
    if (actions.delete) {
      actionsArray.push("delete");
    }
    if (actions.update) {
      actionsArray.push("update");
    }
    let newRoles = {};
    if (roles.Repository) {
      const { name, description, permissions, key } = roles.Repository;
      newRoles = {
        ...newRoles,
        ...{ Repository: { name, description, permissions, key } },
      };
    }
    if (roles.Member) {
      const { name, description, permissions, key } = roles.Member;
      newRoles = {
        ...newRoles,
        ...{ Member: { name, description, permissions, key } },
      };
    }
    if (roles.PR) {
      const { name, description, permissions, key } = roles.PR;
      newRoles = {
        ...newRoles,
        ...{ PR: { name, description, permissions, key } },
      };
    }
    if (roles.Teams) {
      const { name, description, permissions, key } = roles.Teams;
      newRoles = {
        ...newRoles,
        ...{ Teams: { name, description, permissions, key } },
      };
    }
    const smallPolicy = {
      key,
      name,
      description,
      actions: actionsArray,
      attributes,
      roles: newRoles,
      relations,
      action_groups,
    };
    mappedPolicies.push(smallPolicy);
  }
  result.data = mappedPolicies;
  console.log("smaller json", JSON.stringify(result));
  return result;
}

export const POLICY_DATA: ResourceData = {
  data: [
    {
      key: "Teams",
      name: "Teams",
      description: null,
      actions: ["create", "read", "update"],
      roles: {
        Repository: {
          name: "Repository",
          description: "",
          permissions: ["update", "read", "create"],
          key: "Repository",
        },
        Member: {
          name: "Member",
          description: "",
          permissions: ["update", "create", "read"],
          key: "Member",
        },
      },
    },
    {
      key: "PR",
      name: "PR",
      description: null,
      actions: ["create", "read", "delete", "update"],
      roles: {},
    },
    {
      key: "Repository",
      name: "Repository",
      description: null,
      actions: ["create", "read", "update", "delete"],
      roles: {
        PR: {
          name: "PR",
          description: "",
          permissions: ["read"],
          key: "PR",
        },
      },
    },
    {
      key: "Members",
      name: "Members",
      description: null,
      actions: ["create", "read", "update"],
      roles: {
        Repository: {
          name: "Repository",
          description: "",
          permissions: ["update", "create", "read"],
          key: "Repository",
        },
        PR: {
          name: "PR",
          description: "",
          permissions: ["create", "update", "read"],
          key: "PR",
        },
      },
    },
    {
      key: "Owner",
      name: "Owner",
      description: null,
      actions: ["create", "read", "delete", "update"],
      roles: {
        Repository: {
          name: "Repository",
          description: "",
          permissions: ["update", "delete", "create", "read"],
          key: "Repository",
        },
        Teams: {
          name: "Teams",
          description: "",
          permissions: ["create", "update", "delete", "read"],
          key: "Teams",
        },
      },
    },
  ],
};

function getNodeAndEdgesForResourceRole(
  role: ResourceRole,
  key: string,
  name: string,
  edgeId: number
): { nodes: GraphNode[]; edges: GraphEdge[]; edgeId: number } {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];
  for (const permission of role.permissions) {
    const id = `${name}#${key}#${permission}`;
    const actionNode: GraphNode = {
      id: id,
      label: permission, // todo change later
      // label: id,
      fill: "red",
      size: 2,
    };
    nodes.push(actionNode);

    const edge1: GraphEdge = {
      id: `${edgeId++}`,
      source: name,
      target: id,
    };
    edges.push(edge1);
    const edge2: GraphEdge = {
      id: `${edgeId++}`,
      source: id,
      target: "Members",
    };
    edges.push(edge2);
  }
  return { nodes, edgeId, edges };
}

export function getNodesAndEdgesForGraph(): {
  nodes: GraphNode[];
  edges: GraphEdge[];
} {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];
  let edgeId = 0;
  for (const policy of POLICY_DATA.data) {
    // create nodes first
    const { roles, name } = policy;
    const node: GraphNode = {
      id: name,
      label: name,
      fill: "green",
      size: 6,
    };
    nodes.push(node);
    if (roles.Member) {
      for (const permission of roles.Member.permissions) {
        const id = `${name}#Member#${permission}`;
        const actionNode: GraphNode = {
          id: id,
          label: permission, // todo change later
          // label: id,
          fill: "red",
          size: 2,
        };
        nodes.push(actionNode);

        const edge1: GraphEdge = {
          id: `${edgeId++}`,
          source: name,
          target: id,
        };
        edges.push(edge1);
        const edge2: GraphEdge = {
          id: `${edgeId++}`,
          source: id,
          target: "Members",
        };
        edges.push(edge2);
      }
    }
    if (roles.PR) {
      for (const permission of roles.PR.permissions) {
        const id = `${name}#PR#${permission}`;
        const actionNode: GraphNode = {
          id: id,
          label: permission, // todo change later
          // label: id,
          fill: "red",
          size: 2,
        };
        nodes.push(actionNode);

        const edge1: GraphEdge = {
          id: `${edgeId++}`,
          source: name,
          target: id,
        };
        edges.push(edge1);
        const edge2: GraphEdge = {
          id: `${edgeId++}`,
          source: id,
          target: "PR",
        };
        edges.push(edge2);
      }
    }
    if (roles.Repository) {
      for (const permission of roles.Repository.permissions) {
        const id = `${name}#Repository#${permission}`;
        const actionNode: GraphNode = {
          id: id,
          label: permission, // todo change later
          // label: id,
          fill: "red",
          size: 2,
        };
        nodes.push(actionNode);

        const edge1: GraphEdge = {
          id: `${edgeId++}`,
          source: name,
          target: id,
        };
        edges.push(edge1);
        const edge2: GraphEdge = {
          id: `${edgeId++}`,
          source: id,
          target: "Repository",
        };
        edges.push(edge2);
      }
    }
    if (roles.Teams) {
      for (const permission of roles.Teams.permissions) {
        const id = `${name}#Teams#${permission}`;
        const actionNode: GraphNode = {
          id: id,
          label: permission, // todo change later
          // label: id,
          fill: "red",
          size: 2,
        };
        nodes.push(actionNode);

        const edge1: GraphEdge = {
          id: `${edgeId++}`,
          source: name,
          target: id,
        };
        edges.push(edge1);
        const edge2: GraphEdge = {
          id: `${edgeId++}`,
          source: id,
          target: "Teams",
        };
        edges.push(edge2);
      }
    }
  }
  return { nodes, edges };
}
