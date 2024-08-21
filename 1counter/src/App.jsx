import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(0)




  //let counter = 0 

  const addValue = () => {
    //counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  const resetValue = () => {
    setCounter(0)
  }
  

  return (
    <>
      <h1>hello world</h1>
      <h1>counter value: {counter}</h1>

      <button onClick={addValue}>Add value: {counter}</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove value: {counter}</button>
      <br/>
      <br/>
      <button onClick={resetValue}>Reset value: {counter}</button>

    </>
  )
}

export default App
