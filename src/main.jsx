import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Home from './pages/Home.jsx'
import Menu from "./pages/Menu.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home/> */}
    <Menu/>
  </React.StrictMode>,
)
