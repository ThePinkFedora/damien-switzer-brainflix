import './VideoPlayer.scss';
function VideoPlayer(){
    return (
        <div className="video-player">
            <video className="video-player__video" controls>
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm"/>
            Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;