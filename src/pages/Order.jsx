import Nav from "../component/NavBar.jsx"
import "../css/order/orderStyle.css"
const Order = ()=>{

    return <>
        <Nav/>
        
        <div className="order-detail">
            <table>

                <tr>
                    <th>اقلام</th>
                    <th>قیمت</th>
                    
                </tr>

                <tr>

                    <td>item</td>
                    <td>120000000000</td>
                    
                </tr>

            </table>

            <div className="conclusion">
            <p >قمیت کل :</p>
            <p>تاریخ: </p>
            <p>سریال سفارش:</p>
            <p>سفارش دهنده:</p>
            </div>
        </div>
    </>

}


export default Order;