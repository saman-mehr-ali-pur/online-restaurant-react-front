import style from "../css/navbar/navStyle.module.css"
import logo from "../assets/images.svg"
import Auth from "./Auth"
import { Link } from "react-router-dom"
const Navbar =()=>{


    return <>
    <nav className={style.nav}>
      <div className={style.logo_container}>
        <img  src={logo} className={style.logo} alt="logo" />
        </div>
          <Link to="/cart" className={style.links_container}><div ><p className={style.link} >سبد خرید</p></div></Link>
          <Link to="/orderhistory" className={style.links_container}><div ><p className={style.link} >تاریخچه سفارشات</p></div></Link>
          <Link to="/menu" className={style.links_container}><div ><p className={style.link} >منو</p></div></Link>
          <Link to="/" className={style.links_container}><div ><p className={style.link} >خانه</p></div></Link>
          <Link to="/contact" className={style.links_container}><div ><p className={style.link} >ارتباط با ما</p></div></Link>
          <Link to="/about" className={style.links_container}><div ><p className={style.link} >درباره ما</p></div></Link>
       <Auth  className="auth"/>
    </nav>
    </>

}


export default Navbar;