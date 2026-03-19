import { useState } from "react";

interface CreatePlanInput {
  title: string;
  eventDate: string;
  startTime: string;
  placeName: string;
  planType: "rumba" | "paseo" | "comida" | "deporte" | "viaje" | "otro";
}

export function useCreatePlan() {
  const [isLoading, setIsLoading] = useState(false);

  const createPlan = async (input: CreatePlanInput) => {
    setIsLoading(true);

    try {
      console.log("Creating plan:", input);

      await new Promise((resolve) => setTimeout(resolve, 500));

      return "mock-plan-id-1";
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createPlan,
    isLoading,
  };
}