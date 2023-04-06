import './Avatar.scss';
import avatarImage from '../../assets/images/mohan-muruge.jpg';

function Avatar({imageSrc}){
    return (
        <img className="avatar" 
            src={(typeof imageSrc !== 'undefined') ? imageSrc : avatarImage} 
            alt="avatar"
        />
    );
}

export default Avatar;