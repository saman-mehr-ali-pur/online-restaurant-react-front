import { useEffect, useState } from "react";
import CartItem from "../component/CartItem";
import Navbar from "../component/NavBar"
import style from "../css/Cart/CartStyle.module.css"
import Loading from "./Loading";

const Cart = ()=>{

    const [data,setData] = useState()
    const [loading,setLoading] = useState(true)

    const getOrder = async (req) =>{


        let result = await fetch(req).then(rs =>{
            if (!rs.ok)
                throw new Error("faild to load")

            return rs.json()
        }).catch(e => console.error(e))

        console.log(result)
        setData(result)
        setLoading(false)
    }
    


    useEffect(()=>{

        let id = localStorage.getItem("orderId")
        if (id==null){
            return
        }
        let req = new Request("http://localhost:8080/order/get/"+id,{
            method:"GET",
            headers:{
                "Accept":"application/json"
            }
        })
        getOrder(req)

    },[])



    const deleteItem = async (fId)=>{

        let orderId = localStorage.getItem("orderId")
        const req  = new Request(`http://localhost:8080/order/item/${fId}/${localStorage.getItem("orderId")}`,{
            method:"DELETE"
        })


        let result = await fetch(req).then(
            rs =>{
                if(!rs.ok)
                    throw new Error("faild to delete")
                return rs.text()
            }
        ).catch(e => console.error(e))

        if(result!="true")
            alert("faild to remove")

        location.reload()
    }


    





    if (loading)
        return <Loading/>
    return <>
        <Navbar/>

        <div className={style.container}>

        {data.foodList.map(item=> {
            // console.log(item)
            return <CartItem data={item} hadelDelete={deleteItem}/>})}
    
        </div>
    </>
}


export default Cart;