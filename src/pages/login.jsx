import sytle from "../css/login/loginStyle.module.css"
import { useState ,useRef,useEffect} from "react";


const Login = ()=>{

    const [isSent,setIsSent]  = useState(false);
    const [isReceive,setIsReceive] = useState(false);
    const btn = useRef();
    const passInput = useRef()

    async function test(){
        console.log("run function")
    }
    
    
    const sendForm = (e)=>{
        e.preventDefault();
        btn.current.disabled = true;
        
        setTimeout(()=>{btn.current.disabled=false},3000);
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