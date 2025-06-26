import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='flex justify-center item-center'>

  <div className="w-66 h-66 rounded-xl">
        <img
          src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
          alt="Giphy"
          className="rounded-t-xl opacity-80 hover:opacity-100 transition duration-300"
          />
        <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
          <h1 className="font-bold  font-mono  text-xl">This Page Is Comming soon</h1>

        </div>
        <div>   User: {userId}</div>
     
      </div>
          </div>
  )
}

export default User
