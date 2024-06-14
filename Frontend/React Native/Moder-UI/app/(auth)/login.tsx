import { useState } from 'react'
import { images } from '@/constants'
import { FormField } from '@/components/FormField'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full  h-full px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='h-[35px] w-[115px]'
          />

          <Text className='text-lg text-white font-semibold mt-10 font-psemibold'>
            Login in to Aora
          </Text>

          <FormField
            label='Email'
            otherStyle='mt-7'
            placeholder='Email adrres'
            value={formValues.email}
            keyBoardType='email-address'
            handleChange={handleInputChange}
          />

          <FormField
            label='Password'
            otherStyle='mt-7'
            placeholder='Password'
            value={formValues.password}
            handleChange={handleInputChange}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
