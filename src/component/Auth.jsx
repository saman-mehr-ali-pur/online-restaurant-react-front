import style from  "../css/auth/authStyle.module.css"
import profileimg from "../assets/profile_3135715.png"
import { Link } from "react-router-dom"
const Auth = ()=>{


    let username =  document.cookie.split("; ").find(c => c.startsWith("username="))
    // console.log(username)
    if (username!=undefined)
        username = username.split("=")[1]
    if(username==undefined)
        return <>
            <Link to="/login" className={style.auth}>
            <div >
                <p>ورود/ثبت نام</p>
            </div>
            </Link>
            
        </>


    else
    return<>
    <Link to="/user-dash">
    <div className={style.auth}>
       <p>{username}</p>
        <img className="profile" src={profileimg} alt="profile" />
        
    </div></Link>
    
</>
}

export default Auth;