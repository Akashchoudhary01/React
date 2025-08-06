import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="relative w-full h-screen duration-300" style={{ backgroundColor: color }}>
      
      {/* Centered Color Name */}
      <div className="flex justify-center items-center h-full">
        <h1 className="text-black text-4xl font-bold text-center">
          {color.toUpperCase()}
        </h1>
      </div>

      {/* Fixed Button Panel at Bottom */}
      <div className="fixed inset-x-0 bottom-12 flex justify-center px-4">
        <div className="flex flex-wrap gap-3 shadow-lg bg-white rounded-xl p-4">
          <button onClick={() => setColor("red")} className="px-4 py-2 bg-red-500 text-white rounded hover:opacity-90 transition">Red</button>
          <button onClick={() => setColor("yellow")} className="px-4 py-2 bg-yellow-400 text-black rounded hover:opacity-90 transition">Yellow</button>
          <button onClick={() => setColor("green")} className="px-4 py-2 bg-green-500 text-white rounded hover:opacity-90 transition">Green</button>
          <button onClick={() => setColor("white")} className="px-4 py-2 bg-white text-black border rounded hover:opacity-90 transition">White</button>
          <button onClick={() => setColor("blue")} className="px-4 py-2 bg-blue-500 text-white rounded hover:opacity-90 transition">Blue</button>
          <button onClick={() => setColor("brown")} className="px-4 py-2 bg-amber-800 text-white rounded hover:opacity-90 transition">Brown</button>
          <button onClick={() => setColor("purple")} className="px-4 py-2 bg-purple-600 text-white rounded hover:opacity-90 transition">Purple</button>
          <button onClick={() => setColor("black")} className="px-4 py-2 bg-black text-white rounded hover:opacity-90 transition">Black</button>
        </div>
      </div>

    </div>
  );
}

export default App;
