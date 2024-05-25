
import sytle from "../css/login/loginStyle.module.css"
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
            <h1 className={sytle.h1}>ثبت نام</h1>

            <form onSubmit={doSubmit} className={sytle.form} >
                <label htmlFor="fname" className={sytle.label}>نام</label>
                <input className={sytle.input} type="text" id="fname" name="fname" required/>

                <label htmlFor="lname" className={sytle.label}>نام خانوادگی</label>
                <input className={sytle.input} type="text" id="lname" name="lname" />


                <label htmlFor="username" className={sytle.label}>نام کاربری</label>
                <input className={sytle.input} type="text" id="username" name="username" />

                <label htmlFor="email" className={sytle.label}>ایمیل</label>
                <input className={sytle.input} type="text" id="email" name="email"/> 
                <label htmlFor="password" className={sytle.label}>رمز ورود</label>
                <input className={sytle.input} type="password" id="password" name="password" />
                <label htmlFor="confirmPass" className={sytle.label}>تکرار رمز ورود</label>
                <input className={sytle.input} type="password" id="confirmPass" name="confirmPass" />
                
                <label htmlFor="birthDate" className={sytle.label}>زاد روز</label>

                <Canlendar/>
               <button type="submit" className={sytle.submit}  disabled={disable}>ثبت اطلاعات</button>
            </form>
        </> 
        
        
}


export default Signup;