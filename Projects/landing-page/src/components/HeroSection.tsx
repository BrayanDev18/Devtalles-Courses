import HeroLogo from "../assets/heroLogo.png"
import { Tag } from "./Tag"
import { ChevronRight } from "lucide-react"

export const HeroSection = () => {
  return (
    <section className="hero-section text-center mt-32 flex flex-col">
      <Tag>
        <div className="flex items-center cursor-pointer">
          <span>Brayan Isaza Posada</span>
          <ChevronRight className="w-6 h-6 ml-1 text-indigo-300 overflow-visible" />
        </div>

      </Tag>

      <h1 className="text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl">
        Launch Your Sass
        <br />
        <span className="bg-gradient-to-r from-green-500 via-indigo-600 to-green-500 bg-clip-text text-transparent">In minutes Not Days</span>
      </h1>

      <h2 className="mt-5 text-gray-600 sm:text-xl">
        Future devs is an development brach that make the hard easy who want to launh their ideas faster
      </h2>

      <div className="mx-auto mt-5 max-w-fit space-x-4">
        <a href="" className="rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-black bg-black text-white hover:ring-gray-400 hover:ring-2">
          Explore more
        </a>
        <a href="" className="rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-gray-200 bg-white text-black hover:ring-gray-300 hover:ring-2">Contact</a>
      </div>
      <div className="mt-14 items-center justify-center">
        <img src={HeroLogo} alt="demo" className="mx-auto max-h-[300px] sm:max-h-[500px]" />
      </div>
    </section>
  )
}