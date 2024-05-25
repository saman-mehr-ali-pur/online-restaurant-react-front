import logo from "../assets/images.svg"
import Auth from "../component/Auth"
import style from "../css/home.module.css" 

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import foodimg from "../assets/food.jpg" 
import drinkimg from "../assets/drink.jpg"
import dessertimg from "../assets/dessert.jpg"
import saladimg from "../assets/salad.jpg"
import food2 from "../assets/food2.jpg"
import delivryimg from "../assets/delivry.svg"
import slideStyle from  "../css/silde/sildeStyle.module.css"
import Navbar  from "../component/NavBar";
const Home = ()=>{

    

    return <>
    
    <Navbar/>
    

    <div className={slideStyle.silde_container}><Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className={style.slide}>
      <div className={slideStyle.head}>
        <img src={foodimg} alt="food" className={slideStyle.f_img} />
      </div>
      <div className={slideStyle.tail}><p>غذاها</p></div>
      </SwiperSlide>
      <SwiperSlide className={slideStyle.silde}>
        <div className="head"><img src={drinkimg} alt="drink" className={slideStyle.f_img}/></div>
        <div className={slideStyle.tail}><p>انواع نوشیدنی ها</p></div>
        </SwiperSlide>
      <SwiperSlide className={slideStyle.silde}> 
      <div className="head"><img src={dessertimg} alt="dessert" className={slideStyle.f_img}/></div>
      <div className={slideStyle.tail}><p>انواع دسر ها</p></div></SwiperSlide>
      <SwiperSlide className={slideStyle.silde}> 
      <div className={slideStyle.head}><img src={saladimg} alt="salad" className={slideStyle.f_img}/></div>
      <div className={slideStyle.tail}><p>انواع سالاد</p></div>
      </SwiperSlide>
    </Swiper>
    </div>


    <div className={style.des_container}>
        <div className={style.text_container}><p>ارائه بهترین خدمت سفارش آنلاین و با بهترین مواد اولیه</p></div>
        <div className={style.pic_container}><img src={food2} alt="" /></div>
    </div>
    

    <div className={style.des_container}>
        
        <div className={style.pic_container_d}><img src={delivryimg} alt="" /></div>
        <div className={style.text_container}><p>تحویل در سریع ترین زمان ممکن</p></div>
    </div>
    

    
<div class={style.container}>
        <div class={style.wave}></div>
        <div class={style.wave}></div>
        <div class={style.wave}></div>
    </div>
    </>
}





export default Home;