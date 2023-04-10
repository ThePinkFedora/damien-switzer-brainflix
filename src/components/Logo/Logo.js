import "./Logo.scss";
import playIcon from "../../assets/images/play.svg";
import { Link } from "react-router-dom";

/**
 * BrainFlix logo component.
 */
function Logo() {
  return (
    <Link to="/" className="logo">
      <div className="logo__icon-container">
        <img className="logo__icon" src={playIcon} alt="play" />
      </div>
      <h1 className="logo__title">BrainFlix</h1>
    </Link>
  );
}

export default Logo;
