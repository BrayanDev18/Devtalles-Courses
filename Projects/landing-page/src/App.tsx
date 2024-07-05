import { PartnersLogo } from "./constants"
import { NavBar } from "./components/NavBar"
import { Slider } from "./components/Slider"
import { RoadMap } from "./components/RoadMap"
import { HeroSection } from "./components/HeroSection"
import { Features } from "./components/Features"
import { Testimonials } from "./components/Testimonials"
import { PricingSection } from "./components/PricingSection"

function App() {
  return (
    <>
      <div className="w-screen min-h-screen fixed z-0 flex justify-center px-6 py-40 pointer-events-none">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <img src="/mesh.svg" alt="mesh" className="opacity-15 absolute bottom-1 h-[600px] z-10" />
        <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20"></div>
      </div>

      <div className="relative z-20">
        <NavBar />
        <div className="container mx-auto">
          <HeroSection />
          <Slider images={PartnersLogo} />
          <RoadMap />
          <Features />
          <Testimonials />
          <PricingSection />
        </div>
      </div>
    </>
  )
}

export default App
