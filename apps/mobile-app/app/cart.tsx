import { View, Text } from 'react-native';

export default function Cart() {
  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <Text className="text-xl text-gray-500">Your cart is empty</Text>
    </View>
  );
}
