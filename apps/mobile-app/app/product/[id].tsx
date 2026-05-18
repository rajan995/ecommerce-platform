import { View, Text, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Product } from '@repo/types';
import { formatCurrency } from '@repo/utils';

export default function ProductDetails() {
  const { id } = useLocalSearchParams();

  // Placeholder product using shared types
  const product: Product = {
    id: id as string,
    name: 'Sample Premium Product',
    price: 199.99,
    description: 'A high-quality product that meets all your needs.',
    category: 'Premium',
    stock: 5,
    images: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  return (
    <View className="flex-1 bg-white p-4">
      <View className="h-64 bg-gray-200 rounded-2xl items-center justify-center mb-6">
        <Text className="text-gray-400">Product Image Placeholder</Text>
      </View>

      <Text className="text-3xl font-bold text-gray-900">{product.name}</Text>
      <Text className="text-2xl text-blue-600 font-semibold my-2">{formatCurrency(product.price)}</Text>

      <Text className="text-gray-600 text-lg mb-6 leading-relaxed">
        {product.description}
      </Text>

      <TouchableOpacity className="bg-blue-600 p-4 rounded-xl items-center">
        <Text className="text-white font-bold text-lg">Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
