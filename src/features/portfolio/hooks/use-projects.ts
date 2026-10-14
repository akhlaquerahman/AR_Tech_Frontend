import { useQuery } from "@tanstack/react-query";
import { getProjects, getProjectBySlug } from "../api";

export const useProjects = (params: { category?: string; featured?: boolean } = {}) => {
  return useQuery({
    queryKey: ["projects", params],
    queryFn: () => getProjects(params),
  });
};

export const useProjectDetails = (slug: string) => {
  return useQuery({
    queryKey: ["project", slug],
    queryFn: () => getProjectBySlug(slug),
    enabled: Boolean(slug),
  });
};
