import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '../../assests/car/img1.jpg'
import img2 from '../../assests/car/img2.jpg'
import img3 from '../../assests/car/img3.jpg'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='max-w-screen-xl mx-auto text-center '>
            <h1 className='text-4xl '>AFFORDABLE AND LIKE
                <br />  NEW CARS</h1>

            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation

            >
                <SwiperSlide className='ml-36'><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Header;