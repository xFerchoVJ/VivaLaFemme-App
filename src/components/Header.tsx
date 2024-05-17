import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { navItems } from "../data/nav-items";

export const Header = () => {
  const headerRef = useRef<HTMLHeadingElement>(null); // Aseguramos que headerRef sea de tipo HTMLHeadingElement o null
  const location = useLocation();

  const scrollToTop = () => {
    const button = document.getElementById("button-toggle");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.body.classList.remove("mobile-nav-active");
    if (button) {
      button.classList.toggle("bi-list");
      button.classList.toggle("bi-x");
    }
  };

  const navToggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.currentTarget.classList.toggle("bi-list");
    e.currentTarget.classList.toggle("bi-x");
    document.body.classList.toggle("mobile-nav-active");
  };

  const changeNavbarColors = () => {
    const selectLogoWhite = document.querySelector<HTMLElement>("#white-logo");
    const selectLogoBlack = document.querySelector<HTMLElement>("#black-logo");
    const header = document.querySelector<HTMLHeadingElement>("#header");
    const toggleNav = document.querySelector<HTMLElement>(".mobile-nav-toggle");
    document.querySelector<HTMLElement>("body")?.classList.remove("index-page");
    if (selectLogoWhite && selectLogoBlack && header && toggleNav) {
      selectLogoBlack.style.display = "block";
      selectLogoWhite.style.display = "none";
      header.style.backgroundColor = "white";
      toggleNav.classList.add("black-navtoggle");
    }
  };
  useEffect(() => {
    if (location.pathname === "/") {
      const selectLogoWhite =
        document.querySelector<HTMLElement>("#white-logo");
      const selectLogoBlack =
        document.querySelector<HTMLElement>("#black-logo");
      const header = document.querySelector<HTMLHeadingElement>("#header");
      document.querySelector<HTMLElement>("body")?.classList.add("index-page");
      const toggleNav =
        document.querySelector<HTMLElement>(".mobile-nav-toggle");
      if (selectLogoWhite && selectLogoBlack && header && toggleNav) {
        selectLogoBlack.style.display = "none"; // Revertir la visibilidad del logo negro
        selectLogoWhite.style.display = "block"; // Restaurar la visibilidad del logo blanco
        header.style.backgroundColor = "#FFC2B2"; // Restaurar el color de fondo transparente
        toggleNav.classList.add("white-navtoggle");
        toggleNav.classList.remove("black-navtoggle");
      }
    } else {
      changeNavbarColors(); // Si el path no es "/", aplicar los cambios del navbar
    }
  }, [location.pathname]);

  useEffect(() => {
    const selectHeader = document.querySelector<HTMLElement>("#header");

    if (!selectHeader) return; // Aseguramos que selectHeader no sea null

    const toggleScrolled = () => {
      const headerClasses = selectHeader.classList;
      const isSticky =
        headerClasses.contains("scroll-up-sticky") ||
        headerClasses.contains("sticky-top") ||
        headerClasses.contains("fixed-top");
      const isScrollYGreaterThan100 = window.scrollY > 100;

      if (!isSticky) return;

      document.body.classList.toggle("scrolled", isScrollYGreaterThan100);

      const indexPage = document.querySelector(".index-page");

      if (indexPage) {
        const selectLogoWhite =
          document.querySelector<HTMLElement>("#white-logo");
        const selectLogoBlack =
          document.querySelector<HTMLElement>("#black-logo");
        const navbarButton = document.querySelector(".mobile-nav-toggle");

        if (!selectLogoWhite || !selectLogoBlack || !navbarButton) return;

        selectLogoWhite.style.display = isScrollYGreaterThan100
          ? "none"
          : "block";
        selectLogoBlack.style.display = isScrollYGreaterThan100
          ? "block"
          : "none";

        const buttonClasses = navbarButton.classList;
        buttonClasses.toggle("black-navtoggle", isScrollYGreaterThan100);
        buttonClasses.toggle("white-navtoggle", !isScrollYGreaterThan100);
        if (!isScrollYGreaterThan100) {
          selectHeader.style.backgroundColor = "#FFC2B2";
        } else {
          selectHeader.style.backgroundColor = "#FFF";
        }
      }
    };

    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    return () => {
      document.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("load", toggleScrolled);
    };
  }, []);

  useEffect(() => {
    // Scroll up sticky header to headers with .scroll-up-sticky class
    const selectHeader = headerRef.current;

    if (!selectHeader) return; // Aseguramos que selectHeader no sea null

    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      if (!selectHeader.classList.contains("scroll-up-sticky")) return;

      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > selectHeader.offsetHeight) {
        selectHeader.style.setProperty("position", "sticky", "important");
        selectHeader.style.top = `-${selectHeader.offsetHeight + 50}px`;
      } else if (scrollTop > selectHeader.offsetHeight) {
        selectHeader.style.setProperty("position", "sticky", "important");
        selectHeader.style.top = "0";
      } else {
        selectHeader.style.removeProperty("top");
        selectHeader.style.removeProperty("position");
      }
      lastScrollTop = scrollTop;
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [headerRef]);

  return (
    <header
      id="header"
      className={`header sticky-top d-flex align-items-center `}
      style={{
        height: 85,
      }}
      ref={headerRef}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <Link
          to="/"
          className="logo d-flex align-items-center me-auto me-xl-0"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img
            src="/assets/img/sitio_femme/webp-images/logo-blanco.webp"
            alt="Logo"
            className="img-fluid"
            id="white-logo"
            loading="lazy"
          />
          <img
            src="/assets/img/sitio_femme/webp-images/logoVivaLaFemmeBig.webp"
            alt="Logo"
            className="img-fluid"
            id="black-logo"
            loading="lazy"
          />
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  className={`${
                    location.pathname == item.path ? "active" : ""
                  }`}
                  to={item.path}
                  onClick={scrollToTop}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <i
            onClick={navToggle}
            className="mobile-nav-toggle d-xl-none bi bi-list"
            id="button-toggle"
          ></i>
        </nav>
      </div>
    </header>
  );
};
