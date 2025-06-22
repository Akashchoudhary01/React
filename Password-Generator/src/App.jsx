import { useState, useCallback , useEffect , useRef } from 'react';
import './App.css';

function App() {
  const [Length, setLength] = useState(8);
  const [numAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  //Ref hook
  const  passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '?@$%&';

    for (let i = 0; i < Length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [Length, numAllowed, charAllowed , setPassword]);

  const copyPasswordToClipbord = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectorRange(0 , 4);
    window.navigator.clipboard.writeText(password)

  }, [password])

  useEffect(()=>{
    passwordGenerator()

  } , [Length, numAllowed, charAllowed , passwordGenerator])

  return (
    <>
   <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-indigo-500/80 to-pink-500/80 p-6">
  <div className="bg-black text-white p-8 rounded-2xl shadow-xl max-w-sm w-full">
    <h1 className="text-3xl font-bold text-center mb-6">🔐 Password Generator</h1>

    <div className="bg-gray-800 rounded-lg px-4 py-3 text-lg text-center">
      <input type="text" 
      value={password}
       className='bg-transparent outline-none'
        readOnly
        ref={passwordRef} />
      <br />

    </div>
    <div className='flex justify-center mt-3 flex-col gap-4'>

      <button onClick={copyPasswordToClipbord} className='outline-none items-center rounded-md text-2xl bg-blue-600 py-1  px-3 shrink-0'>Copy</button>
  <div className='flex justify-center items-center mt-3 gap-4'>
  <input
    type="range"
    min={8}
    max={69}
    value={Length}
    onChange={(e) => setLength(e.target.value)}
    className='w-40 cursor-pointer outline-none'
  />
  <label>Length: {Length}</label>

 


  <div className='flex items-center'>
    <input type="checkbox"
    defaultChecked= {numAllowed}
    id = "numAllowed"
    onChange={()=>{
      setNumberAllowed((prev) => ! prev);
    }} />
    <label htmlFor="numAllowed">Number</label>
  </div>

  
  <div className='flex items-center'>
    <input type="checkbox"
    defaultChecked= {charAllowed}
    id = "charAllowed"
    onChange={()=>{
      setCharAllowed((prev) => ! prev);
    }} />
    <label htmlFor="charAllowed">Character</label>
  </div>



</div>
    


  </div>
  </div>
</div>

    </>
  );
}

export default App;
