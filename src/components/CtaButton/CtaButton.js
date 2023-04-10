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
function CtaButton({ text, iconSrc, iconAlt, href }) {
  const content = (
    <>
      <img className="cta-button__icon" src={iconSrc} alt={iconAlt} />
      {text}
    </>
  );

  return href ? (
    <Link to={href} className="cta-button">
      {content}
    </Link>
  ) : (
    <button className="cta-button">{content}</button>
  );
}

export default CtaButton;
