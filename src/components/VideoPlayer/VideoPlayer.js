import "./VideoPlayer.scss";

/**
 * Section which display the current video.
 * @param {object} props
 * @param {string} props.videoSrc - The source url of the video.
 * @param {string} props.posterSrc - The source url of the poster image.
 */
function VideoPlayer({ video }) {
  //We will leave this empty until the endpoint is ready
  const videoSource = ""; //videoSrc;
  const posterSrc = video?.image;

  return (
    <section className="video-player">
      <video
        className="video-player__video"
        src={videoSource}
        poster={posterSrc}
        controls
      >
        <source type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default VideoPlayer;
