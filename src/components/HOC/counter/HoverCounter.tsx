import { useState } from 'react'
import withCounter from './WithCounter'

const HoverCounter = ({ incrementCounter, counter }: any) => {
  //   const [counter, setCounter] = useState(0)
  //   const incrementCounter = () => {
  //     setCounter((prevState) => prevState + 1)
  //   }
  return <button onMouseOver={incrementCounter}>Hover: {counter}</button>
}

export default withCounter(HoverCounter)
