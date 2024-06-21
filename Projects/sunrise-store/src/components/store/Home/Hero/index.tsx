'use client'

import Image from "next/image";
import { useState } from "react";
import { ShoeCard } from "./ShoeCard";
import { Icon } from "@/components/common/Icon";
import { shoes, statistics } from "@/constants";
import { Button } from "@/components/common/Button";
import { Divider } from "@/components/common/Divider";
import bigShoe1 from "../../../../../public/images/model5.png";

export const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <div>
          <p className="text-lg text-yellow-primary">Our luxury Collection</p>
          <Divider styles="w-full h-0.5 bg-green-light-primary" />
        </div>

        <h1 className="mt-5 text-[73px] max-sm:text-[72px] max-sm:leading-[80px] font-bold">
          <span className="xl:bg-[#f6f2eb] xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block cursor-pointer">Sunrise</span> Store
          <Divider styles="w-[46%] h-0.5 bg-yellow-primary -mt-5 max-sm:-mt-2" />
        </h1>
        <p className="text-slate-gray text-lg leading-8 sm:max-w-sm my-8">
          Explora nuestra colección y descubre productos cuidadosamente diseñados
          para inspirar y elevar cada momento de tu día.
        </p>

        <Button
          label="Shop Now"
          to="/shp"
          icon={
            <Icon
              size="22px"
              name="bx-right-arrow-alt"
              animation="bx-flashing"
            />
          }
        />

        <div className="flex justify-center items-start flex-wrap w-full mt-10 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col justify-center items-center">
              <p className="text-[32px] font-bold">{stat.value}</p>
              <p className="leading-7 text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center" style={{ backgroundImage: `url(${bigShoeImg})` }}>
        <Image
          src={bigShoeImg}
          alt="shoe collection"
          layout="fill"
          className="object-cover object-top bg-black"
        />

        <div className="absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 z-20 flex sm:gap-6 gap-4">
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
  );
};
