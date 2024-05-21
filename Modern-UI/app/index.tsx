import { images } from '@/constants'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full items-center h-full px-4'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[130px] h-[84px]'
          />

          <Image
            source={images.cards}
            resizeMode='contain'
            className='max-w-[380px] w-full h-[300px]'
          />

          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless Possibilities with{' '}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>

            <Image
              source={images.path}
              resizeMode='contain'
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
            />
          </View>

          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
