import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(10);

  const addValue = () =>{
      if(count > 99){
      alert("hey limit is 1- 100");
      return;
    }
    setCount(prevCount => prevCount+1);
  

  }
  const removeCount = () =>{
      if(count < 1){
      alert("hey limit is 1 - 100");
      return;
    }
    setCount(prevCount => prevCount-1);

  }

  return (
    <>
    <h1>Basic Counter </h1>
    <h1>Count : {count}</h1>
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeCount}>Remove Value</button>
    </>
  )
}

export default App
