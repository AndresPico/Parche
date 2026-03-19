import { router } from "expo-router";
import { View } from "react-native";
import { ScreenContainer } from "@/shared/components/ui/screen-container";
import { ScreenHeader } from "@/shared/components/ui/screen-header";
import { PlanForm } from "@/features/plans/components/plan-form";
import { useCreatePlan } from "@/features/plans/hooks/use-create-plan";

export default function CreatePlanScreen() {
  const { createPlan, isLoading } = useCreatePlan();

  const handleSubmit = async (values: {
    title: string;
    eventDate: string;
    startTime: string;
    placeName: string;
    planType: "rumba" | "paseo" | "comida" | "deporte" | "viaje" | "otro";
  }) => {
    const planId = await createPlan(values);
    router.replace(`/plans/${planId}`);
  };

  return (
    <ScreenContainer>
      <ScreenHeader title="Crear plan" showBack />

      <View className="flex-1 px-6 py-6">
        <PlanForm onSubmit={handleSubmit} isLoading={isLoading} />
      </View>
    </ScreenContainer>
  );
}