import { useEffect, useState } from "react"
import { getGifs } from "../../helpers/getGifs"
import PropTypes from 'prop-types';

export const ListGifItem = ({ category }) => {

  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs(category).then(res => setGifs(res))
  }, [category])

  return (
    <>
      {gifs.map((gif) => (
        <div key={gif?.id} className="relative w-[300px] h-[300px] overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <div className="grid grid-rows-2 h-full w-full rounded-xl bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl">
            <div className="p-1 h-[250px]">
              <img src={gif?.url} className="h-full w-full object-cover rounded-md" role="img" />
            </div>
            <div className="grid place-content-end text-center justify-center">
              <p className="px-3 py-1 text-[13px]">{gif?.title}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

ListGifItem.propTypes = {
  category: PropTypes.string.isRequired,
};
