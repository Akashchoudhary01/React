// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'


const anotherElement = (
  <a href='https://google.com' target='_blank'> Visit Google</a>
)

const reactElement = React.createElement(
  'a' , {href: 'https://huihui.com' , target :'_blank'} , 
  'click me to visit huihui'

)

createRoot(document.getElementById('root')).render(
 
  reactElement
//   <StrictMode>
//     <App />
//   </StrictMode>,
)



