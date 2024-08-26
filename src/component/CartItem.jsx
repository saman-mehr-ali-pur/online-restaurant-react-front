import style from "../css/cartItem/itemStyle.module.css"
import trash from "../assets/trash.svg"
import foodimg from "../assets/foodicon.svg"
import { useRef, useState } from "react"


const CartItem = ({data,hadelDelete})=>{
    const [cart ,setCart] = useState([data])
    const numRef = useRef()

    // console.log(cart)


    const update = async (num)=>{



        let orderId = localStorage.getItem("orderId")
        const req  = new Request(`http://Ir.pourghorban.site:8080/order/add/${cart[0].id}/${localStorage.getItem("orderId")}/${num}`,{
            method:"get"
        })


        let result = await fetch(req).then(
            rs =>{
                if(!rs.ok)
                    throw new Error("faild to update")
                return rs.text()
            }
        ).catch(e => console.error(e))

        if(result!="true")
            alert("faild to update")

        // location.reload()
    }

    return < >
            <div className={style.container}>
                <div className={style.trash} onClick={()=>{hadelDelete(cart[0].id)}}>
                   <img src={trash} alt="" />
                </div>

                <div className={style.foodimg}>
                    <img src={foodimg} alt="" />
                </div>

                <div className={style.info}>
                   {cart.map((item,index) =>{return <>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <input type="number" name="num" defaultValue={item.number} onKeyDown={(e)=> {
                                // let newcart = Array.from(cart);
                                // newcart[index].number = e.target.value;
                                // setCart(newcart)}}
                                if(e.key=="Enter"){
                                    item.number = e.target.value
                                    update(e.target.value)

                                }
                            }}
                                />

                            <p>قیمت کل : <span>{item.price*item.number}</span></p>
                   </>})}
                </div>
            </div>
    </>
}


export default CartItem;