import { apiClient } from "@/lib/api/client";
import { ServiceItem } from "../types";

export const getServices = async (activeOnly = true): Promise<ServiceItem[]> => {
  const response = await apiClient.get<ServiceItem[]>(`/services?activeOnly=${activeOnly}`);
  return response.data;
};

export const getServiceBySlug = async (slug: string): Promise<ServiceItem> => {
  const response = await apiClient.get<ServiceItem>(`/services/${slug}`);
  return response.data;
};
