import React, {useState} from 'react'
import { ChildOne } from './ChildOne'

export const ParentOne = () => {

    const [count, setCount] = useState(0)

    console.log('render ParentOne')

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
        <ChildOne/>
    </div>
  )
}

// same element reference
// component can change its state but not props
