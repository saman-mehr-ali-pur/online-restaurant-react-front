import "../css/navbar/navStyle.css"
import logo from "../assets/images.svg"
import Auth from "./Auth"
const Navbar =()=>{
    return <>
    <nav>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        </div>
          <div className="links-container"><a className="link" href="#!">تاریخچه سفارشات</a></div>
          <div className="links-container"><a className="link" href="#!">منو</a></div>
          <div className="links-container"><a className="link" href="#!">خانه</a></div>
          <div className="links-container"><a className="link" href="#!">ارتباط با ما</a></div>
          <div className="links-container"><a className="link" href="#!">درباره ما</a></div>
       <Auth user={{username:"سامان"}} className="auth"/>
    </nav>
    </>

}


export default Navbar;