import { ReactNode } from "react";
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";

interface ScreenHeaderProps {
  title?: string;
  showBack?: boolean;
  action?: ReactNode;
}

export function ScreenHeader({
  title,
  showBack = false,
  action,
}: ScreenHeaderProps) {
  const router = useRouter();

  return (
    <View className="bg-white border-b border-gray-200 px-4 h-14 flex-row items-center justify-between">
      <View className="flex-row items-center gap-3 flex-1">
        {showBack ? (
          <Pressable
            onPress={() => router.back()}
            className="p-2 -ml-2 rounded-full"
          >
            <ArrowLeft size={20} color="#374151" />
          </Pressable>
        ) : null}

        {title ? (
          <Text className="text-lg font-semibold text-gray-900" numberOfLines={1}>
            {title}
          </Text>
        ) : null}
      </View>

      {action ? <View>{action}</View> : null}
    </View>
  );
}