import { useEffect, useRef } from "react";

const UpcomingEvents = () => {
  // Creamos una referencia al elemento de la sección "Upcoming Events"
  const upcomingEventsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Función para activar el efecto de dibujo propio en la sección de "Upcoming Events"
    function activateSelfDrawingBorder(
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("self-drawing-border"); // Agregamos la clase para el efecto de dibujo propio
          observer.unobserve(entry.target); // Dejamos de observar una vez que se activa el efecto
        }
      });
    }

    // Creamos una instancia del IntersectionObserver
    const upcomingEventsObserver = new IntersectionObserver(
      activateSelfDrawingBorder,
      { threshold: 0.5 }
    );

    // Observamos la sección de "Upcoming Events" para activar el efecto cuando esté visible en la pantalla
    if (upcomingEventsRef.current) {
      upcomingEventsObserver.observe(upcomingEventsRef.current);
    }

    // Limpiamos el observer cuando el componente se desmonte
    return () => {
      if (upcomingEventsRef.current) {
        upcomingEventsObserver.unobserve(upcomingEventsRef.current);
      }
    };
  }, []);

  return (
    <section
      id="upcoming-events"
      className="upcoming-events"
      data-aos="fade-up"
      ref={upcomingEventsRef}
    >
      <div className="wrapper-events">
        <h2 className="text-center">Próximos Eventos</h2>
        <div className="event-container">
          <div className="card-container">
            <div className="photo-container">
              <div className="date">
                <div className="day">9</div>
                <div className="month">MARZO</div>
              </div>
              <div className="image"></div>
            </div>
            <div className="info-container">
              <div className="event-name">Conecta Femme</div>
              <div className="event-location">Colima, col.</div>
            </div>
          </div>
          <div className="card-container">
            <div className="photo-container">
              <div className="date">
                <div className="day">19, 20, 21</div>
                <div className="month">ABRIL</div>
              </div>
              <div className="image"></div>
            </div>
            <div className="info-container">
              <div className="event-name">Viva Market 1.0</div>
              <div className="event-location">Colima, col.</div>
            </div>
          </div>
          <div className="card-container">
            <div className="photo-container">
              <div className="date">
                <div className="day">6, 7, 8</div>
                <div className="month">DICIEMBRE</div>
              </div>
              <div className="image"></div>
            </div>
            <div className="info-container">
              <div className="event-name">Viva Market 2.0</div>
              <div className="event-location">Colima, col.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
