import { describe, it, expect } from "vitest";
import { cn, formatDate } from "@/lib/utils";

describe("Frontend Utils", () => {
  it("cn merges Tailwind classes correctly without collisions", () => {
    const result = cn("p-4 text-red-500", "p-6", { "bg-black": true, "bg-white": false });
    expect(result).toContain("p-6");
    expect(result).not.toContain("p-4");
    expect(result).toContain("bg-black");
    expect(result).not.toContain("bg-white");
  });

  it("formatDate formats date to expected locale format", () => {
    const date = new Date("2026-10-14T00:00:00Z");
    const formatted = formatDate(date);
    expect(formatted).toContain("Oct");
    expect(formatted).toContain("2026");
  });
});
