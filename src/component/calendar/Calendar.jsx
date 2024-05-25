import { useRef ,useEffect, useState} from "react";
import style from "../../css/signUp/signup.module.css"

const Canlendar =()=>{
    let year =  null;
    const [years,setyeasrs] = useState([])
    const [month,setMonth] = useState(1);
    // console.log(year.json())

    useEffect(()=>{ 
       
            const getYear = async ()=>{
            let result = await fetch("https://api.keybit.ir/time/",{method:"GET"})
            .then(
                res => {
                    if (!res.ok)
                        throw new error("somethins is wrong "+res.status)
                    return res.json()
                })
                
                
                .then(data =>{ return data.date.year.number.en})
                .catch(e =>{console.error(e)});

                year = result;
                let list=[]
                for (var j=0;j<70;j++){
                    var value = year -j;
                    list.push(<><option key={j+1} value={value}>{value}</option></>)
                }
                setyeasrs(list);
       
            }
        getYear();


    },[])

    return <>
    
    
        
     <div class={style.canlendar}>
    
    <span  className={style.span}>
      <label htmlFor="month" className={style.label}>ماه</label>
      <select id="month"  className={style.select} name="month" onClick={(e)=> setMonth(e.target.value)}>
        <option className={style.month} value={1} selected>فروردین</option>
        <option className={style.month} value={2}>اردیبهشت</option>
        <option className={style.month} value={3}>خرداد</option>
        <option className={style.month} value={4}>تیر</option>
        <option className={style.month} value={5}>مرداد</option>
        <option className={style.month} value={6}>شهریور</option>
        <option className={style.month} value={7}>مهر</option>
        <option className={style.month} value={8}>آبان</option>
        <option className={style.month} value={9}>آذر</option>
        <option className={style.month} value={10}>دی</option>
        
        <option className={style.month} value={11}>بهمن</option>
        <option className={style.month} value={12}>اسفند</option>
      </select>
    </span>
    <span className={style.span}>
      <label htmlFor="day" className={style.label}>روز</label>
      <select id="day" className={style.select} name="day">
  
  {Array.from({ length: month<=6 ? 31:30 }, (_,i) => {
    if (i+1==1)
      return (<option key={i} className="day" value={i + 1} selected>{i + 1}</option>) 
    return (<option key={i} value={i + 1}>{i + 1}</option>)
  })

    }
</select >

    </span>
    <span className={style.span}>
      <label htmlFor="year" className={style.label}>سال</label>
      <select id="year" className={style.select} name="year">
            {
                years
            }
      </select>
    </span>
    </div>
    </>
}



export default Canlendar;