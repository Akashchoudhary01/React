import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
     if(counter >= 100)
    {
        alert("You've reached the maximum value of 100");
        return;
    }elseP
       setCounter(counter+1);

  
  };

  const deleteValue = () => {   
    if(counter <= 0)
    {
        alert("You've reached the minimum value of -10");
        return;
    }
    else{
      setCounter(counter -1);

    }

  };

  return (
    <>
      <h1>Hello World || Jai Shree Ram</h1>
      <h2>Counter Value : {counter}</h2>
      <hr />
      <br />

      <button onClick={addValue}>Increase Value</button>
      <button onClick={deleteValue}>Decrease Value</button>
    </>
  );
}

export default App;
