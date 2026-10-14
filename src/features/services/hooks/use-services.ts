import { useQuery } from "@tanstack/react-query";
import { getServices, getServiceBySlug } from "../api";

export const useServices = (activeOnly = true) => {
  return useQuery({
    queryKey: ["services", { activeOnly }],
    queryFn: () => getServices(activeOnly),
  });
};

export const useServiceDetails = (slug: string) => {
  return useQuery({
    queryKey: ["service", slug],
    queryFn: () => getServiceBySlug(slug),
    enabled: Boolean(slug),
  });
};
