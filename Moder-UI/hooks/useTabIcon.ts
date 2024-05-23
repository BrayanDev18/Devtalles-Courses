import { icons } from "@/constants"

export const useTabIcon = () => {
  const tabList = [
    {
      screenRef: 'home',
      nameScreen: 'Home',
      icon: icons.home
    },
    {
      screenRef: 'bookmark',
      nameScreen: 'Bookmark',
      icon: icons.bookmark
    },
    {
      screenRef: 'create',
      nameScreen: 'Create',
      icon: icons.plus
    },
    {
      screenRef: 'profile',
      nameScreen: 'Profile',
      icon: icons.profile
    },
  ]

  return {
    tabList
  }
}