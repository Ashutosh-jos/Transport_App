import { Stack } from "expo-router";
import '../global.css';
export default function RootLayout() {
  return <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name="index" />
    <Stack.Screen name="index1" />
    <Stack.Screen name="index2" />
    <Stack.Screen name="(tabs)"  />
    {/* <Stack.Screen name="about" options={{ title: 'About' }} />
    <Stack.Screen name="settings" options={{ title: 'Settings' }} />
    <Stack.Screen name="profile" options={{ title: 'Profile' }} />
    <Stack.Screen name="login" options={{ title: 'Login' }} />
    <Stack.Screen name="register" options={{ title: 'Register' }} /> */}
  </Stack>
}
