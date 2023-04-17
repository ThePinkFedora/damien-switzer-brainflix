import { useLocation } from "react-router-dom";
import "./NotFound.scss";
import CtaButton from "../../components/CtaButton/CtaButton";

/**
 * Main content section for a 404 page.
 */
function NotFound() {
  const location = useLocation();

  return (
    <main className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">4😲4</h1>
        <h2 className="not-found__subtitle">That's an error.</h2>
        <p className="not-found__text">
          The requested URL {location.pathname} was not found on this server.
        </p>
        <div className="not-found__home-button-container">
          <CtaButton text="TAKE ME HOME" href="/" />
        </div>
      </div>
    </main>
  );
}
export default NotFound;
