import "./VideoInfo.scss";
import { createDateString } from "../../js/utils";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

/**
 * 
 * @param {object} props 
 * @param {string} props.title
 * @param {string} props.channel
 * @param {string} props.description
 * @param {number} props.views
 * @param {number} props.likes
 * @param {number} props.timestamp
 * 
 * @returns 
 */
function VideoInfo({title, channel, description, views, likes, timestamp}) {
  return (
    <section className="video-info">
      <h1 className="video-info__title">{title}</h1>
      <div className="video-info__bottom-row">
        <div className="video-info__left">
          <span className="video-info__item video-info__item--left video-info__item--strong">By {channel}</span>
          <div className="video-info__item video-info__item--left">{createDateString(timestamp)}</div>
        </div>
        <div className="video-info__right">
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
      <p className="video-info__description">
        {description}
      </p>
    </section>
  );
}

export default VideoInfo;
