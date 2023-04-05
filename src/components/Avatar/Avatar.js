import './Avatar.scss';
import avatarImage from '../../assets/images/mohan-muruge.jpg';

function Avatar(props){
    return (
        <img className="avatar" 
            src={(typeof props.imageSrc !== 'undefined') ? props.imageSrc : avatarImage} 
            alt="avatar"
        />
    );
}

export default Avatar;