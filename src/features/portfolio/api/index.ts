import { apiClient } from "@/lib/api/client";
import { ProjectItem } from "../types";

export const getProjects = async (params: { category?: string; featured?: boolean } = {}): Promise<ProjectItem[]> => {
  const query = new URLSearchParams();
  if (params.category) query.set("category", params.category);
  if (typeof params.featured === "boolean") query.set("featured", String(params.featured));

  const response = await apiClient.get<ProjectItem[]>(`/projects?${query.toString()}`);
  return response.data;
};

export const getProjectBySlug = async (slug: string): Promise<ProjectItem> => {
  const response = await apiClient.get<ProjectItem>(`/projects/${slug}`);
  return response.data;
};
