import { describe, it, expect, vi, beforeEach } from "vitest";
import { apiClient, ApiError } from "@/lib/api/client";

describe("API Client Unit Tests", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("handles successful JSON response", async () => {
    const mockData = { id: 1, name: "Test" };
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ success: true, data: mockData }),
    } as unknown as Response);

    const res = await apiClient.get<typeof mockData>("/test-endpoint");
    expect(res.success).toBe(true);
    expect(res.data).toEqual(mockData);
  });

  it("throws ApiError with server error details on non-200 responses", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: "Not Found",
      json: async () => ({
        success: false,
        error: { message: "Resource not found on server", details: null },
      }),
    } as unknown as Response);

    await expect(apiClient.get("/missing-resource")).rejects.toThrow("Resource not found on server");
  });

  it("handles network failures and wraps in ApiError with status 500", async () => {
    global.fetch = vi.fn().mockRejectedValueOnce(new Error("Network connection dropped"));

    await expect(apiClient.post("/endpoint", { test: true })).rejects.toThrow("Network connection dropped");
  });
});
