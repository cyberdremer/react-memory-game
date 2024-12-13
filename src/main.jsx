import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  {CatAPI}  from './code/CatAPI.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <App></App>
    </>
  </StrictMode>,
)




