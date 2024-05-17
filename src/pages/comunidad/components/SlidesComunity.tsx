import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { slidesComunityData } from "../../../data/slides";
const SlidesComunity = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      autoplay
      className="swiper-wrapper"
    >
      {slidesComunityData.map((data, idx) => (
        <SwiperSlide className="swiper-slide" key={idx}>
          <div className="testimonial-item">
            <div className="d-flex">
              <div>
                <h3>{data.title}</h3>
              </div>
            </div>
            <p>
              <i className="bi bi-quote quote-icon-left"></i>
              <span>{data.info}</span>
              <i className="bi bi-quote quote-icon-right"></i>
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlidesComunity;
