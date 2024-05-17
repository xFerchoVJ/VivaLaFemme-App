import SlidesComunity from "./components/SlidesComunity";

const ComunityPage = () => {
  return (
    <>
      <section className="about" data-aos="fade-up">
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row align-items-xl-center gy-5">
            <div className="col-xl-6 content">
              <h2 className="text-center">Comunidad Viva la Femme</h2>
              <p className="mx-auto">
                Hace cinco años nace <strong>Viva la Femme</strong>, una
                comunidad que surge de la necesidad de conectar a las mujeres
                emprendedoras de Colima, para apoyar el{" "}
                <strong>comercio local</strong>. En la actualidad Viva la Femme
                se ha vuelto una plataforma que se comparte entre más de{" "}
                <strong>9,000 mujeres</strong> del estado, ahora con apertura en
                Manzanillo. Además, la <strong>comunidad</strong> no sólo es un
                plataforma, sino que se ha vuelto pionera de{" "}
                <strong>eventos y mercados únicos</strong> en el estado y sus
                alrededores.
              </p>
            </div>
            <div className="col-xl-6 mx-auto d-flex align-items-center justify-content-center">
              <img
                src="./assets/img/sitio_femme/webp-images/Comunidad.webp"
                alt="Imagen Team"
                width="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="testimonials mb-3">
        <div className="container pe-lg-5">
          <div className="row align-items-center">
            <div
              className="col-lg-3 info"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-center">Puntos Clave</h3>
            </div>
            <div className="col-lg-9" data-aos="fade-up" data-aos-delay="200">
              <div className="swiper">
                <SlidesComunity />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComunityPage;
