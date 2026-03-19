export type PlanType =
  | "rumba"
  | "paseo"
  | "comida"
  | "deporte"
  | "viaje"
  | "otro";

export type PlanStatus =
  | "draft"
  | "active"
  | "closed"
  | "completed"
  | "cancelled";

export interface PlanListItem {
  id: string;
  title: string;
  planType: PlanType;
  eventDate: string;
  startTime: string;
  placeName?: string | null;
  status: PlanStatus;
}