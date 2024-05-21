import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from '@react-navigation/native'

export default function App() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-3xl font-pblack'>Moder ui</Text>
      <StatusBar style='auto' />
      <Link
        to='/home'
        style={{ color: 'purple' }}
      >
        Go to Home
      </Link>
    </View>
  )
}
