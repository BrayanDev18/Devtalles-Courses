import { Text, TextInput, View } from 'react-native'

interface FieldProps {
  label: string
  value: string
  placeholder: string
  otherStyle: string
  keyBoardType?: string
  handleChange: (value: string) => void
}

export const FormField = (props: FieldProps) => {
  const { label, value, otherStyle, keyBoardType, placeholder, handleChange } =
    props

  return (
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{label}</Text>
      <View className='w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:bg-secondary'>
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChangeText={handleChange}
          className='flex-1 text-white font-psemibold text-base'
        />
      </View>
    </View>
  )
}
