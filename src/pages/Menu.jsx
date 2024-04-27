import Navbar from "../component/NavBar"

import "../css/menu/menuStyle.css"
import foodicon from "../assets/foodicon.svg"
const Menu = () => {


    let data = [];
    for (let i=0;i<28;i++){
        data.push(i)
    }
    return <>
    <Navbar/>
    <div id="ctn" className="container" >
        <div className="right-side">
            {data.map((item,index) => {return <div key={index} className="item-c">
                <div className="pic-c"><img src={foodicon} alt="food" /></div>
                <div className="des-c"><p>item</p></div>
            </div>})}
        </div>
        <div className="left-side">
            <div className="item"><p>foods</p></div>
            <div className="item"><p>drinks</p></div>
            <div className="item"><p>desserts</p></div>
        </div>
    </div>
    
    </>
}

export default Menu;