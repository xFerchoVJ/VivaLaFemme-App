import GLightbox from "glightbox";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  useEffect(() => {
    const glightbox = GLightbox({
      selector: ".glightbox",
    });
    console.log(`Glightbox initialized! ${glightbox.version()}`);
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container section-title" data-aos="fade-up">
        <h2>Galería</h2>
      </div>

      <div className="container">
        <div className="isotope-layout">
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-4 col-md-6 portfolio-item">
              <a
                href="assets\img\sitio_femme\gallery-webp\1.webp"
                data-gallery="portfolio-gallery-app"
                className="glightbox preview-link"
              >
                <div className="image-container">
                  <img
                    src="assets\img\sitio_femme\gallery-webp\1.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="overlay"></div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item">
              <a
                href="assets\img\sitio_femme\gallery-webp\10.webp"
                data-gallery="portfolio-gallery-app"
                className="glightbox preview-link"
              >
                <div className="image-container">
                  <img
                    src="assets\img\sitio_femme\gallery-webp\10.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="overlay"></div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item">
              <a
                href="assets\img\sitio_femme\gallery-webp\11.webp"
                data-gallery="portfolio-gallery-app"
                className="glightbox preview-link"
              >
                <div className="image-container">
                  <img
                    src="assets\img\sitio_femme\gallery-webp\11.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="overlay"></div>
                </div>
              </a>
            </div>
          </div>
          <Link
            to="/galeria"
            className="show-more-gallery"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Ver Más{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
