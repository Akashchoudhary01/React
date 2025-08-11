import React from 'react'
import { useParams } from 'react-router-dom'

 export default  function User() {
    const {userid} = useParams()
  return (
    <div className=' bg-emerald-50 p-5 items-center flex justify-center text-3xl text-amber-500'>
        User : {userid}
      
    </div>
  )
};


