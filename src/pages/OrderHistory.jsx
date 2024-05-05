import { useEffect, useRef, useState } from "react"
import Nav from "../component/NavBar.jsx"
import Tool from "../component/Tool/FilterTool.jsx"
import "../css/history/historyStyle.css"
const OrderHistory = ()=>{
    
    const [list , setList ] = useState([])
    const seachToolRef  = useRef()

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
    return <>
            <Nav/>
            <Tool refrence={seachToolRef}/>

            <div className="ok-btn"><button onClick={doSearch}>پردازش</button></div>

            <div className="result-c">
                {list}
            </div>
    
    </>
}



export default OrderHistory;