import { useEffect } from "react";
import { navItems } from "../data/nav-items";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    document
      .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
      .forEach((faqItem) => {
        faqItem.addEventListener("click", () => {
          const parentNode = faqItem.parentNode as HTMLElement | null;
          if (faqItem && parentNode) {
            parentNode.classList.toggle("faq-active");
          }
        });
      });

    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    const popoverList = [...popoverTriggerList].map(
      (popoverTriggerEl) =>
        new (window as any).bootstrap.Popover(popoverTriggerEl)
    );

    // When one popover is already open close others
    document.addEventListener("show.bs.popover", function (event) {
      popoverList.forEach((popover) => {
        if (popover._element !== event.target) {
          popover.hide();
        }
      });
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-3 my-4">
      <ul
        className="nav justify-content-center pb-3 mb-3"
        style={{ borderBottom: "1px solid #ffc2b2" }}
      >
        {navItems.map((item, idx) => (
          <li className="nav-item" key={idx}>
            <Link
              className="nav-link px-2 text-muted"
              to={item.path}
              onClick={scrollToTop}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="text-center fs-1 text-muted">Viva la Femme</h2>
      <p className="text-center text-muted">Más Fuertes Juntas</p>
      <div className="social-links d-flex mt-4 gap-4">
        <a
          href="https://www.facebook.com/VIVALAFEMMECOLIMA"
          target="_blank"
          className="fs-2"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/vivalafemmecolima/"
          target="_blank"
          className="fs-2"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <button
          type="button"
          className="fs-2 m-0 p-0"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-placement="top"
          data-bs-content="+52 312 110 0697"
        >
          <i className="bi bi-telephone icon-custom"></i>
        </button>
        <button
          type="button"
          className="fs-2 m-0 p-0"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-placement="top"
          data-bs-content="lafemmecolima@hotmail.com"
        >
          <i className="bi bi-envelope icon-custom"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
