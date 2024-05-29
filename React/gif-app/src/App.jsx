import { Fragment, useState } from "react"
import { InputAdd } from "./components/InputAdd";
import { ButtonAdd } from "./components/ButtonAdd";
import { ListGifItem } from "./components/item";

function GifApp() {

  const [categories, setCategories] = useState(['Avatar'])
  const [inputValue, setInputValue] = useState('')

  return (
    <div className=' bg-black h-full text-white p-[100px]'>
      <div className="grid gap-10">
        <h1 className="text-center text-[30px] text-[#8678F9]">Gift expert</h1>
        <div className="flex gap-4">
          <InputAdd {...{ inputValue, setInputValue }} />
          <ButtonAdd {...{ setCategories, categories, inputValue, setInputValue }} />
        </div>


        {categories?.map((category) => (
          <div key={category} className="flex flex-wrap gap-3 justify-center items-center">
            <ListGifItem category={category} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GifApp
