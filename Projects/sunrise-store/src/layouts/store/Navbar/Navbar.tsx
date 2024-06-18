import Image from 'next/image'
import { navLinks } from '@/constants'

export const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center ma x-container'>
        <div className='flex flex-row items-center gap-4'>
          <a href='/'>
            <Image
              src="/images/header-logo.svg"
              alt="logo"
              width={60}
              height={29}
            />
          </a>

          <p className='text-[25px] text-[#EF9C66] font-bold'>Sunrise</p>
        </div>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='leading-normal text-lg text-slate-gray'
              >{item.label}</a>
            </li>
          ))}
        </ul>

        <div className='hidden max-lg:block'>
          <Image
            src="/assets/icons/hamburger.svg"
            alt="hambu"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header >
  )
}