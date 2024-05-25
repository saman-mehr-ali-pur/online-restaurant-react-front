import  style from "../../css/filter/FilterStyle.module.css"
const SearchTool = ({refrence})=>{

    return <>

        <div ref={refrence} id="search-tool" className={style.container} >
            <div className="order-type">
                <p>نوع ترتیب:</p>
                <select name="orderType" id="order-t" className={style.select}>
                <option value={0} selected>صعودی</option>
                <option value={1}>نزولی</option>
                </select>
                </div>
            <div className="order-by">
                <p>ترتیب بر اساس:</p>
                <select name="orderBy" id="order-by" className={style.select}>
                 <option value="date" selected>تاریخ</option>
                <option value="price">قیمت</option>
                </select></div>
            <div className="order-serial">
                <p>سریال سفارش:</p>
                <input type="number" name="serial" placeholder="serial" className={style.input}/></div>
            <div className="period">
                <p>بازه تاریخی:</p>
                <input type="date" name="starting"  className={style.input}/>
                <input type="date" name="ending" placeholder="yyyy-mm-dd" className={style.input}/>

            </div>
            <div className="price-range">
                <p>بازه قیمتی</p>
                <input type="number" name="p-starting" className={style.input}/>
                <input type="number" name="p-ending" className={style.input}/>
            </div>
            
            
        </div>
        
        
    </>
}


export default SearchTool;