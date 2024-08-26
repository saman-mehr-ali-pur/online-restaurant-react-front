// ?import  "../css/addFood/style.css"
import style from "../css/addFood/formStyle.module.css"
const AddFood = ()=>{


    const postInfo = async (food,dataForm)=>{
        let req = new Request("http://localhost:8080/food/save",{
            method:"post",
            headers:{
                "content-type": "application/json"
            }
            ,
            body:JSON.stringify(food)
        })


        // let result = await fetch(req).then(
        //     rs =>{
        //         if(!rs.ok)
        //             throw new Error("faild to up load info")

        //         return [rs.json(),rs.status]
        //     }
        // ).catch(e => {
        //     alert("faild to save info")
        //     console.error(e)}
        // )


        if(true){
            result = await fetch("http://localhost:8080/food/img/"+3,{
                method:"post",
                body:dataForm
            }).then(
                rs =>{
                    if(!rs.ok)
                        throw new Error()
                    return ts.text()
                }
            ).catch(e => console.error(e))
        }

    }


    const onSubmit = (e)=>{
        e.preventDefault();
        // console.log(e.target.name.value)
        let food ={name:e.target.name.value,
            price:e.target.price.value,
            status:e.target.status=="true" ? true:false,
            description:e.target.desc.value,
            type:e.target.type.value
        }


        let dataForm = new FormData()
        dataForm.append("image",e.target.image.files[0])

        
        postInfo(food,dataForm)

        // console.log(e.target.image.files[0])

    }

    return <>
    
        <form className={style.form} onSubmit={onSubmit}>

        <label className={style.label} htmlFor="name">عنوان</label>
        <input className={style.input} type="text" name="name" required/>
        <br />

        <label className={style.label} htmlFor="price">قیمت</label>
        <input  className={style.inputnum}  type="number" name="price" required/>

        <br/>
        <label className={style.label} htmlFor="desc">توضیحات</label>
        <input className={style.input}  type="text" name="desc" required/>

        <br />
        <label className={style.label} htmlFor="image">تصویر</label>
        <input className={style.inputimg}  type="file" name="image" accept="image/png image/jpeg"  />
       
       <br />

       <label className={style.label} htmlFor="type">نوع</label>
       <select name="type" className={style.select} defaultValue={"1"}>
        <option value="MAIN">غذای اصلی</option>
        <option value="SALAD">سالاد و دسر</option>
        <option value="DESSERT">دسر</option>
        <option value="DRINK">نوشیدنی</option>

       </select>

        <br/>
        <label className={style.label} htmlFor="status">وضعیت</label>
        <select name="status" className={style.select} defaultValue={"0"}>
            <option value="false">ناموجود</option>
            <option value="true">موجود</option>
        </select>

        <br />
        <button type="submit" className={style.button}>ذخیره</button>
        </form>

    </>

}




export default AddFood;