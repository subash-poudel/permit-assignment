export interface Resource {
  key: string;
  name: string;
  description: string | null;
  actions: string[];
  roles: {
    [key: string]: ResourceRole;
  };
}

export interface ResourceRole {
  name: string;
  description: string;
  permissions: string[];
  key: string;
}

export interface ResourceData {
  data: Resource[];
}
