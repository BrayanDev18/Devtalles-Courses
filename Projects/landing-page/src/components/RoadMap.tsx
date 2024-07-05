import { roadMap } from "../constants";
import { MileStone } from "./MileStone";

export const RoadMap = () => {
  return (
    <div className="max-w-80 mx-auto">
      <h1 className="font-semibold text-3xl text-center mb-16">RoadMap</h1>
      {roadMap.map(({ title, description }, index) => (
        <MileStone
          key={index}
          title={title}
          description={description}
          lastItem={index === roadMap.length - 1}
        />
      ))}
    </div>
  )
}