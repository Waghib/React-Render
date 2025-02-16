import React, {useState} from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)

    console.log('render UseState')

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={() => setCount(0)}>Count to 0</button>
        <button onClick={() => setCount(5)}>Count to 5</button>
    </div>
  )
}

export default UseState