import CountUp from "react-countup";

const Stats = () => {
  return (
    <section id="stats" className="stats">
      <img
        src="assets/img/sitio_femme/webp-images/Cifras.webp"
        alt=""
        data-aos="fade-in"
      />

      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row gy-4 d-flex align-items-center justify-content-center">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <p
                className="d-flex align-items-center justify-content-center text-white"
                style={{ fontSize: 50 }}
              >
                +<CountUp end={20} delay={2} duration={4} />
              </p>
              <p>Markets</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <p
                className="d-flex align-items-center justify-content-center text-white"
                style={{ fontSize: 50 }}
              >
                +<CountUp end={14000} delay={2} duration={4} />
              </p>
              <p>Mujeres</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <p
                className="d-flex align-items-center justify-content-center text-white"
                style={{ fontSize: 50 }}
              >
                +
                <CountUp end={500} delay={2} duration={4}/>
              </p>
              <p>Marcas Locales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
