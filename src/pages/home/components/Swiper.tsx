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
import slidesData from "../../../data/slides";

const SwiperComponent = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-5 info"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>Testimonios</h3>
            <p className="my-5">
              Los testimonios son el alma de nuestra comunidad, mostrando cómo
              juntas podemos lograr cosas asombrosas y cómo hemos crecido
              acompañadas de mujeres empoderadas.
            </p>
          </div>
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
            <div className="swiper">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                autoplay
                className="swiper-wrapper"
              >
                {slidesData.map((data, idx) => (
                  <SwiperSlide className="swiper-slide" key={idx}>
                    <div className="testimonial-item" style={{ top: 0 }}>
                      <div className="d-flex">
                        <div>
                          <h3>{data.nombre}</h3>
                          <h4>{data.lugar}</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwiperComponent;
