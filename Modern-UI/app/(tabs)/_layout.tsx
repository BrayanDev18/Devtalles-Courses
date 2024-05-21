import { Image, Text, View, ImageSourcePropType } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '@/constants'

interface TabIconProps {
  icon: string
  color: string
  name: string
  focused: boolean
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className=' items-center justify-center gap-2'>
      <Image
        source={{ uri: icon }}
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

export const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ffa001',
        tabBarInactiveTintColor: '#cdcde0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533'
        }
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name='Home'
              focused={focused}
            />
          )
        }}
      />

      <Tabs.Screen
        name='Bookmark'
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name='Bookmark'
              focused={focused}
            />
          )
        }}
      />

      <Tabs.Screen
        name='Create'
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name='Create'
              focused={focused}
            />
          )
        }}
      />

      <Tabs.Screen
        name='Profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name='Profile'
              focused={focused}
            />
          )
        }}
      />
    </Tabs>
  )
}
