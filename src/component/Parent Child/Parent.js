import React, {useState} from 'react'
import { Child } from './Child'

export const Parent = () => {

    const [count, setCount] = useState(0)

    console.log('render Parent')

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
        <button onClick={() => setCount(0)}>Count to 0</button>
        <button onClick={() => setCount(5)}>Count to 5</button>
        <Child />
    </div>
  )
}
