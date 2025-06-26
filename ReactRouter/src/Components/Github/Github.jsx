// import React, { useEffect, useState } from 'react';
import {useLoaderData} from 'react-router-dom';

export default function Github() {
  // const [data, setData] = useState(null); // ✅ Declare state
  const data = useLoaderData()

  // useEffect(() => {
  //   fetch('https://api.github.com/users/akashchoudhary01')
  //     .then((response) => response.json()) // ✅ call json()
  //     .then((data) => {
  //       console.log(data);
  //       setData(data); // ✅ correct function name
  //     });
  // }, []);

  // Show loading before data is fetched
  if (!data) {
    return <div className="text-center mt-8 text-xl">Loading...</div>;
  }

return (
  <div className="text-center m-8 p-8 bg-gradient-to-r from-zinc-700 to-zinc-500 text-white rounded-lg shadow-lg">
    <img
      src={data.avatar_url}
      alt="GitHub Avatar"
      className="mx-auto mb-4 rounded-full border-4 border-white"
      width={150}
    />
    <h1 className="text-4xl font-bold mb-2">@{data.login}</h1>
    <p className="text-xl">Followers: {data.followers}</p>
    <p className="text-lg mt-1">Public Repos: {data.public_repos}</p>
  </div>
);

}

export const githubInfoLoader = async()=>{
  const response = await fetch('https://api.github.com/users/akashchoudhary01');
  return response.json()


}
