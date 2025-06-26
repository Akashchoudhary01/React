import Login from "./component/Login"
import Profile from "./component/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {


  return (
    <UserContextProvider>
      <div className="bg-zinc-800 h-screen ">


 <h1 className="bg-blue-400 text-4xl item-center p-6 mx-4    text-center">Hello , Jai Shree Ram 🚩</h1>
 <Login/>
 <Profile/>
      </div>
    </UserContextProvider>
    
  )
}

export default App
