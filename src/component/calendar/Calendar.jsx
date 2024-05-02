import { useRef ,useEffect, useState} from "react";
import "../../css/signUp/signup.css"

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
    
    
        
     <div class="calendar">
    
    <span>
      <label htmlFor="month">ماه</label>
      <select id="month"  name="month" onClick={(e)=> setMonth(e.target.value)}>
        <option value={1} selected>فروردین</option>
        <option value={2}>اردیبهشت</option>
        <option value={3}>خرداد</option>
        <option value={4}>تیر</option>
        <option value={5}>مرداد</option>
        <option value={6}>شهریور</option>
        <option value={7}>مهر</option>
        <option value={8}>آبان</option>
        <option value={9}>آذر</option>
        <option value={10}>دی</option>
        <option value={11}>بهمن</option>
        <option value={12}>اسفند</option>
      </select>
    </span>
    <span>
      <label htmlFor="day">روز</label>
      <select id="day" name="day">
  
  {Array.from({ length: month<=6 ? 31:30 }, (_,i) => {
    if (i+1==1)
      return (<option key={i} value={i + 1} selected>{i + 1}</option>) 
    return (<option key={i} value={i + 1}>{i + 1}</option>)
  })

    }
</select>

    </span>
    <span>
      <label htmlFor="year">سال</label>
      <select id="year" name="year">
            {
                years
            }
      </select>
    </span>
    </div>
    </>
}



export default Canlendar;