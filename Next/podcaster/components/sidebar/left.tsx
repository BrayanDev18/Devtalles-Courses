'use client'

import React from 'react'
import { sidebarItems } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

export const LeftSidebar = () => {
  const pathName = usePathname()
  const router = useRouter()

  return (
    <section className='left_sidebar'>
      <nav className='flex flex-col gap-6'>
        <Link
          href='/'
          className='flex cursor-pointer items-center gap-1 mb-10 max-lg:justify-center'
        >
          <Image
            alt='logo'
            width={23}
            height={27}
            src='/icons/logo.svg'
          />
          <h1 className='text-24 font-extrabold text-white max-lg:hidden'>
            Podcastr
          </h1>
        </Link>

        {sidebarItems.map(({ label, imgURL, route }) => {
          const isActive =
            pathName === route || pathName.startsWith(`${route}/`)

          return (
            <Link
              href={route}
              key={label}
              className={cn(
                'flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start',
                { 'bg-nav-focus border-r-4 border-orange-1': isActive }
              )}
            >
              <Image
                src={imgURL}
                alt='img'
                width={24}
                height={24}
              />

              <p>{label}</p>
            </Link>
          )
        })}
      </nav>
    </section>
  )
}
