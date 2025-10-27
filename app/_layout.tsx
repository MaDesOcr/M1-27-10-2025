import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="page1"/>
      <Stack.Screen name="(page2)"/>
    </Stack>
  )
}
