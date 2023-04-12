import { useLocation } from "react-router-dom";
import "./NotFound.scss";
import CtaButton from "../../components/CtaButton/CtaButton";

function NotFound() {
  const location = useLocation();

  return (
    <section className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">4😲4</h1>
        <h2 className="not-found__subtitle">That's an error.</h2>
        <p className="not-found__text">
          The requested URL {location.pathname} was not found on this server.
        </p>
        <div className="not-found__container not-found__container--home-button">
          <CtaButton text="TAKE ME HOME" href="/" />
        </div>
      </div>
    </section>
  );
}
export default NotFound;
