import './VideoPlayer.scss';

function VideoPlayer(){
    return (
        <div className="video-player">
            <video className="video-player__video" poster="https://i.imgur.com/l2Xfgpl.jpg" controls>
            <source type="video/webm"/>
            Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;