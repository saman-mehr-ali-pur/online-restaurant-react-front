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
    <div className="search-c">
        <input type="text"  placeholder="جستجو غذا یا نوشیدنی..."/>
    </div>
    <div id="ctn" className="container" >
        <div className="right-side">
            {data.map((item,index) => {return <div key={index} className="item-c">
                <div className="pic-c"><img src={foodicon} alt="food" /></div>
                <div className="des-c"><p>item</p></div>
            </div>})}
        </div>
        <div className="left-side">
            <div className="item"><p>غذا ها</p></div>
            <div className="item"><p>نوشیدنی ها</p></div>
            <div className="item"><p>دسر ها</p></div>
            <div className="item"><p>سالاد ها</p></div>
        </div>
    </div>
    
    </>
}

export default Menu;