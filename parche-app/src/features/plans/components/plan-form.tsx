import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react-native";

type PlanType = "rumba" | "paseo" | "comida" | "deporte" | "viaje" | "otro";

interface PlanFormValues {
  title: string;
  eventDate: string;
  startTime: string;
  placeName: string;
  planType: PlanType;
}

interface PlanFormProps {
  onSubmit: (values: PlanFormValues) => void | Promise<void>;
  isLoading?: boolean;
}

const PLAN_TYPES: { value: PlanType; label: string; emoji: string }[] = [
  { value: "rumba", label: "Rumba", emoji: "🎉" },
  { value: "paseo", label: "Paseo", emoji: "🏕️" },
  { value: "comida", label: "Comida", emoji: "🍽️" },
  { value: "deporte", label: "Deporte", emoji: "⚽" },
  { value: "viaje", label: "Viaje", emoji: "✈️" },
  { value: "otro", label: "Otro", emoji: "📅" },
];

export function PlanForm({ onSubmit, isLoading = false }: PlanFormProps) {
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [planType, setPlanType] = useState<PlanType | null>(null);

  const isFormValid =
    title.trim() &&
    eventDate.trim() &&
    startTime.trim() &&
    placeName.trim() &&
    planType;

  const handleSubmit = () => {
    if (!isFormValid || !planType) return;

    onSubmit({
      title: title.trim(),
      eventDate,
      startTime,
      placeName: placeName.trim(),
      planType,
    });
  };

  return (
    <View className="gap-6">
      <View>
        <Text className="text-sm font-medium text-gray-700 mb-2">
          Nombre del plan
        </Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Asado del sábado"
          className="w-full px-4 py-4 rounded-xl border border-gray-300 bg-white text-gray-900"
          placeholderTextColor="#9ca3af"
        />
      </View>

      <View className="flex-row gap-4">
        <View className="flex-1">
          <Text className="text-sm font-medium text-gray-700 mb-2">Fecha</Text>
          <View className="relative">
            <View className="absolute left-3 top-4 z-10">
              <Calendar size={20} color="#9ca3af" />
            </View>
            <TextInput
              value={eventDate}
              onChangeText={setEventDate}
              placeholder="2026-03-21"
              className="w-full pl-10 pr-4 py-4 rounded-xl border border-gray-300 bg-white text-gray-900"
              placeholderTextColor="#9ca3af"
            />
          </View>
        </View>

        <View className="flex-1">
          <Text className="text-sm font-medium text-gray-700 mb-2">Hora</Text>
          <View className="relative">
            <View className="absolute left-3 top-4 z-10">
              <Clock size={20} color="#9ca3af" />
            </View>
            <TextInput
              value={startTime}
              onChangeText={setStartTime}
              placeholder="20:00"
              className="w-full pl-10 pr-4 py-4 rounded-xl border border-gray-300 bg-white text-gray-900"
              placeholderTextColor="#9ca3af"
            />
          </View>
        </View>
      </View>

      <View>
        <Text className="text-sm font-medium text-gray-700 mb-2">Lugar</Text>
        <View className="relative">
          <View className="absolute left-3 top-4 z-10">
            <MapPin size={20} color="#9ca3af" />
          </View>
          <TextInput
            value={placeName}
            onChangeText={setPlaceName}
            placeholder="Parque del barrio"
            className="w-full pl-10 pr-4 py-4 rounded-xl border border-gray-300 bg-white text-gray-900"
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>

      <View>
        <Text className="text-sm font-medium text-gray-700 mb-3">
          Tipo de plan
        </Text>

        <View className="flex-row flex-wrap gap-3">
          {PLAN_TYPES.map((type) => {
            const isSelected = planType === type.value;

            return (
              <Pressable
                key={type.value}
                onPress={() => setPlanType(type.value)}
                className={`w-[48%] p-4 rounded-xl border-2 ${
                  isSelected
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <Text className="text-3xl mb-1 text-center">{type.emoji}</Text>
                <Text className="text-sm font-medium text-gray-900 text-center">
                  {type.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <Pressable
        onPress={handleSubmit}
        disabled={!isFormValid || isLoading}
        className={`w-full py-4 rounded-xl ${
          isFormValid && !isLoading ? "bg-indigo-600" : "bg-gray-300"
        }`}
      >
        <View className="flex-row items-center justify-center gap-2">
          <Sparkles size={20} color="#ffffff" />
          <Text className="text-white font-semibold text-base">
            {isLoading ? "Creando..." : "Crear plan"}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}