import imgFood  from "../../assets/foodicon.svg"
import style from "../../css/shope/shopeItem.module.css"
import trash from "../../assets/trash.svg"
import { useRef } from "react"
const ShpItem = ({id,name,price,state,trashEvent})=>{


    return <>

        <div className={style.item}>

            <div className={style.trash_icn} onClick={()=> trashEvent(id)}>
                <img src={trash}  alt="" />
            </div>
        
            <img src={imgFood} className={style.img} alt="" />
            <div className={style.description} >
                <p>{name}</p>
                <p>{price}</p>
                <p>{state==0 ? "تمام شده":"موجود"}</p>
            </div>
            


        </div>
    
    </>
}

export default ShpItem;