import { useState } from "react"

import Navbar from "../component/NavBar"
import style from "../css/menu/menuStyle.module.css"
import foodicon from "../assets/foodicon.svg"
import Loading from "./Loading"
const Menu = () => {
    const [isLoading,setLoading] = useState(false);

    let data = [];
    for (let i=0;i<28;i++){
        data.push(i)
    }

    if(!isLoading){
        return <>
        <Navbar/>
        <div className={style.search_c}>
            <input type="text"  placeholder="جستجو غذا یا نوشیدنی..."/>
        </div>
        <div id="ctn" className={style.container} >
            <div className={style.right_side}>
                {data.map((item,index) => {return <div key={index} className={style.item_c}>
                    <div className={style.pic_c}><img src={foodicon} alt="food" /></div>
                    <div className={style.des_c}><p>item</p></div>
                </div>})}
            </div>
            <div className={style.left_side}>
                <div className={style.item}><p>غذا ها</p></div>
                <div className={style.item}><p>نوشیدنی ها</p></div>
                <div className={style.item}><p>دسر ها</p></div>
                <div className={style.item}><p>سالاد ها</p></div>
            </div>
        </div>
        
        </>
    }

    else
        return <Loading/>
}

export default Menu;