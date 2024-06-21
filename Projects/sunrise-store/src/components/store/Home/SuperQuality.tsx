import Image from "next/image"
import { Button } from "../../common/Button"
import shoe8 from "../../../../public/images/shoe8.svg"
import { Icon } from "@/components/common/Icon"

export const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg text-slate-gray text-lg leading-7'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg text-slate-gray text-lg leading-7'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button
            label='View details'
            to="/shp"
            icon={
             <Icon
              size="22px"
              name="bx-right-arrow-alt"
              animation="bx-flashing"
            />
            }
          />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <Image
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  )
}