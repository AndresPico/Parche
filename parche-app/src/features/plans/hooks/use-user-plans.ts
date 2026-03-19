import { useMemo } from "react";
import type { PlanListItem } from "../types/plan.types";

const MOCK_PLANS: PlanListItem[] = [
  {
    id: "1",
    title: "Rumba sábado",
    planType: "rumba",
    eventDate: "2026-03-21",
    startTime: "8:00 PM",
    placeName: "Casa de Ana",
    status: "active",
  },
  {
    id: "2",
    title: "Asado del domingo",
    planType: "comida",
    eventDate: "2026-03-22",
    startTime: "1:00 PM",
    placeName: "Parque del barrio",
    status: "active",
  },
];

export function useUserPlans() {
  const plans = useMemo(() => MOCK_PLANS, []);

  return {
    plans,
    isLoading: false,
    error: null,
  };
}