import { Swiper, SwiperSlide } from 'swiper/react';
// import { Player } from 'video-react';
import 'swiper/css';

const Carousel = () => {
    return (
        <Swiper
            // spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="w-1/3 h-44 bg-slate-800">
                slide 1
            </SwiperSlide>
            <SwiperSlide className="w-1/3 h-44 bg-slate-800">Slide 2</SwiperSlide>
            <SwiperSlide className="w-1/3 h-44 bg-slate-800">Slide 3</SwiperSlide>
            <SwiperSlide className="w-1/3 h-44 bg-slate-800">Slide 4</SwiperSlide>
        </Swiper>
    )
}
export default Carousel