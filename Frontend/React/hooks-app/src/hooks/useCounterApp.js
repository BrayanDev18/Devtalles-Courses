import { useState } from "react"

export const useCounterApp = (initialValue = 5) => {
  const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 5,
    counter2: 10,
    counter3: 15
  })

  const handleIncrement = (value = 2) => {
    setCounter(current => {
      return {
        ...current,
        counter1: counter1 + value
      }
    })
  }

  const handleDecrement = () => {
    setCounter(current => {
      return {
        ...current,
        counter1: counter1 - 2
      }
    })
  }

  const handleReset = () => {
    setCounter({
      counter1: initialValue,
      counter2: initialValue,
      counter3: initialValue,
    })
  }

  return {
    counter1,
    counter2,
    counter3,
    handleReset,
    handleIncrement,
    handleDecrement
  }
}