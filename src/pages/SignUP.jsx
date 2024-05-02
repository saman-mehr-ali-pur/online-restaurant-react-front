
import "../css/login/loginStyle.css"
import Canlendar from "../component/calendar/Calendar";
import { useEffect, useState } from "react";
const Signup = ()=>{

    const [disable,setDisable] = useState(false);
    
    const doSubmit =(e)=>{
        e.preventDefault();
    //    const dataForm = new FormData(e.target);
       for (let i =0; i<e.target.length;i++ ){

            console.log(e.target[i].name)
       }

      

    
    }

    return <>
            <h1>ثبت نام</h1>

            <form onSubmit={doSubmit} >
                <label htmlFor="fname" >نام</label>
                <input type="text" id="fname" name="fname" required/>

                <label htmlFor="lname">نام خانوادگی</label>
                <input type="text" id="lname" name="lname" />


                <label htmlFor="username">نام کاربری</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="email">ایمیل</label>
                <input type="text" id="email" name="email"/> 
                <label htmlFor="password">رمز ورود</label>
                <input type="password" id="password" name="password" />
                <label htmlFor="confirmPass">تکرار رمز ورود</label>
                <input type="password" id="confirmPass" name="confirmPass" />
                
                <label htmlFor="birthDate">زاد روز</label>

                <Canlendar/>
               <button type="submit" disabled={disable}>ثبت اطلاعات</button>
            </form>
        </> 
        
        
}


export default Signup;