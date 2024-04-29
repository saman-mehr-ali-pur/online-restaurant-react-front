import "../css/login/loginStyle.css"
import { useState ,useRef,useEffect} from "react";

const Login = ()=>{

    const [isSent,setIsSent]  = useState(false);
    const [isReceive,setIsReceive] = useState(false);
    const btn = useRef();
    const passInput = useRef()

    async function test(){
        console.log("run function")
    }
    
    useEffect(()=>{
        setIsSent(!isSent);
        console.log("use effect")

    },[])
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
        <div className="ctn">
        <h1>ورود</h1>
        <form onSubmit={sendForm}>

            <label htmlFor="username">نام کاربری:</label>
            <input type="text" id="username" name="username"  /> <br/>


            <label htmlFor="password">کلمه عبور:</label>
            <input type="password" id="password" name="password" ref={passInput}/>
            <div className="checkbox-c"><input type="checkbox" onClick={toggleVisibility}/><p>نشان دادن پسورد</p></div>
            <button type="submit" className="submit-btn" ref={btn}>ورود</button>
        </form>
        </div>
    </>


}


export default Login;