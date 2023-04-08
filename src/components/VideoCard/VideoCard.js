import './VideoCard.scss';

/**
 * 
 * @param {object} props 
 * @param {string} props.title
 * @param {string} props.channel
 * @param {string} props.image
 * @param {function} props.image
 * @returns 
 */
function VideoCard({title,channel,image,onClick}){
    const handleClick = () => {
        onClick();
    };

    return (
        <article className="video-card" onClick={handleClick}>
            <img className="video-card__thumbnail" src={image} alt="thumbnail"/>
            <div className="video-card__info">
                <h4 className="video-card__title">{title}</h4>
                <span className="video-card__channel">{channel}</span>
            </div>
        </article>
    );
}

export default VideoCard;