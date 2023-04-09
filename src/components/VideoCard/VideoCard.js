import "./VideoCard.scss";

/**
 * A card element which a display a suggested video.
 * @param {object} props
 * @param {string} props.title - The video title.
 * @param {string} props.channel - The video channel.
 * @param {string} props.image - The source url of the video thumbnail.
 * @param {() => {}} props.onClick - Callback for clicking the video.
 */
function VideoCard({ title, channel, image, onClick }) {
  return (
    <article className="video-card" onClick={onClick}>
      <img className="video-card__thumbnail" src={image} alt="thumbnail" />
      <div className="video-card__info">
        <h4 className="video-card__title">{title}</h4>
        <span className="video-card__channel">{channel}</span>
      </div>
    </article>
  );
}

export default VideoCard;
