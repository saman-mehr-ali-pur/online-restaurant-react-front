import { useEffect, useState } from "react"

import Navbar from "../component/NavBar"
import style from "../css/menu/menuStyle.module.css"
import foodicon from "../assets/foodicon.svg"
import Loading from "./Loading"
import { useNavigate } from "react-router-dom"
const Menu = () => {
    const [isLoading,setLoading] = useState(true);
    const [typ , setTyp] = useState("all")
    const [data,setData] = useState()
   const [limit,setLimit] =useState(1)
   const navigate = useNavigate()

    const getFoods = async (req)=>{

        let listOfFood =await fetch(req).then(rs =>{
            console.log("loading foods ... ")
            if (!rs.ok){
                throw new Error("status code: "+rs.status)
        }
            return rs.json()
        }).catch(e => {
            alert(e.message)
        })

        
        setData(listOfFood)
        console.log(data)
        setLoading(false)
        
    }

    useEffect(()=>{
        
        const req = new Request(`http://Ir.pourghorban.site:8080/food/all?limit=${limit}`,{
            method:"get",
            header:{
                "Accept":"application/json"
            }
        })
        getFoods(req)
        

    },[])


    const handleClickItem = (id)=>{
        navigate(`/menu/food/${id}`)
    }


    if(!isLoading){
        return <>
        <Navbar/>
        <div className={style.search_c}>
            <input type="text"  placeholder="جستجو غذا یا نوشیدنی..."/>
        </div>
        <div id="ctn" className={style.container} >
            <div className={style.right_side}>
                {data.filter((item) =>  typ=="all" || item.type==typ)
                .map((item,index) => {return <div key={index} className={style.item_c} onClick={()=>handleClickItem(item.id)}>
                    <div className={style.pic_c}><img src={item.imagePath == null ? foodicon:"http://Ir.pourghorban.site:8080/image?path="+item.imagePath[0]} alt="food" /></div>
                    <div className={style.des_c}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                </div>})}
            </div>
            <div className={style.left_side}>
                <div className={style.item} onClick={()=> {setTyp("main")}}><p>غذا ها</p></div>
                <div className={style.item} onClick={()=> {setTyp("drink")}}><p>نوشیدنی ها</p></div>
                <div className={style.item} onClick={()=>{setTyp("dessert")}}><p>دسر ها</p></div>
                <div className={style.item} onClick={()=>{setTyp("salad")}}><p>سالاد ها</p></div>
            </div>
        </div>
        
        </>
    }

    else
        return <Loading/>
}

export default Menu;