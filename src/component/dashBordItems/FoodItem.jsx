import style from "../../css/AdminDash/itemStyle.module.css"
import trash from "../../assets/trash.svg"
import imgFood  from "../../assets/foodicon.svg"
import { useState } from "react"

const FoodItem = ({data,id,title,price,description,trashEvent,imgSrc}) => {
    const[Mode1,setMode1] = useState(true)
    const[Mode2,setMode2] = useState(true)
    const[Mode3,setMode3] = useState(true)
    const[Mode4,setMode4] = useState(true)

    // console.log(data)

    const updateData = async ()=>{

        const req = new Request("http://localhost:8080/food/update",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })


        let result = await fetch(req).then(

            rs => {
                if (!rs.ok)
                    throw new Error("faild to update")
                return rs.text()
            }
        ).catch(e=> console.error(e))


        if (result!="true")
            alert("faild to update")
        location.reload()

    }

    const handleClick1 = (e) =>{
        
        // console.log(e.target)
        setMode1(!Mode1)

    }

    const keyDownEvent1 = (e) =>{
        if(e.key == "Enter"){
            // console.log(e.target.value)
            data.name=e.target.value
            updateData()
            setMode1(!Mode1)
        }
    }
    

    const handleClick2 = (e) =>{
        setMode2(!Mode2)

    }

    const keyDownEvent2 = (e) =>{
        if(e.key == "Enter"){
            data.price=e.target.value
            updateData()
            setMode1(!Mode2)
        }
    }



    const handleClick3 = (e) =>{
        setMode3(!Mode3)

    }

    const keyDownEvent3 = (e) =>{
        if(e.key == "Enter"){
            data.description=e.target.value
            updateData()
            setMode1(!Mode3)
        }
    }


    const handleClick4 = (e) =>{
        setMode4(!Mode4)

    }


    const handlSelect = async (e)=>{
        data.status = parseInt(e.target.value)
        updateData()
    }

    return <>
    
       <div className={style.container}>
        
        <div className={style.trashContainer}>
            <img src={trash} alt="trash icon" />
        </div >

        <div className={style.imgContainer}>
            <img src={imgSrc==null ? imgFood:`http://localhost:8080/image?path=${imgSrc}`}  />
        </div >

        <div className={style.rightSection}>


            {Mode1 ? <><p  className={style.title} onClick={handleClick1}>عنوان: {title}</p> </> : <><input type="text" onKeyDown={keyDownEvent1} defaultValue={title}/></>}
            {Mode2 ? <><p className={style.title} onClick={handleClick2}>بها : {price}</p> </> : <><input type="text" onKeyDown={keyDownEvent2} defaultValue={price}/></>}
            {Mode3 ? <><p className={style.title} onClick={handleClick3}>توضیحات: {data.description}</p> </> : <><input type="text" onKeyDown={keyDownEvent3} placeholder={description}/></>}
            {
            Mode4 ? <><p className={style.title} onClick={handleClick4}>وضعیت: {data.status ? "موجود":"ناموجود"} </p> </> : <><select onClick={handlSelect}>
                <option value="1" selected>موجود</option>
                <option value="0">ناموجود</option>
                </select></>}
            

        </div>
        
        </div> 

    </>

}


export default FoodItem;