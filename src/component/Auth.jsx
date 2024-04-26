import "../css/auth/authStyle.css"
import profileimg from "../assets/profile_3135715.png"
const Auth = (props)=>{


   
    console.log(props.user.username);
    if(props.user==null)
        return <>
        
            <div className="auth">
                <p>ورود/ثبت نام</p>
            </div>
        </>


    else
    return<>
    <div className="auth">
       <p>{props.user.username}</p>
        <img className="profile" src={profileimg} alt="profile" />
        
    </div>
</>
}

export default Auth;