import { useMutation } from "@tanstack/react-query";
import { submitLeadEnquiry } from "../api";
import { LeadSubmissionPayload } from "../types";

export const useSubmitLead = () => {
  return useMutation({
    mutationFn: (data: LeadSubmissionPayload) => submitLeadEnquiry(data),
  });
};
