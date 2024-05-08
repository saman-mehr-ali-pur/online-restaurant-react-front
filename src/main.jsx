import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Home from './pages/Home.jsx'
import Menu from "./pages/Menu.jsx"
import Loading from "./pages/Loading.jsx"
import Login from './pages/login.jsx'
import SignUp from './pages/SignUP.jsx'
import Order from "./pages/Order.jsx"
import OrderHistory from './pages/OrderHistory.jsx'
import Shope from './pages/shope.jsx'

import FoodDetail from './pages/FoodDetail.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home/> */}
    {/* <Menu/> */}
    {/* <Loading/> */}
    {/* <Login/> */}
    {/* <SignUp/> */}
    {/* <OrderHistory/> */}
    {/* <Order/> */}
    {/* <Shope/> */}

    {<FoodDetail/>}
  </React.StrictMode>,
)
