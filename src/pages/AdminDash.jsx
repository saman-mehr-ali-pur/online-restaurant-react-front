import style from "../css/AdminDash/dashStyle.module.css"
import NavBar from "../component/NavBar.jsx"
import FoodItem from "../component/dashBordItems/FoodItem.jsx";
import addIcon from "../assets/add.svg"
import { useEffect, useState } from "react";
import Loading from "./Loading.jsx";
import { Navigate, useNavigate } from "react-router-dom";
const AdminDash = () =>{

    const [items ,setItems] = useState([])
    const [laoding , setLoading] = useState(true)
    const navigate = useNavigate();
    
  
    const init = ()=>{
    
    let itemss = [];
    for (let i=0;i<18;i++){
        console.log("**")
        itemss.push(<FoodItem id={i} title={"item"} price={12000} state={1} trashEvent={(id) =>{console.log("hello")}}/>)
            }

        setItems(itemss)
        }

        const getOrders = async (req) =>{
            let result = await fetch(req).then(rs =>{
                if(!rs.ok)
                    throw new Error("faild to load...")
                return rs.json()
            }).catch(e =>{ console.error(e)})

            result.forEach(e => console.log(e))
            setItems(result)
            setLoading(false)
        }



        const deleteFood = async (id)=>{

            const req = new Request(`http://Ir.pourghorban.site:8080/food/delete/${id}`,{
                method:"DELETE"
            })

            let result = await fetch(req).then(
                rs =>{
                    if (!rs.ok)
                        throw new Error('faild to delete')

                    return rs.text()
                }
                
            ).catch (e => console.error(e))


            if (result!="true")
                alert("faild to delete")

            location.reload()
        }

    useEffect(()=>{

        let username = document.cookie.split("; ").find(s => s.startsWith("username="))
        if (username==null){
            alert("not authenticate !!")
            navigate("/login")
            return
        }

        if (document.cookie.split("; ").find(s => s.startsWith("role=")).split("=")[1]!="ADMIN"){
            alert("not allowed !!")

            navigate("/")
            return
        }
        const req = new Request("http://Ir.pourghorban.site:8080/food/all?limit="+1,{
            method:"get",
            headers:{
                "Accept":"application/json"
            }
        })


        getOrders(req)


    //    init()

    },[])


    const removeItem = async (id)=>{
        
        let result = await fetch(`http://Ir.pourghorban.site:8080/food/delete/${id}`,{method:"DELETE"}).
        then(rs =>{
            if(!rs.ok)
                throw new Error("faild to delete")
            return rs.text()
        }).catch(e => console.error(e))


        if(result!="true")
            alert("faild to dete")

        location.reload()
    }


    if(laoding)
        return <Loading/>


    return <>
            <NavBar/>

            <div className={style.container}>

            <div className={style.leftside}>
                    
                    { items.map((element,index)=> <FoodItem id={index} 
                    data={element} 
                    title={element.name} 
                    price={element.price} 
                    imgSrc={element.imagePath == null ? null:element.imagePath[0]} 
                    state={element.status ? "موجود":"اتمام"} 
                    trashEvent={() =>{deleteFood(element.id)}}/>)
                }


                    <div  className={style.addContainer}><img src={addIcon} alt="" onClick={()=>{
                       
                        navigate("/admin-dash/add-food")
                    }} /></div>


            </div>


            <div className={style.rightside}>

                <div><p>غذا</p></div>
                <div><p>نوشیدنی</p></div>
                <div><p>دسر</p></div>
                <div><p>سالاد</p></div>
                <div><p>سبد های خرید</p></div>
                
            

            </div>


            </div>
    </>
}



export default AdminDash;