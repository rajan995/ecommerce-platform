import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#2563eb' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'E-Shop Home' }} />
      <Stack.Screen name="cart" options={{ title: 'Your Cart' }} />
      <Stack.Screen name="profile" options={{ title: 'My Profile' }} />
      <Stack.Screen name="product/[id]" options={{ title: 'Product Details' }} />
    </Stack>
  );
}
