import "./VideoPage.scss";
import { useState } from "react";
import {simulatePostComment} from '../../js/utils';
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoInfo from "../VideoInfo/VideoInfo";
import NextVideos from "../NextVideos/NextVideos";
import CommentsSection from "../CommentsSection/CommentsSection";

import videos from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";

function VideoPage() {
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);
  const nextVideos = videos.filter((video) => video.id !== currentVideo.id);

  const selectVideo = (videoId) => {
    const video = videoDetails.find((video) => video.id === videoId);
    setCurrentVideo(video);
  };

  const postComment = (comment) => {
    simulatePostComment(comment,currentVideo.id)
        .then(response => setCurrentVideo(response.data))
  };

  return (
    <main className="video-page">
      <VideoPlayer
        posterSrc={currentVideo.image}
        videoSrc={currentVideo.video}
      />
      <div className="bottom-section">
        <div className="bottom-section__content">
          <div className="bottom-section__sub-container">
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
          <div className="bottom-section__sub-container">
            <NextVideos videos={nextVideos} onSelect={selectVideo} />
          </div>
        </div>
      </div>
    </main>
  );
}
export default VideoPage;
