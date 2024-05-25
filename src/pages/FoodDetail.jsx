import Navbar from "../component/NavBar";
import foodImg from "../assets/foodicon.svg"
import style from  "../css/foodDetail/foodStyle.module.css"
import Comment from "../component/Comment";
import like from "../assets/likeed.svg"
import shpIcon from "../assets/shope.svg"
import { useEffect, useRef, useState } from "react";
import Loading from "./Loading.jsx"
const FoodDetail = ()=>{
    const [liked,setLiked] = useState(true)
    const [chosen,setChosen] = useState(true)
    const [data,setData] =  useState([])
    const [isLoading,setLoading] = useState(true)
    const [Comments,setComments] = useState([])
    


    const loadData = async (url)=>{

        const req = new Request(url,{method:"GET",
                        headers:{
                            "Origin": "http://localhost:5173"

                        }
        })

        const result = await fetch(req).
                                then((resp)=>{
                                    if(!resp.ok){
                                        throw new Error("error code: "+resp.status);
                                    
                                    }
                                    console.log(resp)
                                    return resp.json()
                                })
                                .then((item)=>{
                                    console.log("second then")
                                    item.comments.forEach((e)=>{Comments.push({username:e.username,comment:e.comment})});
                                    return item;
                            })
                                .catch(e =>{console.error(e)});
                        
                        
                               
                                setData(result)
                                console.log("data: ",data)
                                setLoading(false)
    }
    useEffect(()=>{
       
        loadData("http://localhost:80/db/db.json")
       
       

        

    },[])


    

  
    const handelKeyDown = (e)=>{
            if(e.key=="Enter"){
                let temp = Comments;
                temp.unshift({username:"ali",comment:e.target.value})
                console.log(temp)
                e.target.value = "";
                console.log(temp)
                setComments(Array.from(temp))
               
            }
    }

    if(isLoading){
        return <><Loading/></>
    }



    return<>
        <Navbar/>

        <div className={style.ctn_1}>
            <div className={style.header}>
                <div style={{"opacity": liked ? 1:0.5}} onClick={()=> {setLiked(!liked)}}><img src={like} alt="" /></div>
                <div style={{"opacity": chosen ? 1:0.5}} onClick={()=>{setChosen(!chosen)}}><img src={shpIcon} alt=""></img></div>

            </div>
            <div className={style.ctn_2}>
                <div className={style.ctn_img}>
                        <img src={foodImg} alt="food" />
                </div>
                <div className={style.food_info}>
                    <p>عنوان:{data.title}</p>
                    <p>قیمت:{data.price}</p>
                    <p></p>

                </div>

            </div>
            <h1 className={style.comment_h}>نظرات:</h1>
            <div className={style.input_ctn}>
                <div className={style.send_ctn} onClick={()=> setTest(test+1)}><p>send</p></div>
                <input type="text" onKeyDown={(e)=> {handelKeyDown(e)}} name="comment" className={style.input_comment} placeholder="نوشتن نظر" />
                
                </div>
            <div className={style.comments}>


            {Comments.map(c =>{return <Comment username={c.username} comment={c.comment}/>})}


            </div>

        </div>
    
    </>
}

export default FoodDetail;