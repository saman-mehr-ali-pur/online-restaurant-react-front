import Navbar from "../component/NavBar";
import foodImg from "../assets/foodicon.svg"
import "../css/foodDetail/foodStyle.css"
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

        <div className="ctn-1">
            <div className="header">
                <div style={{"opacity": liked ? 1:0.5}} onClick={()=> {setLiked(!liked)}}><img src={like} alt="" /></div>
                <div style={{"opacity": chosen ? 1:0.5}} onClick={()=>{setChosen(!chosen)}}><img src={shpIcon} alt=""></img></div>

            </div>
            <div className="ctn-2">
                <div className="img-ctn">
                        <img src={foodImg} alt="food" />
                </div>
                <div className="food-info">
                    <p>عنوان:{data.title}</p>
                    <p>قیمت:{data.price}</p>
                    <p></p>

                </div>

            </div>
            <h1 className="comment-h">نظرات:</h1>
            <div className="input-ctn">
                <div className="send-ctn" onClick={()=> setTest(test+1)}><p>send</p></div>
                <input type="text" onKeyDown={(e)=> {handelKeyDown(e)}} name="comment" id="input-comment" placeholder="نوشتن نظر" />
                
                </div>
            <div className="comments">


            {Comments.map(c =>{return <Comment username={c.username} comment={c.comment}/>})}


            </div>

        </div>
    
    </>
}

export default FoodDetail;