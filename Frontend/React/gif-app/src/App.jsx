import { useState } from "react"
import { ButtonAdd, InputAdd, ListGifs } from "./components"

function GifApp() {

  const [categories, setCategories] = useState([])
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="grid gap-10 bg-black h-full w-screen p-[100px]">
      <h1 className="text-center text-[30px] text-[#8678F9]">Gift expert</h1>
      <div className="flex gap-4">
        <InputAdd {...{ inputValue, setInputValue }} />
        <ButtonAdd
          {...{
            setCategories,
            categories,
            inputValue,
            setInputValue
          }}
        />
      </div>

      <ListGifs {...{ categories }} />
    </div>
  )
}

export default GifApp
