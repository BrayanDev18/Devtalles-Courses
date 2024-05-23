import { Stack } from 'expo-router'

export default function TabsLayout() {
  return (
    <Stack>
      <Stack.Screen name='login' />
      <Stack.Screen name='register' />
    </Stack>
  )
}
