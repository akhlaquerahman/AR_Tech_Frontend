import { apiClient } from "@/lib/api/client";
import { LeadSubmissionPayload, LeadSubmissionResponse } from "../types";

export const submitLeadEnquiry = async (
  payload: LeadSubmissionPayload
): Promise<LeadSubmissionResponse> => {
  const response = await apiClient.post<LeadSubmissionResponse>("/leads", payload);
  return response.data;
};
