import { useEffect, useState } from "react";
import Navbar from "../component/NavBar";
import Field from "../component/dashBordField/Field";
import style from "../css/userDashBord/userDashStyle.module.css"
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
const UserDashbord = ()=>{
    
    const [laoding,setLoading] = useState(true)
    const [lock,setLock] = useState(false)
    const navigate = useNavigate()
    const[data,setData] = useState();
    const[oldData,setOld] = useState()

    // console.log(data)

    const getData = async (req)=>{


        let user = await fetch(req).then(rs =>{
            if(!rs.ok)
                throw new Error("faild to load data")
            return rs.json()
        }).catch(e=>{
            console.error(e)
        })
        // console.log(user)
        setData(user)
        setLoading(false)
    }

    useEffect(()=>{

        let username = getUsername();
        let password = getPassWord();

        if (username==undefined || username == null)
            navigate("/login")

        let user = {username,password}

        const req = new Request("http://Ir.pourghorban.site:8080/user/get",{
            method:"post",
            headers : {
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })


        getData(req)

    },[])


    const updateData = async () =>{

            if(lock)
                return

            setLock(!lock)
            let req = new Request("http://Ir.pourghorban.site:8080/user/update",{
                method:"PATCH",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(data)

            })


            let result = await fetch(req).then(
                rs =>{
                    if (!rs.ok)
                        throw new Error("faild to update")
                    return rs.text()
                }

                
            ).catch(e => {
                alert(e.message)
                setData(oldData)
                console.error(e)})

            console.log(result)
            if (result!="true")
                setData(oldData)
            else{
                document.cookie="username="+data.username
                document.cookie="password="+data.password
            }
            setLock(!lock)
            location.reload()

    }




    const updateAddress = async () =>{

        if(lock)
            return


        let addr = data.addresses
        setLock(!lock)
        let req = new Request("http://Ir.pourghorban.site:8080/user/address",{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addr)

        })


        let result = await fetch(req).then(
            rs =>{
                if (!rs.ok)
                    throw new Error("faild to update")
                return rs.text()
            }

            
        ).catch(e => {
            alert(e.message)
            setData(oldData)
            console.error(e)})

        // console.log(result)
        if (result!="true")
            setData(oldData)
        
        setLock(!lock)

}



const postAddress = async () =>{

    if(lock)
        return


    let addr = data.addresses
    console.log(addr)
    setLock(!lock)
    let req = new Request("http://Ir.pourghorban.site:8080/user/address",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(addr)

    })


    let result = await fetch(req).then(
        rs =>{
            if (!rs.ok)
                throw new Error("faild to update")
            return rs.text()
        }

        
    ).catch(e => {
        alert(e.message)
        setData(oldData)
        console.error(e)})

    data.addresses = result
    if (result == undefined)
        setData(oldData)

    setLock(!lock)

}

    if (laoding)
        return <><Loading/></>
    return<>
        <Navbar/>

        <div className={style.container}>
            
            <Field  name={"نام کاربری "} value={data.username} inputType={"text"} handelEdit={(value) => {
                setOld(data)
                data.username=value
                updateData()
            }} edit={false}
            lock={lock}
            />
            <Field name={"رمز عبور"} value={data.password} inputType={"text"} handelEdit={(value) => {
                setOld(data)
                data.password=value; 
                updateData()}} 
                lock={lock}
                />

            
            {data.addresses==null ? <Field name={"نشانی"} edit={true} handelEdit={(value)=> {
                setOld(data)
                data.addresses = {
                    user:{id:data.id},
                    address:value
                }
                postAddress()
            }} 
            lock={lock}
            />
            
            :
             <Field
            name={"نشانی"}
            value={data.addresses.address}
            inputType={"text"}
            handelEdit={(value)=> {
                setOld(data)
                data.addresses.address = value;
                updateAddress()
            }}

            />
            
            }
            
           
        </div>

    </>
}




function getUsername(){
    let username = document.cookie.split("; ").find(s => s.startsWith("username="));
    if (username!=null)
        username=username.split("=")[1]

    return username;
}



function getPassWord(){
    let password = document.cookie.split("; ").find(s => s.startsWith("password="));
    if (password!=null)
        password=password.split("=")[1]

    return password;
}

export default UserDashbord;