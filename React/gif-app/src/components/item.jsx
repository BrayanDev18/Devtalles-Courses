import { useEffect, useState } from "react"
import { getGifs } from "../herlpers/getGifs"

export const ListGifItem = ({ category }) => {

  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs(category).then(res => setGifs(res))
  }, [category])

  return (
    <>
      {gifs.map((gif) => (
        <div key={gif?.id} className="relative h-60 w-60 overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <div className="flex flex-col h-full w-full rounded-xl bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl">
            <div className="flex-1 p-1">
              <img src={gif?.url} className="h-full w-full object-cover rounded-md" />
            </div>
            <p className="px-3 py-1 text-[13px]">{gif?.title}</p>
          </div>
        </div>
      ))}
    </>
  )
}