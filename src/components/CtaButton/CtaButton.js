import './CtaButton.scss';

/**
 * 
 * @param {object} prop
 * @param {string} props.text - The button text
 * @param {string} props.iconSrc - The icon source url
 * @param {string} props.iconAlt - The icon alt text 
 * @returns 
 */
function CtaButton(props){
    return (
        <button className="cta-button">
            <img className="cta-button__icon" src={props.iconSrc} alt={props.iconAlt}/>
            {props.text}
        </button>
    );
}

export default CtaButton; 