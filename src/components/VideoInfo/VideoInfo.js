import "./VideoInfo.scss";
import { createDateString } from "../../js/utils";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";
import TimestampLabel from "../Timestamp/TimestampLabel";

/**
 * Section which display information related to the current video.
 * @param {object} props
 * @param {string} props.title - The video title.
 * @param {string} props.channel - The channel of the video.
 * @param {string} props.description - The video description.
 * @param {number} props.views - The number of views.
 * @param {number} props.likes - The number of likes.
 * @param {number} props.timestamp - The date posted (in millis).
 */
function VideoInfo({ title, channel, description, views, likes, timestamp }) {
  return (
    <section className="video-info">
      <h1 className="video-info__title">{title}</h1>
      <div className="video-info__bottom-row">
        <div className="video-info__container video-info__container--left">
          <a className="video-info__item video-info__item--left video-info__item--strong" href="">
            By {channel}
          </a>
          <div className="video-info__item video-info__item--left">
            <TimestampLabel timestamp={timestamp} />
          </div>
        </div>
        <div className="video-info__container video-info__container--right">
          <div className="video-info__item video-info__item--right">
            <img className="video-info__icon" src={viewsIcon} alt="views" />
            {views}
          </div>
          <div className="video-info__item video-info__item--right">
            <img className="video-info__icon" src={likesIcon} alt="likes" />
            {likes}
          </div>
        </div>
      </div>
      <p className="video-info__description">{description}</p>
    </section>
  );
}

export default VideoInfo;
