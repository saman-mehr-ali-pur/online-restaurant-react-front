import { useRef, useState } from "react";
import style from "../../css/field/style.module.css"
import editicon from "../../assets/editing.svg"
import checkMark from "../../assets/check-mark.svg"
const Field = ({name,value,edit,handelEdit,inputType,lock})=>{
    const inputRef = useRef();
    const [isEditmode , setEditmode] = useState(edit);
    const [newvalue,setValue] = useState(value);

    const handelChange = () =>{
            setValue(inputRef.current.value)
    }
   
    return <>
        <div className={style.field}>{ isEditmode && !lock ? 
        <><p>{name}</p><input type={inputType} onChange={handelChange} value={newvalue} ref={inputRef} /> <div onClick={()=> {handelEdit(inputRef.current.value); setEditmode(!isEditmode)}}><img src={checkMark} alt="" /></div></>
        :
        <><p>{name} : &#160;</p><p>{value}</p> <div style={style.imgicon} onClick={() => setEditmode(!isEditmode)}><img src={editicon} alt="" /></div></>}</div>
    </>
}



export default Field;   
