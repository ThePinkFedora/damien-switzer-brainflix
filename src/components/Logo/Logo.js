import './Logo.scss';
import icon from '../../assets/images/play.svg';

function Logo(){
    return (
        <div className="logo">
            <div className="logo__icon-container">
                <img className="logo__icon" src={icon} alt="play"/>
            </div>
            <h1 className="logo__title">
                BrainFlix
            </h1>
        </div>
    );
}

export default Logo;