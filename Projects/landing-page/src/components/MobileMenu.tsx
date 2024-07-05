import { useState } from 'react'
import { AlignJustify, X } from 'lucide-react'

const NavItems = [
  {
    title: 'About us',
    url: '/'
  },
  {
    title: 'Pricing',
    url: '/'
  },
  {
    title: 'Feautures',
    url: '/'
  },
  {
    title: 'Sign In',
    url: '/'
  },
  {
    title: 'Sign Up',
    url: '/'
  }
]

export const MobileMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <div className='block md:hidden'>
      {
        !isOpenMenu ? (
          <AlignJustify size={30} onClick={() => setIsOpenMenu(true)} />
        ) : (
          <>
            <X size={30} onClick={() => setIsOpenMenu(false)} />
            <div className='absolute left-0 w-full top-20 bg-white/60 backdrop-blur-lg border-b border-t'>
              <ul className='flex flex-col items-center py-4'>
                {NavItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} className='block text-gray-600 p-4'>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )
      }
    </div>
  )
}