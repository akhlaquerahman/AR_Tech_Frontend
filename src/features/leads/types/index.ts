export interface LeadSubmissionPayload {
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  serviceInterest: string;
  budgetRange?: string;
  timeline?: string;
  message: string;
  source?: string;
}

export interface LeadSubmissionResponse {
  id: string;
  status: string;
  createdAt: string;
}
