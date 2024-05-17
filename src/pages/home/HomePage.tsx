import Stats from "./components/Stats";
import SwiperComponent from "./components/Swiper";
import Gallery from "./components/Gallery";
import UpcomingEvents from "./components/UpcomingEvents";

const HomePage = () => {
  return (
    <>
      <main className="main">
        <section id="hero" className="hero">
          <img
            src="assets/img/sitio_femme/webp-images/Main.webp"
            className="d-none d-md-block"
          />
          <img
            src="assets/img/sitio_femme/webp-images/Hero-Mobile.webp"
            className="d-md-none"
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto d-flex flex-column align-items-center justify-content-center text-center">
                <h2 className="hero-title">Más Fuertes Juntas</h2>
                <p data-aos="fade-up" data-aos-delay="200">
                  Únete a la comunidad Femme
                </p>
                <a
                  href="https://www.instagram.com/vivalafemmecolima/"
                  target="_blank"
                  className="show-more-button mt-3"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-xl-center gy-5">
              <div className="col-xl-6 content">
                <h2 className="text-center">Nuestra Historia</h2>
                <p className="mx-auto">
                  Somos cuatro amigas amantes del
                  <strong>emprendimiento</strong> y de la
                  <strong>fortaleza</strong> que tenemos las
                  <strong>mujeres</strong> en crear proyectos maravillosos. Con
                  el motivo de apoyar el comercio local y hacer alianzas entre
                  nosotras, fue como hace cinco años comenzó el camino de
                  <strong>Viva la Femme</strong>, que ahora es una comunidad que
                  conecta a las <strong>mujeres emprendedoras</strong> de
                  Colima.
                </p>
              </div>
              <div className="col-xl-6 mx-auto d-flex align-items-center justify-content-center">
                <img
                  src="/assets/img/sitio_femme/webp-images/Nuestra Historia.webp"
                  alt="Imagen Nuestra Historia"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <UpcomingEvents />
        <Stats />
        <SwiperComponent />
        <section id="call-to-action" className="call-to-action">
          <img src="/assets/img/sitio_femme/InfoBotón.webp" alt="" />

          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="col-xl-10">
                <div className="text-center">
                  <h3>Comunidad Femme</h3>
                  <p>
                    Únete a esta increíble red de mujeres emprendedoras, porque
                    creemos en nuestro poder y pasión, porque somos
                    <strong>más fuertes juntas</strong>
                  </p>
                  <a className="cta-btn" href="membresia.html">
                    Unirme
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Gallery />
      </main>
    </>
  );
};

export default HomePage;
