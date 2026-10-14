export interface ServiceItem {
  _id?: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  isActive: boolean;
  order: number;
}
