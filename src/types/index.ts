export type Status = "idle" | "loading" | "success" | "error";

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt?: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
  external?: boolean;
}
