import "./VideoPage.scss";
import { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoInfo from "../VideoInfo/VideoInfo";
import NextVideos from "../NextVideos/NextVideos";
import CommentsSection from "../CommentsSection/CommentsSection";

import videos from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";


/**
 * A main content section for a viewing a video.
 * Video page includes {@link VideoPlayer}, {@link VideoInfo}, {@link CommentsSection}, and {@link NextVideos}.
 */
function VideoPage() {
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);
  const nextVideos = videos.filter((video) => video.id !== currentVideo.id);

  const selectVideo = (videoId) => {
    const video = videoDetails.find((video) => video.id === videoId);
    setCurrentVideo(video);
  };

  const postComment = (comment) => {
    
  };

  return (
    <main className="video-page">
      <VideoPlayer
        posterSrc={currentVideo.image}
        videoSrc={currentVideo.video}
      />
      <div className="bottom-section">
        <div className="bottom-section__content">
          <div className="bottom-section__container bottom-section__container--video-details">
            <VideoInfo
              title={currentVideo.title}
              channel={currentVideo.channel}
              description={currentVideo.description}
              views={currentVideo.views}
              likes={currentVideo.likes}
              timestamp={currentVideo.timestamp}
            />
            <CommentsSection comments={currentVideo.comments} onComment={postComment} />
          </div>
          <div className="bottom-section__container bottom-section__container--next-videos">
            <NextVideos videos={nextVideos} onSelect={selectVideo} />
          </div>
        </div>
      </div>
    </main>
  );
}
export default VideoPage;
