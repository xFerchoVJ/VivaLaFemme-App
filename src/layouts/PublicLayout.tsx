import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";
import Footer from "../components/Footer";

const PublicLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <div className="b-example-divider"></div>
      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default PublicLayout;
