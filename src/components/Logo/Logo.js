import "./Logo.scss";
import playIcon from "../../assets/images/play.svg";

/**
 * BrainFlix logo component.
 */
function Logo() {
  return (
    <a href="./" className="logo">
      <div className="logo__icon-container">
        <img className="logo__icon" src={playIcon} alt="play" />
      </div>
      <h1 className="logo__title">BrainFlix</h1>
    </a>
  );
}

export default Logo;
