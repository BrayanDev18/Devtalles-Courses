import { navLinks } from '../../constants'
import hamburger from '../../assets/icons/hamburger.svg'
import headerLogo from '../../assets/images/header-logo.svg'

export const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center ma x-container'>
        <div className='flex flex-row items-center gap-4'>
          <a href='/'>
            <img
              src={headerLogo}
              alt="logo"
              width={60}
              height={29}
            />
          </a>

          <p className='text-[25px] text-[#FF6500] font-bold'>Sunrise</p>
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
          <img
            src={hamburger}
            alt="hambu"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header >
  )
}