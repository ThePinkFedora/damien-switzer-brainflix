import "./CtaButton.scss";

/**
 * A call-to-action button with assignable text and icon.
 * @param {object} prop
 * @param {string} props.text - The button text.
 * @param {string} props.iconSrc - The icon source url.
 * @param {string} props.iconAlt - The icon alt text.
 * @returns
 */
function CtaButton({ text, iconSrc, iconAlt }) {
  return (
    <button className="cta-button">
      <img className="cta-button__icon" src={iconSrc} alt={iconAlt} />
      {text}
    </button>
  );
}

export default CtaButton;
