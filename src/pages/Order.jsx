import { useEffect, useRef, useState } from "react"
import Nav from "../component/NavBar.jsx"
import style from "../css/order/orderStyle.module.css"
import { useParams } from "react-router-dom"
import Loading from "./Loading.jsx"
import html2PDF from "jspdf-html2canvas"
import ReactToPrint from "react-to-print"
const Order = ()=>{
    const [loading,setLoading] = useState(true)
    const [order,setOrder] = useState()
    const {id} = useParams()
    console.log(id)
    const receipt = useRef()


    const getOrder = async (req) =>{

        let result = await fetch(req).then(rs =>{
            
            
            if (!rs.ok)
                throw new Error("faild to get Order")
            // console.log(rs.json())
            return rs.json()
        }).catch(e =>{
            console.error(e.message)
        })


        console.log(result)
        setOrder(result)
        setLoading(false)
    }

    
    const  genratePDF = () =>{
       
            html2PDF(receipt.current,{
                jsPDF:{
                    format:"a5"
                },
                imageType: 'image/jpeg',
                output: './pdf/generate.pdf'
            }) 
        // window.print()
   
    }

    useEffect(()=>{
        // console.log(`http://localhost:8080/order/get/${id}`)
        let req = new Request(`http://Ir.pourghorban.site:8080/order/get/${id}`,{
            method:"get",
            headers:{
                "Accept":"application/json"
            }

        })


        getOrder(req)
    },[])



    if (loading)
        return <Loading/>
    else
        return <>
        <Nav/>
        
        <div className={style.div} ref={receipt}>
            <table className={style.table}>

                <tr>
                    
                    <th className={style.th}>اقلام</th>
                    <th className={style.th}>قیمت</th>
                    <th className={style.th}>تعداد</th>
                </tr>


               { order.foodList.map(item =>{
                    return <>
                    
                    <tr>
                        <td className={style.td}>{item.name}</td>
                        <td className={style.td}>{item.price}</td>
                        <td>{item.number}</td>
                    </tr>
                    
                    </>
                })}

                

            </table>

            <div className={style.conclusion}>
            <p >قمیت کل : {order.payment.amount}</p>
            <p>وضعیت: {order.payment.status==0 ? "پرداخت نشده":"پرداخت شده"} </p>
            <p>سفارش دهنده: {order.customer.username}</p>
            <p>نشانی: {order.address.address}</p>
            </div>
        </div>
        <div className={style.button_c}>
            <button onClick={()=>{pay(order.id)}}>پرداخت</button>
            <button onClick={()=>genratePDF()}>pdf</button>
        </div>

        {/* <ReactToPrint
            trigger={()=> <button>print</button>}
            content={()=> receipt.current}
        /> */}
        
    </>

}


const pay = async (id)=>{

    let result = await fetch(`http://Ir.pourghorban.site:8080/order/pay/${id}`).then(rs=>{
        if (!rs.ok)
            throw new Error("faild to pay")

        return rs.text()
    }).catch(e => console.error(e))

    console.log(result)
    if (result=="true")
       setTimeout(() => {
        location.reload()
       }, 1000);
}

export default Order;