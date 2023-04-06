import './VideoPlayer.scss';

/**
 * 
 * @param {object} props 
 * @param {string} props.videoSrc
 * @param {string} props.posterSrc
 */
function VideoPlayer(props){

    //We will leave this empty until the endpoint is ready
    const videoSource = "";//props.videoSrc;

    return (
        <div className="video-player">
            <video className="video-player__video" src={videoSource} poster={props.posterSrc} controls>
            <source type="video/webm"/>
            Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;