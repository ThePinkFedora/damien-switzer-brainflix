import { Link } from "react-router-dom";
import "./CtaButton.scss";

/**
 * A call-to-action button with assignable text and icon.
 * @param {object} prop
 * @param {string} props.text - The button text.
 * @param {string} props.iconSrc - The icon source url.
 * @param {string} props.iconAlt - The icon alt text.
 * @param {string} [props.href] - The href if this is a {@link Link} button
 * @returns
 */
function CtaButton({ text, iconSrc, iconAlt, href, style = "primary" }) {
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
    <button className={className}>{content}</button>
  );
}

export default CtaButton;
