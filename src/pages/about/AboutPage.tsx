const AboutPage = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row align-items-xl-center gy-5">
            <div className="col-xl-6 content" data-aos="fade-up">
              <h2 className="text-center">Nuestra Historia</h2>
              <p className="mx-auto">
                Somos cuatro amigas amantes del <strong>emprendimiento</strong>{" "}
                y de la <strong>fortaleza</strong> que tenemos las{" "}
                <strong>mujeres</strong> en crear proyectos maravillosos. Fue
                así como hace cinco años comenzó el camino de{" "}
                <strong>Viva la Femme</strong>, una comunidad que surge con las
                necesidades de conectar a las mujeres emprendedoras en Colima,
                para apoyar el comercio local.
              </p>
            </div>
            <div className="col-xl-6 mx-auto d-flex align-items-center justify-content-center" data-aos="fade-left">
              <img
                src="/assets/img/sitio_femme/webp-images/Team.webp"
                alt="Imagen Team"
                width="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="team mb-3">
        <div className="container section-title" data-aos="fade-up">
          <h2>Nosotras</h2>
        </div>

        <div className="container">
          <div className="row gy-5 d-flex align-items-center justify-content-center">
            <div
              className="col-lg-6 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="member-img">
                <img
                  src="/assets/img/sitio_femme/team-webp/Sofi.webp"
                  className="img-fluid"
                  alt="Imagen Sofia"
                />
                <div className="social">
                  <a href="https://instagram.com/bloomingideasbysofia?igshid=MzRlODBiNWFlZA==">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://instagram.com/floralblossom.mx?igshid=OGQ5ZDc2ODk2ZA==">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="member-info text-center">
                <h4>Ana Sofia</h4>
                <span>Chief Executive Officer</span>
                <p>
                  Hola, soy Sofi, publicista y comunicóloga de profesión, llevo
                  5 años siendo emprendedora, en mi proyecto personal Floral
                  Blossom y haciendo florecer tus ideas en Blooming Ideas, soy
                  la encargada de la logística y decoración de cada market,
                  además de innovar e impulsar proyectos y mujeres en esta
                  increíble comunidad
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="member-img">
                <img
                  src="/assets/img/sitio_femme/team-webp/Nat.webp"
                  className="img-fluid"
                  alt="Imagen Natalia"
                />
                <div className="social">
                  <a href="https://instagram.com/palmabena?igshid=OGQ5ZDc2ODk2ZA==">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="member-info text-center">
                <h4>Natalia</h4>
                <span>Chief Executive Officer</span>
                <p>
                  Hello, soy Nat, diseñadora de modas y fundadora de Palmabena,
                  creada para impulsar la creatividad, acompañar y reflejar la
                  autenticidad de cada mujer, soy fan de trabajar en equipo con
                  mujeres, viajera de corazón, amante de la comida mexicana y me
                  encargo de relaciones públicas y temas administrativos
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="member-img">
                <img
                  src="/assets/img/sitio_femme/team-webp/Nanis.webp"
                  className="img-fluid"
                  alt="Imagen Adriana"
                />
                <div className="social">
                  <a href="https://instagram.com/adrianacervantesl?igshid=OGQ5ZDc2ODk2ZA==">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="member-info text-center">
                <h4>Adriana</h4>
                <span>Chief Executive Officer</span>
                <p>
                  Soy Nanis, soy una persona súper multitask, estudié negocios,
                  trabajé en Marketing muchísimo tiempo y después emprendí. Me
                  encargo de todo el servicio al cliente dentro del market, soy
                  la comunicación con todos los expositores y me hace super
                  feliz. Me encanta ser testigo del crecimiento de las marcas
                  que han sido parte de Viva La Femme y verlas volar.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="member-img">
                <img
                  src="/assets/img/sitio_femme/team-webp/Chefita.webp"
                  className="img-fluid"
                  alt="Imagen Estefania"
                />
                <div className="social">
                  <a href="https://instagram.com/saltysoul.mx?igshid=OGQ5ZDc2ODk2ZA==">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://instagram.com/estefaniaraigosa.mx?igshid=OGQ5ZDc2ODk2ZA==">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="member-info text-center">
                <h4>Estefania</h4>
                <span>Chief Executive Officer</span>
                <p>
                  Hola, soy Estefanía, diseñadora de modas, emprendedora,
                  colimense de corazón y lo más importante amiga de este team
                  desde hace más de 15 años, me encanta ser parte de este
                  proyecto, conectando e impulsando a mujeres
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
