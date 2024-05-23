import { Text, View } from 'react-native'

interface FieldProps {
  label: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormField = ({ label, value, handleChange }: FieldProps) => {
  return (
    <View className='space-y-2'>
      <Text className='text-base text-gray-100 font-pmedium'>{label}</Text>
    </View>
  )
}
