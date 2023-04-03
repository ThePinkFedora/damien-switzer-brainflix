import './Avatar.scss';
import avatarImage from '../../assets/images/mohan-muruge.jpg';

const altText = "mohan-muruge";

function Avatar(){
    return (
        <img className="avatar" src={avatarImage} alt={altText}/>
    );
}

export default Avatar;