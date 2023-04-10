import "./VideoPage.scss";
import { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import NextVideos from "../../components/NextVideos/NextVideos";
import CommentsSection from "../../components/CommentsSection/CommentsSection";

import videos from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import { useParams } from "react-router-dom";

/**
 * Main content section for a viewing a video.
 * Video page includes {@link VideoPlayer}, {@link VideoInfo}, {@link CommentsSection}, and {@link NextVideos}.
 */
function VideoPage() {
  const paramsObject = useParams();
  const initialVideo =
    videoDetails.find((video) => video.id === paramsObject.id) ??
    videoDetails[0];

  const [currentVideo, setCurrentVideo] = useState(initialVideo);
  const nextVideos = videos.filter((video) => video.id !== currentVideo.id);

  //Syncronize page title to include the title of the video.
  useEffect(() => {
    document.title = `BrainFlix: ${currentVideo.title}`;
  });

  /**
   * Sets the {@link currentVideo}.
   * @param {string} videoId - The id of the video to select.
   */
  const selectVideo = (videoId) => {
    const video = videoDetails.find((video) => video.id === videoId);
    setCurrentVideo(video);
  };

  /**
   * Posts a comment on the current video. (Not implemented)
   * @param {string} comment - The comment to be posted.
   */
  const postComment = (comment) => {};

  return (
    <main className="video-page">
      <VideoPlayer
        posterSrc={currentVideo.image}
        videoSrc={currentVideo.video}
      />
      <section className="bottom-section">
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
            <CommentsSection
              comments={currentVideo.comments}
              onComment={postComment}
            />
          </div>
          <div className="bottom-section__container bottom-section__container--next-videos">
            <NextVideos videos={nextVideos} onSelect={selectVideo} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default VideoPage;