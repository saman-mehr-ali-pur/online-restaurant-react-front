import Nav from "../component/NavBar.jsx"
import style from "../css/order/orderStyle.module.css"
const Order = ()=>{

    return <>
        <Nav/>
        
        <div className={style.div}>
            <table className={style.table}>

                <tr>
                    <th className={style.th}>اقلام</th>
                    <th className={style.th}>قیمت</th>
                    
                </tr>

                <tr>

                    <td className={style.td}>item</td>
                    <td className={style.td}>120000000000</td>
                    
                </tr>

            </table>

            <div className={style.conclusion}>
            <p >قمیت کل :</p>
            <p>تاریخ: </p>
            <p>سریال سفارش:</p>
            <p>سفارش دهنده:</p>
            </div>
        </div>
    </>

}


export default Order;