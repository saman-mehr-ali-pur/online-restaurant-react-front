import style from "../css/navbar/navStyle.module.css"
import logo from "../assets/images.svg"
import Auth from "./Auth"
const Navbar =()=>{
    return <>
    <nav className={style.nav}>
      <div className={style.logo_container}>
        <img  src={logo} className={style.logo} alt="logo" />
        </div>
          <div className={style.links_container}><a className={style.link} href="#!">سبد خرید</a></div>
          <div className={style.links_container}><a className={style.link} href="#!">تاریخچه سفارشات</a></div>
          <div className={style.links_container}><a className={style.link} href="#!">منو</a></div>
          <div className={style.links_container}><a className={style.link} href="#!">خانه</a></div>
          <div className={style.links_container}><a className={style.link} href="#!">ارتباط با ما</a></div>
          <div className={style.links_container}><a className={style.link} href="#!">درباره ما</a></div>
       <Auth user={{username:"سامان"}} className="auth"/>
    </nav>
    </>

}


export default Navbar;