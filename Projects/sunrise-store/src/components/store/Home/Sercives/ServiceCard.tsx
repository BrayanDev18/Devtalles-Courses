import Image from "next/image";

interface ServiceCardProps {
  key: string;
  imgURL: string;
  label: string;
  subtext: string;
}

export const ServiceCard = ({ key, imgURL, label, subtext }: ServiceCardProps) => {
  return (
    <div key={key} className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='w-11 h-11 flex justify-center items-center bg-[#EF9C66] rounded-full'>
        <Image src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className='mt-5 text-3xl leading-normal font-bold'>
        {label}
      </h3>
      <p className='mt-3 break-words text-lg leading-normal text-slate-gray'>
        {subtext}
      </p>
    </div>
  )
}