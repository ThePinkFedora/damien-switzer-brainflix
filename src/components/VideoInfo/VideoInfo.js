import "./VideoInfo.scss";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";
import TimestampLabel from "../TimestampLabel/TimestampLabel";

/**
 * Section which display information related to the current video.
 * @param {object} props
 * @param {string} [props.title] - The video title.
 * @param {string} [props.channel] - The channel of the video.
 * @param {string} [props.description] - The video description.
 * @param {number|string} [props.views] - The number of views.
 * @param {number|string} [props.likes] - The number of likes.
 * @param {number} [props.timestamp] - The date posted (in millis).
 * @param {()=>{}} [props.onLike] - Callback for liking the video.
 *
 */
function VideoInfo({
  title,
  channel,
  description,
  views,
  likes,
  timestamp,
  onLike,
}) {
  title ??= "Loading...";
  channel ??= "Loading...";
  description ??= "Loading...";
  views ??= 0;
  likes ??= 0;

  return (
    <section className="video-info">
      <h1 className="video-info__title">{title}</h1>
      <div className="video-info__bottom-row">
        <div className="video-info__container video-info__container--left">
          <span className="video-info__item video-info__item--left video-info__item--strong">
            By {channel}
          </span>
          <div className="video-info__item video-info__item--left video-info__item--soft">
            {timestamp && <TimestampLabel timestamp={timestamp} />}
          </div>
        </div>
        <div className="video-info__container video-info__container--right">
          <div className="video-info__item video-info__item--right video-info__item--soft">
            <img className="video-info__icon" src={viewsIcon} alt="views" />
            {views}
          </div>
          <button
            className="video-info__item video-info__item--right video-info__item--soft video-info__item--button"
            onClick={onLike}
          >
            <img className="video-info__icon" src={likesIcon} alt="likes" />
            {likes}
          </button>
        </div>
      </div>
      <p className="video-info__description">{description}</p>
    </section>
  );
}

export default VideoInfo;
