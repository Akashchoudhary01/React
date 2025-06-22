import { useState } from 'react'
import Btn from './Componenet/buttons'

import './App.css'

function App() {
  const [Color, setColor] = useState("olive")

  return (
    <div className='w-screen h-screen duration-200 overflow-hidden' style={{backgroundColor : Color}}>
      <div className='flex fixed justify-center flex-wrap bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center text-black gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <Btn ColorName="red" clrValue="red" setColor={setColor}  />   
          <Btn ColorName="green" clrValue="green" setColor={setColor}/>   
          <Btn ColorName="yellow" clrValue="yellow"setColor={setColor} />   
          <Btn ColorName="black" clrValue="black" setColor={setColor} />   
          <Btn ColorName="brown" clrValue="brown" setColor={setColor} />   
          <Btn ColorName="gray" clrValue="gray" setColor={setColor} />   
          <Btn ColorName="orange" clrValue="orange" setColor={setColor} />   
          <Btn ColorName="white" clrValue="white" setColor={setColor} />   
          <Btn ColorName="blue" clrValue="blue" setColor={setColor} />   
         

        </div>

      </div>
    </div>

  )
}

export default App
