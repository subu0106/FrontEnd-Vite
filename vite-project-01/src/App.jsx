import { useState } from 'react';
import './App.css'

function App() {
  const [counter,setCounter] =useState(15)
  const addValue=()=>
    {
      // this is simple bot not optimal: setCounter(counter+1)
      setCounter((prevCounter)=> prevCounter+1)
      //optimal one

    }

    const removeValue=()=>{
      setCounter((prevCounter)=> prevCounter-1)
    }

  return (
    <>
      <h1>React course from basics {counter}</h1>
      <h2>Counter value : {counter} </h2>
      <button
      onClick={addValue}>Add value</button>
      <button 
      onClick={removeValue}>Remove value</button>
      <p>Footer:{counter} </p>

    </>
  )
}

export default App
