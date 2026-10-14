import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "@/components/ui/button";

describe("Button Component", () => {
  it("renders with default variant and children text", () => {
    render(<Button>Click Test</Button>);
    const buttonElement = screen.getByRole("button", { name: /click test/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies gradient styling variant properly", () => {
    render(<Button variant="gradient">Gradient Button</Button>);
    const button = screen.getByRole("button", { name: /gradient button/i });
    expect(button.className).toContain("bg-gradient-to-r");
  });
});
