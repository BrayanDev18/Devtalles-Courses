import { Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
  title: string
  handlePress: () => void
  containerStyles: string
  textStyle?: string
  isLoading?: boolean
}

export const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyle,
  isLoading
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? 'opacity-50' : ''
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
