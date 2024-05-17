import GLightbox from "glightbox";
import { useEffect } from "react";

import { data } from "../../data/galleryData";

const GalleryPage: React.FC = () => {
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
            {data.map((img, idx) => (
              <div className="col-lg-4 col-md-6 portfolio-item" key={idx + 1}>
                <a
                  href={img}
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                >
                  <div className="image-container">
                    <img src={img} className="img-fluid" alt="" />
                    <div className="overlay"></div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
