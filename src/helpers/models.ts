export interface Project {
  key: string;
  urn_namespace: string | null;
  id: string;
  organization_id: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  name: string;
  description: string;
  settings: any | null; // Replace 'any' with more specific type if available
  active_policy_repo_id: string | null;
}
