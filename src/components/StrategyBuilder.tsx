import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { slides } from "../data/featuresData";


const StrategyBuilder = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative max-w-xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center"> Build Your Strategy</h2>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 p-6 rounded-lg text-center relative">
              <h3 className="text-lg font-semibold text-gray-800">{slide.title}</h3>
              <p className="text-gray-600 mt-2 whitespace-pre-line">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StrategyBuilder;
