// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()
    // const [data , setData] = useState({})
    //   useEffect(()=>{
    //     fetch('https://api.github.com/users/akashchoudhary01')
    //     .then(response => response.json())
    //     .then(data =>{
    //         setData(data)
    //     } )
    //   } , [])
    if (!data) {
    return <div className="text-center mt-8 text-xl">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
        <h1 className="text-4xl font-bold mb-4 tracking-wide">Github Followers : {data.following}</h1>
        <img 
          src={data.avatar_url} 
          alt="" 
          className="w-40 h-40 rounded-full shadow-lg border-4 border-indigo-500 hover:scale-105 transition-transform duration-300"
        />
        <p className="mt-4 text-lg text-gray-300">@{data.login}</p>
    </div>
  )
}

export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/akashchoudhary01');
    return response.json();
}
