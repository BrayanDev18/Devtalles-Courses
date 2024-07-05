import { MileStoneProps } from "../interfaces"

export const MileStone = ({ title, description, lastItem }: MileStoneProps) => {
  return (
    <div className="flex w-full">
      <div className="relative flex flex-col items-center h-32">
        <div className="z-20 bg-gradient-to-b from-green-500 to-indigo-500 h-4 w-4 rounded-full flex-shrink-0 relative">
          <div className="bg-gradient-to-b from-green-500 to-indigo-500 w-5 h-5 rounded-full flex-shrink-0 absolute z-10 blur-md"></div>
        </div>
        {!lastItem && (
          <div className="z-0 absolute top-2 w-1 bg-gray-400 flex-grow h-full"></div>
        )}
      </div>

      <div className="ml-10">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      {!lastItem && <div></div>}
    </div>
  )
}