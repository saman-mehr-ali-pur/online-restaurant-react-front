import Navbar from "../component/NavBar";
import style from "../css/shope/shopeStyle.module.css"
import ShpItem from "../component/shopeItem/shpItem.jsx";
import { useEffect, useRef, useState } from "react";
import creditIcon from "../assets/valid.svg"
const Shope = ()=>{

    const [data , setData] = useState(Array.from({length:10},(_,i)=>{return {id:i,name:"غذااا",
        price :12000,
        state:0,
        }}))

    const refEle = useRef();

    const deleteData=(id)=>{
            setData(data.filter((item)=> item.id!=id))
    }

    
    const scrollEvent = (e)=>{
        const a = (e.target.scrollHeight-e.target.offsetHeight)*0.75;
            if(e.target.scrollTop == e.target.scrollHeight-e.target.offsetHeight){
                console.log("end")
                let nowdata = data.concat(Array.from({length:10},(_,i)=>{return {id:i,name:"غذااا",
                price :12000,
                state:0,
                }}));

                setData(nowdata)
            }
          
            
    }

    
    useEffect(()=>{
        console.log(data.length)
        refEle.current.addEventListener("scroll",scrollEvent)


        return ()=>{
            refEle.current.removeEventListener("scroll",scrollEvent)
        }

    })
    return<>
        <Navbar/>

        <div className={style.options}>
                    <div>

                         <p >پرداخت</p>
                    </div>
                   
                    
                      
                <div><p>حذف سبد</p></div>
            </div>
            <div className={style.item_container} ref={refEle}>
                
                {
                    data.map((item,index)=> <><ShpItem key={index+1} id={item.id} name={item.name} price={index+1} state={item.state} trashEvent={deleteData}/></>)
                }
    
            </div>

           

       
       

    
    </>
}


export default Shope;