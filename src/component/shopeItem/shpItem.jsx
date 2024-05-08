import imgFood  from "../../assets/foodicon.svg"
import "../../css/shope/shopeItem.css"
import trash from "../../assets/trash.svg"
import { useRef } from "react"
const ShpItem = ({id,name , price,state,trashEvent})=>{

    

    return <>

        <div className="item">

            <div className="trash-icn" onClick={()=> trashEvent(id)}>
                <img src={trash} alt="" />
            </div>            
        
            <img src={imgFood} alt="" />
            <div className="description" >
                <p>{name}</p>
                <p>{price}</p>
                <p>{state==0 ? "تمام شده":"موجود"}</p>
            </div>
            


        </div>
    
    </>
}

export default ShpItem;