import { View, Text } from "react-native";

export function EmptyPlansState() {
  return (
    <View className="bg-white rounded-2xl p-6 items-center justify-center">
      <Text className="text-lg font-semibold text-gray-900 mb-2">
        Aún no tienes planes
      </Text>
      <Text className="text-sm text-gray-500 text-center">
        Crea tu primer plan y empieza a organizar sin el caos del WhatsApp.
      </Text>
    </View>
  );
}