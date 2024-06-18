'use client'

import arrowRight from "../../../../../public/icons/arrow-right.svg"
import bigShoe1 from "../../../../../public/images/big-shoe1.png"
import { ShoeCard } from "./ShoeCard"
import { useState } from "react"
import { shoes, statistics } from "@/constants"
import Image from "next/image"
import { Button } from "@/components/common/Button"

export const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">

      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-lg text-[#FCDC94]">Our luxury Collection</p>

        <h1 className="mt-5 text-[73px] max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-[#EF9C66] inline-block">Sunrise</span> Store
        </h1>
        <p className="text-slate-gray text-lg leading-8 sm:max-w-sm my-8">
          Explora nuestra colección y descubre productos diseñados para inspirar y elevar tu día.
        </p>

        <Button label="Shop Now" to="/shp" icon={arrowRight} />

        <div className="flex justify-center items-start flex-wrap w-full mt-10 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col justify-center items-center">
              <p className="text-[32px] font-bold">{stat.value}</p>
              <p className="leading-7 text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <Image
          src={bigShoeImg}
          alt="shoe collection"
          width={600}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6" >
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgUrl={shoe}
                bigShoeImage={bigShoeImg}
                changeBigSheImage={(shoe) => setBigShoeImg(shoe)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}