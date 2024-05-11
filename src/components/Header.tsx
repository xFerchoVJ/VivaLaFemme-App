import React, { useEffect } from "react";

export const Header = () => {
  const navToggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.currentTarget.classList.toggle("bi-list");
    e.currentTarget.classList.toggle("bi-x");
    document.body.classList.toggle("mobile-nav-active");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const body = document.body;
      if (scrollPosition > 100) {
        body.classList.add("scrolled");
      } else {
        body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className="header sticky-top d-flex align-items-center"
      style={{ height: 85 }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <a
          href="index.html"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          <img
            src="assets/img/sitio_femme/webp-images/logoVivaLaFemmeBig.webp"
            alt="Logo"
            className="img-fluid"
            id="black-logo"
          />
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="index.html#hero">Inicio</a>
            </li>
            <li>
              <a href="nosotros.html">Nosotros</a>
            </li>
            <li>
              <a href="comunidad.html">Comunidad</a>
            </li>
            <li>
              <a href="viva-market.html">Viva Market</a>
            </li>
            <li>
              <a href="membresia.html">Membresía</a>
            </li>
            <li>
              <a href="gallery.html">Galería</a>
            </li>
            <li>
              <a href="marcas.html" className="active">
                Marcas
              </a>
            </li>
          </ul>

          <i
            onClick={navToggle}
            className="mobile-nav-toggle d-xl-none bi bi-list"
          ></i>
        </nav>
      </div>
    </header>
  );
};
