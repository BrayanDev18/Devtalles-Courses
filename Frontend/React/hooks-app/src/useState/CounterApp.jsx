import { useCounterApp } from "../hooks/useCounterApp"

export const CounterApp = () => {
  const {
    counter1,
    counter2,
    counter3,
    handleReset,
    handleIncrement,
    handleDecrement
  } = useCounterApp()

  return (
    <div className="rounded-lg p-5 grid text-center gap-3">
      <h1 className="text-emerald-400 font-medium text-[20px]">Counter:{counter1} </h1>
      <h1 className="text-emerald-400 font-medium text-[20px]">Counter:{counter2} </h1>
      <h1 className="text-emerald-400 font-medium text-[20px]">Counter:{counter3} </h1>
      <div>
        <button onClick={() => handleIncrement(4)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            +1
          </span>
        </button>

        <button onClick={handleReset} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Reset
          </span>
        </button>

        <button onClick={handleDecrement} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            -1
          </span>
        </button>
      </div>
    </div>
  )
}