import { useEffect, useRef, useState } from "react"
import Nav from "../component/NavBar.jsx"
import Tool from "../component/Tool/FilterTool.jsx"
import sytle from  "../css/history/historyStyle.module.css"
import Loading from "./Loading.jsx"
import Order from "./Order.jsx"
import { useNavigate } from "react-router-dom"
const OrderHistory = ()=>{
    const [loading,setLoading] = useState(true)
    const [data , setList ] = useState([])
    const seachToolRef  = useRef()
    const navigate = useNavigate()

    const fill = () =>{
        let result =[]
        for (let i=20;i>0;i--){
            // console.log("+++")
            result.push(<>
            <div className="order-c">
                <p>تاریخ</p>
                <p>قیمت کل</p>
                <p>سریال سفارش</p>
                <p>آدرس:</p>

            </div></>)
        }
        setList(result)
        // console.log(list)
    }
    useEffect(()=>{
        fill()
    },[])


    const doSearch =()=>{
        let factores = {}
        let searchdata = seachToolRef.current;
        seachToolRef.current.childNodes.values().forEach(element => {
            element.childNodes.values().forEach(e=>{
                // console.log(e.name)
                factores[e.name]=e.value
                
            })
        });

        console.log(factores)
       

    }

    const getOrders = async (req)=>{
        let result = await fetch(req).then(rs =>{
            if (!rs.ok)
                throw new Error("status: "+rs.status)

            return rs.json()
        }
        ).catch(e =>{
            console.error(e)
            alert(e.message)
        })
        console.log(result)
        setList(result)
        setLoading(false)
    }

    useEffect(()=>{

        const username = getUsername();
        const password = getPassWord();
        if (username==null || password==null){

            navigate("/login")
            return
        }
            

        const req = new Request(`http://Ir.pourghorban.site:8080/order/all/user/${username}/${password}`,{
            method:"get",
            headers:{
                "Accept":"application/json"
            },
        })

        getOrders(req)
    },[])

    const handleClick = (id) =>{
        // console.log(id)
        navigate("/orderhistory/order/"+id)    
    }


    if (loading)
        return <><Loading/></>

    else
        return <>
            <Nav/>
            <Tool refrence={seachToolRef}/>

            <div className={sytle.ok_btn}><button onClick={doSearch}>پردازش</button></div>

            <div className={sytle.result_c}>
                {data.map((item,index) => {
                    // console.log(data)
                    return <><div key={index} className={sytle.order_c} onClick={()=>handleClick(item.id)}>
                        <p>کاربر: {item.customer.username}</p>
                        <div>
                            <span>لیست:</span>
                            {item.foodList.map(food => <span>{food.name}, </span>)}
                        </div>
                        <div><span>مبلغ:</span> <span>{item.payment.amount}</span></div>
                        <div><p>وضعیت: {item.payment.status==0? "پرداخت نشده":"پرداخت شده"}</p></div>
                        </div></>
                })}
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

export default OrderHistory;