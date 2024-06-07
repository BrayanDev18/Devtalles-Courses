'use client'

import React from 'react'
import { Fragment} from "react"
import { podcastData } from '@/constants'
import { PodcastCard } from '@/components/podcast/card'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

export default function Home() {
  const tasks = useQuery(api.tasks.get)

  return (
    <div className='mt-9 flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold  text-white-1'>Trending podcast</h1>

        <div className='podcast_grid'>
          {podcastData.map(({ id, description, title, imgURL }) => (
            <Fragment key={id}>
              <PodcastCard
                title={title}
                podcastId={id}
                imgUrl={imgURL}
                description={description}
              />
            </Fragment>

          ))}
        </div>
      </section>
    </div>
  )
}


