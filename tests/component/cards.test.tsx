import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ServiceCard } from "@/features/services/components/service-card";
import { ProjectCard } from "@/features/portfolio/components/project-card";
import { ServiceItem } from "@/features/services/types";
import { ProjectItem } from "@/features/portfolio/types";

describe("Cards Components", () => {
  it("ServiceCard renders title, description, and feature deliverables correctly", () => {
    const mockService: ServiceItem = {
      slug: "custom-software",
      title: "Custom Software Engineering",
      shortDescription: "Tailored enterprise solutions built with modern stacks.",
      description: "Full description text.",
      iconName: "Code",
      features: ["Next.js App Router", "Express API", "PostgreSQL"],
      deliverables: ["Full codebase", "CI/CD setup"],
      isActive: true,
      order: 1,
    };

    render(<ServiceCard service={mockService} />);

    expect(screen.getByText("Custom Software Engineering")).toBeInTheDocument();
    expect(screen.getByText("Tailored enterprise solutions built with modern stacks.")).toBeInTheDocument();
    expect(screen.getByText("Next.js App Router")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /explore service capabilities/i })).toHaveAttribute(
      "href",
      "/services/custom-software"
    );
  });

  it("ProjectCard renders project title, industry, and technology badges", () => {
    const mockProject: ProjectItem = {
      slug: "nexus-analytics",
      title: "Nexus Analytics Platform",
      tagline: "Real-time AI telemetry",
      description: "Detailed description of the analytics product.",
      category: "saas",
      clientIndustry: "FinTech & Data",
      technologies: ["Next.js", "TypeScript", "Node.js"],
      thumbnailUrl: "/images/projects/nexus.webp",
      isFeatured: true,
    };

    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText("Nexus Analytics Platform")).toBeInTheDocument();
    expect(screen.getByText("Real-time AI telemetry")).toBeInTheDocument();
    expect(screen.getByText("FinTech & Data")).toBeInTheDocument();
    expect(screen.getByText("saas")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view case study/i })).toHaveAttribute(
      "href",
      "/portfolio/nexus-analytics"
    );
  });
});
