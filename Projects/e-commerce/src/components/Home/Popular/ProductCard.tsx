import start from '../../../assets/icons/star.svg'

interface PopularProductCardProps {
  img: string;
  name: string;
  price: string;
}

export const PopularProductCard = ({ img, name, price }: PopularProductCardProps) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={img}
        alt={name}
        className="w-[280px] h-[280px]"
      />

      <div className="mt-8 flex justify-start gap-2.5">
        <img
          src={start}
          width={24}
          height={24}
          alt="start"
        />
        <p className='text-xl leading-normal text-slate-gray'>(4.5)</p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold'>{name}</h3>
      <p className='mt-2 font-semibold text-[#FF6500] text-1xl leading-normal'>{price}</p>
    </div>
  )
}