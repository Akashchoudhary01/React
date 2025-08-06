import { useState , useCallback , useEffect, useRef } from "react"

function App() {

  const [length , setLength] = useState(8);
  const [numAllowed , setNumAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState();

  //password generator
  const paswordGenerator = useCallback( ()=>{
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if(numAllowed == true){
      str += "1234567890";
    }
    if(charAllowed == true){
      str +="!@$^&*_|:";
    }

    for(let i = 1 ; i< length; i++ ){
      let char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);

    }
    setPassword(pass);


  }, [numAllowed , charAllowed , length , setPassword]);

  //password copy
  const  CopyPasswordToClipbord = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select();

  } , [password]);

  //useEffect hook
  useEffect(()=>{
    paswordGenerator();
  } , [length , numAllowed , charAllowed , paswordGenerator])

  //useRef hook

  const passwordRef = useRef(null);
  
  return (
    <div className="h-screen w-full bg-zinc-900 flex items-center text-white justify-center relative">
  <div className="max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-zinc-800">
    <h1 className="text-3xl p-8  ">Password Generator</h1>
   
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input type="text" 
    value={password}
    placeholder="password"
    readOnly
    ref={passwordRef}
    className="bg-white text-black rounded-md outline-none w-full py-1 px-3"
    />
    <button onClick={CopyPasswordToClipbord} className="py-0.5 px-3 ml-2 outline-none bg-blue-700 rounded-xl active:bg-amber-600 "> Copy</button>
    
    </div>
    <div className="flex mb-8 text-md gap-x-8">
      <div className="flex items-center gap-x-1">
        <input type="range"
        min={8}
        max={20}
        value={length}
        className=" cursor-grabbing"
        onChange={(e) => {setLength(e.target.value)}}

        
        />
        <label htmlFor="">Length : {length}</label>
      </div>
     
      <div className=" flex items-center , gap-x-1">
        <input 
        type="checkbox" 
        defaultChecked = {numAllowed}
        id="number"
        onChange={()=>{
          setNumAllowed((prev) => !prev);
        }}
        />
        <label >number</label>
    
        
      </div>


      <div className=" flex items-center ,  mb-4gap-x-1">
        <input 
        type="checkbox" 
        defaultChecked = {charAllowed}
        id="charecter"
     onChange={() => setCharAllowed(prev => !prev)}
        />
        <label >charecter</label>
    
        
      </div> 
    </div>

  </div> 
  <div className="flex absolute bottom-4 right-4"> made with ❤️ by  <a href="https://www.linkedin.com/in/akashchoudhary007/">    Akash</a></div>
</div>

  )
}

export default App
