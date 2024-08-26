import Navbar from "../component/NavBar";
import foodImg from "../assets/foodicon.svg"
import style from  "../css/foodDetail/foodStyle.module.css"
import Comment from "../component/Comment";
import like from "../assets/likeed.svg"
import shpIcon from "../assets/shope.svg"
import { useEffect, useRef, useState } from "react";
import Loading from "./Loading.jsx"
import { useParams } from "react-router-dom";
const FoodDetail = ()=>{
    const [liked,setLiked] = useState(true)
    const [chosen,setChosen] = useState(true)
    const [data,setData] =  useState([])
    const [isLoading,setLoading] = useState(true)
    const [Comments,setComments] = useState([])
    const {id} = useParams();
    const [limit,setLimit] = useState(1)
    const newComment = useRef()
    const inputNum = useRef();

    const loadData = async ()=>{

        const req = new Request("http://Ir.pourghorban.site:8080/food/get/"+id,{
            method:"get",
            headers:{
                "content-type":"application/json",
                "Accept":"application/json"
            }
        })


        const reqC = new Request("http://Ir.pourghorban.site:8080/comment/all/"+id+`?limit=${limit}`,{
            method:"get",
            headers:{
                "content-type":"application/json",
                "Accept":"application/json"
            }
        })
       
        let result = await fetch(req).
                                then((resp)=>{
                                    if(!resp.ok){
                                        throw new Error("error code: "+resp.status);
                                    
                                    }
                                    // console.log(resp)
                                    return resp.json()
                                })
                                .catch(e =>{console.error(e)});
                                setData(result)
                            
                                result = await fetch(reqC).then((rs)=>{
                                    if (!rs.ok){
                                        throw new Error("somthing is wrong")
                                    } 
                                    return rs.json()
                                }).
                                 then(item =>{
                                    item.forEach(element => {
                                        console.log(element)
                                        Comments.push({comment:element.comment,username:element.user.username})
                                    });
                                    
                                    return null
                                 }).
                                catch(e => {
                                    console.log(e)
                                    alert(e.message)
                                })
                            
                                setLoading(false)
    }
    useEffect(()=>{
        loadData()
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

    const postComment = async (req) =>{

        fetch(req).then(rs =>{
            if(!rs.ok){
                throw new Error("faild to save comment")
            }

            return rs.json()
        }).then(
            (c)=>{
                let temp = Array.from(Comments)
                temp.push(c)
                setComments(temp)
            }
        ).catch (e => {
            console.error(e)
        })
    }


    const sendComment = () =>{

        let commentToSend = {
            user:{
                username:getUsername(),
                password:getPassWord(),
            },
            food: {id},
            comment:newComment.current.value
        }
        const req = new Request("http://Ir.pourghorban.site:8080/comment/save",{

            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(commentToSend)
        })

        postComment(req)
    }

    const postNewOrder = async (req)=>{
      let order = await fetch(req).then(rs =>{
            if (!rs.ok){
                throw new Error("falid ...")
            }
            return rs.json()
        }
        ).then(ord =>{
            // console.log(ord)
            return ord;
        }).catch(e=>{
            console.error(e);
            
        })
        console.log(order)
        localStorage.setItem("orderId",order.id.toString())
        await fetch(`http://Ir.pourghorban.site:8080/order/add/${id}/${order.id}/${inputNum.current.value}`,
    {
        method:"get",
        headers:{"content-type":"application/json"}
    }
    ).then(rs =>{
        if (!rs.ok)
            throw new Error("faild to add food")
        return rs.text()
    }).then(tx =>{
        if (tx=="false")
            throw new Error("server answer: "+tx)
        alert("success!!!")
    }).catch(e=>{
        console.error(e)
        alert(e.message)
    })
    }
    
    
    const addToOrder = ()=>{
        let orderId = localStorage.getItem("orderId")

        if (orderId==null){
            const newOrder = {customer:{username:getUsername(),password:getPassWord()}}
            console.log(newOrder)
            const req = new Request("http://localhost:8080/order",{
                method:"post",
                headers:{"content-type":"application/json"},
                body: JSON.stringify(newOrder)
            })

            postNewOrder(req)
        }
        else{

        fetch(`http://Ir.pourghorban.site:8080/order/add/${id}/${localStorage.getItem("orderId")}/${inputNum.current.value}`,
    {
        method:"get",
        headers:{"content-type":"application/json"}
    }
    ).then(rs =>{
        if (!rs.ok)
            throw new Error("faild to add food")
        return rs.text()
    }).then(tx =>{
        if (tx=="false")
            throw new Error("server answer: "+tx)
        alert("success!!!")
    }).catch(e=>{
        console.error(e)
        alert(e.message)
    })

    }
    }


    return<>
        <Navbar/>

        <div className={style.ctn_1}>
            <div className={style.header}>
                <div style={{"opacity": liked ? 1:0.5}} onClick={()=> {setLiked(!liked)}}><img src={like} alt="" /></div>
                <div style={{"opacity": chosen ? 1:0.5}} onClick={()=>{setChosen(!chosen); addToOrder()}}><img src={shpIcon} alt=""></img></div>
                <input type="number" className={style.num_input} defaultValue={1} ref={inputNum}/>
            </div>
            <div className={style.ctn_2}>
                <div className={style.ctn_img}>
                        <img src={data.images == null ? foodImg:`http://Ir.pourghorban.site:8080/image?path=${data.images[0]}`} alt="food" />
                </div>
                <div className={style.food_info}>
                    <p>عنوان:{data.name}</p>
                    <p>قیمت:{data.price}</p>
                    {data.description==null ? <></>:<p>توضیحات: {data.description}</p>}

                </div>

            </div>
            <h1 className={style.comment_h}>نظرات:</h1>
            <div className={style.input_ctn}>
                <div className={style.send_ctn} onClick={sendComment}><p>send</p></div>
                <input type="text" onKeyDown={(e)=> {handelKeyDown(e)}} name="comment" className={style.input_comment} placeholder="نوشتن نظر" ref={newComment}/>
                
                </div>
            <div className={style.comments}>


            {Comments.map((c,index) =>{
                // console.log(c)
                return <Comment key={index} username={c.username} comment={c.comment}/>})}


            </div>

        </div>
    
    </>
}



function getUsername(){
    let username =  document.cookie.split("; ").find(c => c.startsWith("username="))
    if (username!=undefined)
        username = username.split("=")[1]

    return username;
}



function getPassWord(){
    let password =  document.cookie.split("; ").find(c => c.startsWith("password="))
    if (password!=undefined)
        password = password.split("=")[1]

    return password;
}


export default FoodDetail;