import './Avatar.scss';

/**
 * An icon for displaying a user's avatar.
 * @param {object} props 
 * @param {string} props.imageSrc - The source URL for the avatar.
 */
function Avatar({imageSrc}){
    return (
        <img className="avatar" 
            src={imageSrc} 
            alt="avatar"
        />
    );
}

export default Avatar;