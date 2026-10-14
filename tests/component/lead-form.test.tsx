import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LeadCaptureForm } from "@/features/leads/components/lead-capture-form";
import * as leadApi from "@/features/leads/api";

function renderWithClient(ui: React.ReactElement) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });
  return render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);
}

describe("LeadCaptureForm Component", () => {
  it("renders form inputs with expected placeholders and labels", () => {
    renderWithClient(<LeadCaptureForm />);

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/work email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/service of interest/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project overview/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit project inquiry/i })).toBeInTheDocument();
  });

  it("validates required fields and shows validation messages when submitted empty", async () => {
    renderWithClient(<LeadCaptureForm />);

    const submitBtn = screen.getByRole("button", { name: /submit project inquiry/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/please provide a valid email address/i)).toBeInTheDocument();
      expect(screen.getByText(/please provide at least 10 characters detailing your project/i)).toBeInTheDocument();
    });
  });

  it("submits valid data through API and shows success confirmation", async () => {
    vi.spyOn(leadApi, "submitLeadEnquiry").mockResolvedValueOnce({
      id: "lead-test-123",
      status: "new",
      createdAt: new Date().toISOString(),
    });

    renderWithClient(<LeadCaptureForm />);

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/project overview/i), {
      target: { value: "We need an enterprise full-stack platform built with Next.js." },
    });

    const submitBtn = screen.getByRole("button", { name: /submit project inquiry/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/enquiry received/i)).toBeInTheDocument();
      expect(screen.getByText(/thank you! your project inquiry has been received/i)).toBeInTheDocument();
    });
  });
});
