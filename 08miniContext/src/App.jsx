import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

export default function App(){
  return(
    <UserContextProvider>
      <h1> Jai Shree Ram !</h1>
     <Login/>
     <Profile/>

    </UserContextProvider>
  )
}