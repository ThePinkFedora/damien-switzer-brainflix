import './CtaButton.scss';

function CtaButton({text="TEXT",iconSrc="",iconAlt=""}){
    return (
        <button className="cta-button">
            <img className="cta-button__icon" src={iconSrc} alt={iconAlt}/>
            {text}
        </button>
    );
}

export default CtaButton;