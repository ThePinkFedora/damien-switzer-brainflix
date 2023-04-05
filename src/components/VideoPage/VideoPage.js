import './VideoPage.scss';
import {useState} from 'react';
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoInfo from "../VideoInfo/VideoInfo";
import NextVideos from "../NextVideos/NextVideos";
import CommentsSection from "../CommentsSection/CommentsSection";

import videos from '../../data/videos.json';
import videoDetails from '../../data/video-details.json';


function VideoPage(){

    const [currentVideo, setCurrentVideo] = useState(videoDetails);
    const nextVideos = videos.filter(video => video.id !== currentVideo.id);

    const selectVideo = (videoId) => {
        const video = videos.find(video => video.id === videoId);
        setCurrentVideo(video);
    };

    return (
        <main className="video-page">
            <VideoPlayer />
            <div className="bottom-section">
                <div className="bottom-section__content">
                <div className="bottom-section__sub-container">
                    <VideoInfo />
                    <CommentsSection />
                </div>
                <div className="bottom-section__sub-container">
                    <NextVideos videos={nextVideos} onSelect={selectVideo}/>
                </div>
                </div>
            </div>
        </main>
    );
}
export default VideoPage;