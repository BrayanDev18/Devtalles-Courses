import React from 'react'
import Image from 'next/image'

interface PodcastCardProps {
  title: string
  imgUrl: string
  podcastId: number
  description: string
}

export const PodcastCard = (props: PodcastCardProps) => {
  const { title, imgUrl, podcastId, description } = props

  return (
    <div
      key={podcastId}
      className=' cursor-pointer'
    >
      <figure className='flex flex-col gap-2'>
        <Image
          src={imgUrl}
          width={174}
          height={174}
          alt={title}
          className='aspect-square h-fit w-full rounded-xl 2xl:size-[200px]'
        />

        <div>
          <h1 className='text-16 truncate font-bold text-white-1'>{title}</h1>
          <h2 className='text-12  truncate font-normal capitalize text-white-4'>
            {description}
          </h2>
        </div>
      </figure>
    </div>
  )
}
