import React, {useReducer} from 'react'

const intialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return intialState
        default:
            return state
    }
}

const UseReducer = () => {

    const [count, dispatch] = useReducer(reducer, intialState)

    console.log('render UseReducer')

  return (
    <div>
        <div>{count}</div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducer