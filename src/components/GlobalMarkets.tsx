import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { marketSlides } from "../data/featuresData";


const GlobalMarkets = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative max-w-xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">🌍 Global Markets</h2>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="relative"
      >
        {marketSlides.map((markets, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 p-6 rounded-lg text-center grid grid-cols-2 gap-4">
              {markets.map((market, i) => (
                <span key={i} className="text-gray-800 font-medium">{market}</span>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GlobalMarkets;
