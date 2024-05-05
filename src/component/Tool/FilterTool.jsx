import "../../css/filter/FilterStyle.css"
const SearchTool = ({refrence})=>{

    return <>

        <div ref={refrence} id="search-tool" className="container" >
            <div className="order-type">
                <p>نوع ترتیب:</p>
                <select name="orderType" id="order-t">
                <option value={0} selected>صعودی</option>
                <option value={1}>نزولی</option>
                </select>
                </div>
            <div className="order-by">
                <p>ترتیب بر اساس:</p>
                <select name="orderBy" id="order-by">
                 <option value="date" selected>تاریخ</option>
                <option value="price">قیمت</option>
                </select></div>
            <div className="order-serial">
                <p>سریال سفارش:</p>
                <input type="number" name="serial" placeholder="serial" /></div>
            <div className="period">
                <p>بازه تاریخی:</p>
                <input type="date" name="starting"  />
                <input type="date" name="ending" placeholder="yyyy-mm-dd"/>

            </div>
            <div className="price-range">
                <p>بازه قیمتی</p>
                <input type="number" name="p-starting"/>
                <input type="number" name="p-ending"/>
            </div>
            
            
        </div>
        
        
    </>
}


export default SearchTool;