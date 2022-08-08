import React, { useState } from 'react'

const withCounter = (Component: any) => {
  return () => {
    const [counter, setCounter] = useState(0)
    const incrementCounter = () => {
      setCounter((prevState) => prevState + 1)
    }
    return <Component counter={counter} incrementCounter={incrementCounter} />
  }
}

export default withCounter
