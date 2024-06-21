import copyrightSign from '../../../../public/icons/copyright-sign.svg'
import Image from "next/image"
import { footerLinks, socialMedia } from '@/constants'

export const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <div className='flex flex-row items-center gap-4'>
            <a href='/'>
              <Image
                src="/images/header-logo.svg"
                alt="logo"
                width={80}
                height={29}
              />
            </a>

            <p className='text-[25px] text-coral-red font-bold'>Sunrise</p>
          </div>
          <p className='mt-6 text-base leading-7  text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className='flex justify-center cursor-pointer items-center w-12 h-12 bg-white rounded-full hover:bg-green-light-primary'
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className=' text-2xl leading-normal font-medium mb-6 text-green-light-primary'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                  key={link.name}
                    className='mt-3 text-base leading-normal text-white-400 hover:text-slate-gray'
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 cursor-pointer'>
          <Image
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}