import './VideoCard.scss';

function VideoCard(props){
    return (
        <article className="video-card">
            <img className="video-card__thumbnail" src={props.image} alt="thumbnail"/>
            <div className="video-card__info">
                <h4 className="video-card__title">{props.title}</h4>
                <span className="video-card__channel">{props.channel}</span>
            </div>
        </article>
    );
}

export default VideoCard;