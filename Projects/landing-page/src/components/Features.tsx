import { featuresList } from "../constants"
import { TagLine } from "./TagLine"

export const Features = () => {
  return (
    <div className="flex items-center p-10 justify-center flex-col">
      <TagLine>Features</TagLine>
      <h2 className="font-extrabold text-3xl mb-8 pt-3">Intelligent Form Building</h2>
      <div className="mt-10 grid items-center gridcol1 gap-3 md:grid-cols-3 max-w-screen-xl">
        {featuresList.map(({ title, description }, index) => (
          <div key={index} className="flex space-x-4 bg-white border border-indigo-400/30 rounded-lg h-full shadow-lg p-6">
            <div className="">
              <h3 className="font-bold text-xl">{title}</h3>
              <p className="text-gray-500">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}