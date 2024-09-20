
import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(5) 
  function add(){
    counter = counter + 1
    setCounter(counter)
  }
  function remove(){
    if(counter !== 0){
      counter = counter - 1
    }
    setCounter(counter)
  }
  return (
    <>
     <h2>Counter App</h2>
     <button type='button' onClick={remove}>-</button>
      <span style={
        {'padding':'0 18px'}
      }>{counter}</span>
      <button type='button' onClick={add}>+</button>

    </>
  )
}

export default App
