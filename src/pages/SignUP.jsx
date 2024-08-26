
import sytle from "../css/login/loginStyle.module.css"
import Canlendar from "../component/calendar/Calendar";
import { useEffect, useRef, useState } from "react";
import { toGregorian } from "jalaali-js";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = ()=>{

    const [disable,setDisable] = useState(false);
    const formRef = useRef();
    const navigate = useNavigate();
    
   const  convertToGregorian= (year,month,day) =>{
        const gregorianDate = toGregorian(year, month, day);
        year = gregorianDate.gy.toString().padStart(4,"0")
        month = gregorianDate.gm.toString().padStart(2,"0")
        day = gregorianDate.gd.toString().padStart(2,"0")
        const data = [year,month,day]
        return data.join("-");

   }




   const postUser= async (req) => {
        await fetch(req).then(rs =>{
            if(! rs.ok)
                throw new Error("not allowed")
            return rs.json()}
        ).
        then(user=>{
            navigate("/login")
            return user
        }).
        catch(e => { alert(e)})
        
        
    }

    const doSubmit =(e)=>{
        e.preventDefault();
       
        if (e.target.password.value!=e.target.confirmPass.value){
            alert("تکرار همخوانی ندارد !!!")
            return
        }

       const date = convertToGregorian(parseInt(e.target.year.value),
       parseInt(e.target.month.value),parseInt(e.target.day.value))

       
       const user = {
        username: e.target.username.value,
        password: e.target.password.value,
        email: e.target.email.value,
        birthdate: date,
        role:"USER"

       }


       const req = new Request("http://Ir.pourghorban.site:8080/user/save",{method:"post",
        headers:{"content-type":"application/json",
            "content-length": JSON.stringify(user).length.toString()
        },
        body:JSON.stringify(user)
       })

       postUser(req)
    }

    return <>
            <h1 className={sytle.h1}>ثبت نام</h1>

            <form onSubmit={doSubmit} className={sytle.form}  ref={formRef}>
                {/* <label htmlFor="fname" className={sytle.label}>نام</label>
                <input className={sytle.input} type="text" id="fname" name="fname" required/>

                <label htmlFor="lname" className={sytle.label}>نام خانوادگی</label>
                <input className={sytle.input} type="text" id="lname" name="lname" /> */}


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