import { motion } from "framer-motion"

interface Image {
  id: number;
  logo: string;
  name: string;
}

interface SliderProps {
  images: Image[];
}

export const Slider: React.FC<SliderProps> = ({ images }) => {

  const imagesArray = [...images, ...images]

  return (
    <div className="h-[200px] relative overflow-hidden mx-auto max-w-screen-xl">
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:top-0 after:bg-gradient-to-l after:h-full after:w-14 after:right-0 after:from-white after:to-transparent"></div>
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity
          }
        }}
      >
        {imagesArray.map((image, index) => (
          <div key={index} className="h-full flex flex-shrink-0">
            <div className="flex items-center justify-center h-[200px]">
              <img
                src={image.logo}
                alt={image.name}
                className="h-full max-w-full object-contain opacity-75"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}