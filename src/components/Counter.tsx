import React, { useState } from 'react'
import * as classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    }

  return (
    <div className={classes.counter}>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
    </div>
  )
}