const VivaMarket = () => {
  return (
    <>
      <section id="features" className="features">
        <div
          className="container section-title"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2>Viva Market</h2>
        </div>

        <div className="container">
          <div className="row gy-4 align-items-center features-item">
            <div
              className="col-lg-5 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p style={{ textAlign: "justify", width: "90%" }}>
                <strong>Viva Market</strong> es un evento para pasar el fin de
                semana en familia; podrás encontrar más de 80 expositores dando
                a conocer sus productos o servicios al igual que entretenimiento
                y dinámicas para toda la familia. Los{" "}
                <strong>beneficios</strong> de ser parte son dar a conocer tu
                marca, conocer alternativas de productos y servicios, networking
                entre emprendedores e <strong> impulsar y ayudar</strong> al{" "}
                <strong>comercio local</strong>. El Viva Market se presenta en
                distintas fechas durante el año, la entrada al evento es{" "}
                <strong>libre y gratuita</strong> y es un ambiente familiar.
                Como expositores sí se tiene una cuota de recuperación por sus
                espacios. Para más información, manda tu propuesta al{" "}
                <strong>correo:</strong>
                <em className="fw-bold">vivalafemmecolima@gmail.com</em>
              </p>
            </div>
            <div
              className="col-lg-7 order-1 order-lg-2 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <div className="image-stack">
                <img
                  src="assets/img/sitio_femme/webp-images/2.webp"
                  alt=""
                  className="stack-front"
                />
                <img
                  src="assets/img/sitio_femme/webp-images/1.webp"
                  alt=""
                  className="stack-back"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container section-title" data-aos="fade-up">
          <h2>Alianzas</h2>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-chat-heart"></i>
                </div>
                <div>
                  <h4 className="title">
                    <a href="#services" className="stretched-link">
                      Impacto
                    </a>
                  </h4>
                  <p className="description">
                    Lograr generar impacto de una comunidad de mujeres
                    emprendedoras y apoya al comercio local.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-bag-heart"></i>
                </div>
                <div>
                  <h4 className="title">
                    <a href="#services" className="stretched-link">
                      Experiencia
                    </a>
                  </h4>
                  <p className="description">
                    Vivir la experiencia de ser parte del Viva Market, un fin de
                    semana que se vive rodeado de marcas y proyectos locales.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-house-heart"></i>
                </div>
                <div>
                  <h4 className="title">
                    <a href="#services" className="stretched-link">
                      Comunidad
                    </a>
                  </h4>
                  <p className="description">
                    Aumenta el prestigio de tu marca, interactuando con un
                    target especifico y formando parte de la comunidad de
                    mujeres de Viva La Femme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VivaMarket;
