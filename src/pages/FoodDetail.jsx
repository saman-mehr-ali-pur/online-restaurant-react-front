import Navbar from "../component/NavBar";
import foodImg from "../assets/foodicon.svg"
import "../css/foodDetail/foodStyle.css"
import Comment from "../component/Comment";
import like from "../assets/likeed.svg"
import unlike from "../assets/unliked.svg"
import shpIcon from "../assets/shope.svg"
import { useState } from "react";
const FoodDetail = ()=>{
    const [liked,setLiked] = useState(true)
    const [chosen,setChosen] = useState(false)

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
                    <p>food</p>
                    <p>price</p>
                    <p>description</p>

                </div>

            </div>
            <div className="comments">


                <Comment username={"username"} comment={"so good"}/>
                <Comment username={"username"} comment={"so good"}/>

                <Comment username={"username"} comment={"so good"}/>
                <Comment username={"username"} comment={"so good"}/>

                <Comment username={"username"} comment={"so good"}/>

                <Comment username={"username"} comment={"so good"}/>

                <Comment username={"username"} comment={"so good"}/>


            </div>

        </div>
    
    </>
}

export default FoodDetail;