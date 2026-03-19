import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StatusBar } from "react-native";

interface ScreenContainerProps {
  children: ReactNode;
}

export function ScreenContainer({ children }: ScreenContainerProps) {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" />
      <View className="flex-1">{children}</View>
    </SafeAreaView>
  );
}