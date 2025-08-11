import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import User from './Components/User.jsx'
import Github, { githubInfoLoader } from './Components/Github.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path='' element= {<Home/>}/>
      <Route path='about' element= {<About/>}/>
      <Route path='contact' element= {<Contact/>}/>
      <Route path='user/:userid' element= {<User/>}/>
      <Route path='github' loader={githubInfoLoader} element= {<Github/>}/>
    
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
