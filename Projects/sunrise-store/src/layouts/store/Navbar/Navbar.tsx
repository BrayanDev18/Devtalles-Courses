'use client'

import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/constants'
import { Icon } from '@/components/common/Icon'
import { useSession, signOut } from 'next-auth/react'

export const Navbar = () => {
  const { data: session } = useSession()

  return (
    <header className='padding-x py-4 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <div className='flex flex-row items-center gap-4 pointer-events-none'>
          <a href='/'>
            <Image
              src="/images/header-logo.svg"
              alt="logo"
              width={60}
              height={29}
            />
          </a>

          <p className='text-[25px] text-coral-red font-bold'>Sunrise</p>
        </div>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='leading-normal transition ease-in-out duration-300 text-lg text-slate-gray hover:border-b-2 hover:border-b-coral-red'
              >{item.label}</a>
            </li>
          ))}
        </ul>

        <div className='flex flex-row items-center justify-center gap-4'>
          <Icon name='bx-globe' animation='bx-flashing' />
          <Link href="/auth/login">
            <Icon name='bx-user' />
          </Link>
          <Icon name='bx-shopping-bag' />

          {session?.user && (
            <>
              <div className='grid place-items-center'>
                <Image src={session?.user?.image || ''} alt="session" width={40} height={40} className='rounded-full'/>
                <p>{session?.user?.name}</p>
              </div>
              <button onClick={async () => {
                await signOut({
                  callbackUrl: '/',
                })
            
              }}>
                <Icon name='bx-log-out' />
              </button>
            </>
          )}
        </div>

        <div className='hidden max-lg:block'>
          <Icon name='bx-menu' />
        </div>
      </nav>
    </header>
  )
}