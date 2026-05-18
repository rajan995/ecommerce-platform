import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { formatCurrency } from '@repo/utils';

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="py-8 items-center">
        <Text className="text-3xl font-bold text-gray-900">Welcome to E-Shop</Text>
        <Text className="text-gray-500 text-center mt-2">Shop the latest trends on the go.</Text>
      </View>

      <View className="space-y-4">
        <Text className="text-xl font-semibold mb-4">Featured Deal</Text>
        <TouchableOpacity
          className="bg-blue-600 p-6 rounded-2xl shadow-lg"
          onPress={() => {}}
        >
          <Text className="text-white text-lg font-bold">Winter Sale - 50% OFF</Text>
          <Text className="text-blue-100">Limited time offer!</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-8 p-4 bg-gray-100 rounded-xl">
        <Text className="text-sm text-gray-400">Shared Utils Test:</Text>
        <Text className="text-lg font-mono">{formatCurrency(19.99)}</Text>
      </View>

      <Link href="/cart" className="mt-6 p-4 bg-gray-200 rounded-lg items-center">
        <Text className="text-blue-600 font-bold">Go to Cart</Text>
      </Link>
    </ScrollView>
  );
}
