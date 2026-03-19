import { Pressable, Text, View } from "react-native";
import { Calendar, MapPin } from "lucide-react-native";
import { format } from "date-fns";
import type { PlanListItem } from "../types/plan.types";

interface PlanCardProps {
  plan: PlanListItem;
  onPress: () => void;
}

const PLAN_ICONS: Record<string, string> = {
  rumba: "🎉",
  viaje: "✈️",
  comida: "🍽️",
  deporte: "⚽",
  paseo: "🏕️",
  otro: "📅",
};

export function PlanCard({ plan, onPress }: PlanCardProps) {
  const icon = PLAN_ICONS[plan.planType] || "📅";

  return (
    <Pressable
      onPress={onPress}
      className="w-full bg-white rounded-2xl shadow p-4"
    >
      <View className="flex-row items-start gap-3">
        <Text className="text-3xl">{icon}</Text>

        <View className="flex-1">
          <Text
            className="font-semibold text-gray-900 mb-1"
            numberOfLines={1}
          >
            {plan.title}
          </Text>

          <View className="gap-2">
            <View className="flex-row items-center gap-2">
              <Calendar size={16} color="#4b5563" />
              <Text className="text-sm text-gray-600">
                {format(new Date(plan.eventDate), "MMM d, yyyy")} · {plan.startTime}
              </Text>
            </View>

            <View className="flex-row items-center gap-2">
              <MapPin size={16} color="#4b5563" />
              <Text className="text-sm text-gray-600 flex-1" numberOfLines={1}>
                {plan.placeName || "Lugar por definir"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}