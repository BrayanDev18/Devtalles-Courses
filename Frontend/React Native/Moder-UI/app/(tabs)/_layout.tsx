import { Tabs } from 'expo-router'
import { useTabIcon } from '@/hooks/useTabIcon'
import { Image, ImageSourcePropType, Text, View } from 'react-native'

interface TabIconProps {
  icon: ImageSourcePropType
  color: string
  name: string
  focused: boolean
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
      />
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  )
}

export default function TabsLayout() {
  const { tabList } = useTabIcon()

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ffa001',
        tabBarInactiveTintColor: '#cdcde0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84
        }
      }}
    >
      {tabList.map(({ nameScreen, screenRef, icon }) => (
        <Tabs.Screen
          key={nameScreen}
          name={screenRef}
          options={{
            title: nameScreen,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name={nameScreen}
                color={color}
                icon={icon}
                focused={focused}
              />
            )
          }}
        />
      ))}
    </Tabs>
  )
}
