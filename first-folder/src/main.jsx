import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// function Myapp(){
//   return(
//     <h1>hi</h1>
//   )
// }

// const reactElement = {
//   "type":'a',
//   'props':{
//       'class':'link',
//       'href': 'https://google.com',
//       'target':'_blank'
//   },
//   'children':'click me to visit google'
// }

const reactElement = (
  <a className="link" href="https://google.com" target="_blank">click me to visit google</a>
)
export default Myapp

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
    reactElement
  // </StrictMode>,
)
