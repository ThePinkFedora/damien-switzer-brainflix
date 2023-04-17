import { Link } from "react-router-dom";
import "./VideoCard.scss";

/**
 * A card element which a display a suggested video.
 * @param {object} props
 * @param {string} props.id - The video id.
 * @param {string} props.title - The video title.
 * @param {string} props.channel - The video channel.
 * @param {string} props.image - The source url of the video thumbnail.
 */
function VideoCard({ id, title, channel, image }) {
  return (
    <Link to={`/${id}`}>
      <article className="video-card">
        <img className="video-card__thumbnail" src={image} alt="thumbnail" />
        <div className="video-card__info">
          <h4 className="video-card__title">{title}</h4>
          <span className="video-card__channel">{channel}</span>
        </div>
      </article>
    </Link>
  );
}

export default VideoCard;
