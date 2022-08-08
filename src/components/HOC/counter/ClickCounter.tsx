import { useState } from 'react'
import withCounter from './WithCounter'

const ClickCounter = ({ incrementCounter, counter }: any) => {
  //   const [counter, setCounter] = useState(0)
  //   const incrementCounter = () => {
  //     setCounter((prevState) => prevState + 1)
  //   }
  return <button onClick={incrementCounter}>Click: {counter}</button>
}

export default withCounter(ClickCounter)
