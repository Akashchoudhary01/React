import React , {useState , useContext } from 'react'
import userContext from '../context/context'

function Login() {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    const {setUser} = useContext(userContext);
    const handelSubmit = (e)=>{
        e.preventDefault()
        setUser({username , password})

    }
  return (
    <div>
        <h2>Login</h2>
        <label htmlFor="UserName">Username: </label>
        <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
         placeholder='UserName' />
         {"\n"}
  {" "}
  {" "}
        <label htmlFor="password">Password: </label>
        <input type="password"
         value={password}
        onChange={(e) => setPassword(e.target.value)}
         placeholder='password' />
      
        <button 
        onClick={handelSubmit}
        >Submit</button>
    </div>
  )
}

export default Login;
