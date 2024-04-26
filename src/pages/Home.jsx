import logo from "../assets/images.svg"
import Auth from "../component/Auth"
import "../css/home.css" 

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
import "../css/silde/sildeStyle.css"
const Home = ()=>{



    return <>
    
    <nav>
        
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        </div>
       
          <div className="links-container"><a className="link" href="#!">تاریخچه سفارشات</a></div>
          <div className="links-container"><a className="link" href="#!">منو</a></div>
          <div className="links-container"><a className="link" href="#!">خانه</a></div>
          <div className="links-container"><a className="link" href="#!">ارتباط با ما</a></div>
          <div className="links-container"><a className="link" href="#!">درباره ما</a></div>
       <Auth className="auth"/>
    </nav>
    

    <div className="silde-container"><Swiper
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
      <SwiperSlide className="silde">
      <div className="head">
        <img src={foodimg} alt="food" className="f-img" />
      </div>
      <div className="tail"><p>غذاها</p></div>
      </SwiperSlide>
      <SwiperSlide className="silde">
        <div className="head"><img src={drinkimg} alt="drink" className="f-img"/></div>
        <div className="tail"><p>انواع نوشیدنی ها</p></div>
        </SwiperSlide>
      <SwiperSlide className="silde"> 
      <div className="head"><img src={dessertimg} alt="dessert" className="f-img"/></div>
      <div className="tail"><p>انواع دسر ها</p></div></SwiperSlide>
      <SwiperSlide className="silde"> 
      <div className="head"><img src={saladimg} alt="salad" className="f-img"/></div>
      <div className="tail"><p>انواع سالاد</p></div>
      </SwiperSlide>
    </Swiper>
    </div>


    <div className="des-container">
        <div className="text-container"><p>ارائه بهترین خدمت سفارش آنلاین و با بهترین مواد اولیه</p></div>
        <div className="pic-container"><img src={food2} alt="" /></div>
    </div>
    

    <div className="des-container">
        
        <div className="pic-container-d"><img src={delivryimg} alt="" /></div>
        <div className="text-container"><p>تحویل در سریع ترین زمان ممکن</p></div>
    </div>
    {/* <div className="footer-container">

          <footer>
            <p className="address">قم خیابان ....</p>
            <p className="phone number">تلفن:32855555</p>
          </footer>
        
    </div> */}


<div class="container">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
    </div>
    </>
}


export default Home;