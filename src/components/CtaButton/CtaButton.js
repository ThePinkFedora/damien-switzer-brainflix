import { Link } from "react-router-dom";
import "./CtaButton.scss";

/**
 * A call-to-action button with assignable text and icon.
 * @param {object} props
 * @param {string} props.text - The button text.
 * @param {string} props.iconSrc - The icon source url.
 * @param {string} props.iconAlt - The icon alt text.
 * @param {string} [props.href] - The href if this is a {@link Link} button
 * @param {()=>{}} [props.onClick] - Callback invoke when the button is clicked
 * @param {string} [props.ctaStyle="primary"] - The style type of the button. "primary" or "secondary"
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 */
function CtaButton({
  text,
  iconSrc,
  iconAlt,
  href,
  onClick,
  ctaStyle: style = "primary",
  disabled = false,
}) {
  //The inner content of the button
  const content = (
    <>
      {iconSrc && (
        <img className="cta-button__icon" src={iconSrc} alt={iconAlt} />
      )}
      {text}
    </>
  );

  const className = `cta-button ${
    style === "primary" ? "cta-button--primary" : "cta-button--secondary"
  }`;

  return href ? (
    <Link to={href} className={className}>
      {content}
    </Link>
  ) : (
    <button
      className={className}
      type={onClick ? "button" : "default"}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default CtaButton;
