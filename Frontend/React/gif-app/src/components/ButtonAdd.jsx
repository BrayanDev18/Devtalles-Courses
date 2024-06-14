export const ButtonAdd = (props) => {
  const {
    categories,
    inputValue,
    setCategories,
    setInputValue
  } = props

  const addCategory = () => {
    if (categories.includes(inputValue)) return

    setCategories([inputValue])
    setInputValue('')
  }

  return (
    <button onClick={addCategory} className='relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] '>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        New
      </span>
    </button>
  )
}