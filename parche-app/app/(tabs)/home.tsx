import { router } from "expo-router";
import { View, Text, Pressable, FlatList } from "react-native";
import { Plus } from "lucide-react-native";
import { ScreenContainer } from '@/shared/components/ui/screen-container';
import { PlanCard } from '@/features/plans/components/plan-card';
import { EmptyPlansState } from '@/features/plans/components/empty-plans-state';
import { useUserPlans } from '@/features/plans/hooks/use-user-plans';

export default function HomeScreen() {
  const { plans } = useUserPlans();

  return (
    <ScreenContainer>
      <View className="bg-indigo-600 px-6 pt-14 pb-8 rounded-b-3xl">
        <Text className="text-3xl font-bold text-white mb-2">Parche</Text>
        <Text className="text-indigo-100">
          Organiza planes con tus amigos
        </Text>
      </View>

      <View className="px-6 -mt-6 mb-6">
        <Pressable
          onPress={() => router.push("/plans/create")}
          className="w-full bg-white rounded-2xl shadow p-4 flex-row items-center justify-center gap-3"
        >
          <Plus size={20} color="#4f46e5" />
          <Text className="text-indigo-600 font-semibold text-base">
            Crear nuevo plan
          </Text>
        </Pressable>
      </View>

      <View className="px-6 flex-1">
        <Text className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          Tus planes
        </Text>

        <FlatList
          data={plans}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PlanCard
              plan={item}
              onPress={() => router.push(`/plans/${item.id}`)}
            />
          )}
          ItemSeparatorComponent={() => <View className="h-4" />}
          ListEmptyComponent={<EmptyPlansState />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
        />
      </View>
    </ScreenContainer>
  );
}