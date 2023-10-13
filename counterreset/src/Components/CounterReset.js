import React from 'react'
import { useState } from 'react';
const CounterReset = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
    <center>
    <button className="count" onClick={()=>setCount(count+1)}>
    increment
    </button>
    <button className="count" onClick={()=>{if(count>0)setCount(count-1)}}>
    decrement
    </button>
    <div className='box'>
    <p>{count}</p></div>
    
    <button className="count" onClick={()=>setCount(0)}>
    reset
    </button>
    </center>
    </div>
  )
}

export default CounterReset;