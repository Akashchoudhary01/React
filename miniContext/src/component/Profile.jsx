import React , {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
     const {user} = useContext(UserContext);

     if(!user) return <div className='items-center text-white text-center p-4 mb-5 text-3xl' >Please Login !</div>
     return <div className='items-center text-white text-center p-4 mb-5 text-3xl justify-center'>Welcome {user.userName}</div>
}

export default Profile
