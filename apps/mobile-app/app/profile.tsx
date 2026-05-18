import { View, Text } from 'react-native';

export default function Profile() {
  return (
    <View className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold mb-4">My Profile</Text>
      <View className="border p-4 rounded-lg">
        <Text className="text-gray-600">Name: Guest User</Text>
        <Text className="text-gray-600">Email: guest@example.com</Text>
      </View>
    </View>
  );
}
