import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Home from './pages/Home.jsx'
import Menu from "./pages/Menu.jsx"
import Loading from "./pages/Loading.jsx"
import Login from './pages/login.jsx'
import SignUp from './pages/SignUP.jsx'
import Canlendar from './component/calendar/Calendar.jsx'
import Order from "./pages/Order.jsx"
import OrderHistory from './pages/OrderHistory.jsx'
import Shope from './pages/shope.jsx'
import FoodDetail from './pages/FoodDetail.jsx'
import UserDashbord from './pages/UserDashbord.jsx'
import Cart from "./pages/Cart.jsx"
import AdminDash from './pages/AdminDash.jsx'
import AddFood from './pages/AddFood.jsx'

import { BrowserRouter ,Routes,Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <Home/> */}
    {/* <Menu/> */}
    {/* <Loading/> */}
    {/* <Login/> */}
    {/* <SignUp/> */}
    {/* <Canlendar/> */}
    {/* <OrderHistory/> */}
    {/* <FilterTool/> */}
    {/* <Order/> */}
    {/* <Shope/> */}

    {/* {<FoodDetail/>} */}


    {/* <UserDashbord/> */}

    {/* <Cart/> */}


  {/* <AdminDash/> */}

  {/* <AddFood/> */}


  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path='/menu' element={<Menu />} />
      <Route path="/menu/food/:id" element={<FoodDetail/>} />
      <Route  path='/orderhistory' element={<OrderHistory/>}/> 
       <Route path='/orderhistory/order/:id' element={<Order/>}/>
       {/* <Route path='/food' element={<FoodDetail/>}/> */}
       <Route path='/user-dash' element={<UserDashbord/>}/>
      <Route path='/cart' element={< Cart />}/>
      <Route path='/admin-dash' element={<AdminDash/>}/>
      <Route path='/admin-dash/add-food' element={<AddFood/>}/>
      <Route path='/orde' />
     
  </Routes>

  </BrowserRouter>
  </>
)
