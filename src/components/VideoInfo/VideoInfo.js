import "./VideoInfo.scss";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

function VideoInfo() {
  return (
    <section className="video-info">
      <h1 className="video-info__title">BMX Rampage: 2021 Highlights</h1>
      <div className="video-info__bottom-row">
        <div className="video-info__left">
          <span className="video-info__item video-info__item--left video-info__item--strong">By Red Crow</span>
          <div className="video-info__item video-info__item--left">07/11/2021</div>
        </div>
        <div className="video-info__right">
          <div className="video-info__item video-info__item--right">
            <img className="video-info__icon" src={viewsIcon} alt="views" />
            1,001,023
          </div>
          <div className="video-info__item video-info__item--right">
            <img className="video-info__icon" src={likesIcon} alt="likes" />
            110,985
          </div>
        </div>
      </div>
      <p className="video-info__description">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest
        moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that
        was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title
      </p>
    </section>
  );
}

export default VideoInfo;
