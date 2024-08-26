import { json, Navigate, redirect, replace, useNavigate } from "react-router-dom";
import sytle from "../css/login/loginStyle.module.css"
import { useState ,useRef,useEffect} from "react";
// import { Redirect } from "react-router-dom";


const Login = ()=>{

    const [isSent,setIsSent]  = useState(false);
    const [isReceive,setIsReceive] = useState(false);
    const btn = useRef();
    const passInput = useRef()
    const navigate = useNavigate();

    async function getData(requst){
        
        const user = await fetch(requst).then(rs => {
        //    console.log("fetch user")
            if (!rs.ok)
                throw new Error("not found user")
            return rs.json();
        }).then(user=>{
            // console.log(user.password)
            document.cookie = "username="+user.username;
            document.cookie = "password="+user.password;
            document.cookie = "role="+user.role;
            navigate("/")
        })
        .catch(e =>{
            console.log(e)
            navigate("/login")
        })
    

        
        
    }


    const sendForm = (e)=>{
        e.preventDefault();
        let user = {username:e.target.username.value,
            password:e.target.password.value
        }
        
        let header = new Headers();
        header.append("Content-Type","application/json")
        const req = new Request("http://Ir.pourghorban.site:8080/user/get",{
            method:"post",
            headers:header,
            body: JSON.stringify(user)
        }) 

        getData(req)
       
       
    }

    const toggleVisibility = () =>{
        
        if (passInput.current.type == "password")
            passInput.current.type = "text"

        else
            passInput.current.type = "password"
    }

    return <>
        <div className={sytle.ctn}>
        <h1 className={sytle.h1}>ورود</h1>
        <form onSubmit={sendForm} className={sytle.form}>

            <label htmlFor="username" className={sytle.label}>نام کاربری:</label>
            <input type="text" id="username" name="username"  className={sytle.input}/> <br/>


            <label htmlFor="password" className={sytle.label}>کلمه عبور:</label>
            <input type="password" id="password" name="password" className={sytle.input} ref={passInput}/>
            <div className={sytle.checkboxC}><input type="checkbox" className={sytle.checkboxC_input} onClick={toggleVisibility}/><p className={sytle.checkboxC_p}>نشان دادن پسورد</p></div>
            <button type="submit" className={sytle.submit} ref={btn}>ورود</button>




        </form>
        </div>
    </>


}




export default Login;