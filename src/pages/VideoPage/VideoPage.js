import "./VideoPage.scss";
import { useEffect, useState } from "react";
import { getVideos, getVideoDetails } from "../../js/videoApi";
import { useParams } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import NextVideos from "../../components/NextVideos/NextVideos";
import CommentsSection from "../../components/CommentsSection/CommentsSection";

/**
 * Main content section for a viewing a video.
 * Video page includes {@link VideoPlayer}, {@link VideoInfo}, {@link CommentsSection}, and {@link NextVideos}.
 */
function VideoPage() {
  const { id: videoIdParam } = useParams();

  const [sideVideos, setSideVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState();

  let videoId =
    videoIdParam ?? (sideVideos.length > 0 ? sideVideos[0].id : null);

  //When this component initializes: Retrieve sideVideos array
  useEffect(() => {
    console.log("Retrieve side videos effect");
    getVideos().then(setSideVideos);
  }, []);

  //Whenever videoId changes: Retrieve the video
  useEffect(() => {
    console.log("Retrieve current video effect");
    //Clear any current video
    setCurrentVideo();
    //If videoId is assigned, load the video
    if (videoId) {
      getVideoDetails(videoId).then((video) => setCurrentVideo(video));
    }
  }, [videoId]);

  //Whenever currentVideo changes: Syncronize page title to include the title of the video.
  useEffect(() => {
    console.log("update title effect");
    document.title = `BrainFlix: ${currentVideo?.title ?? "Loading"}`;
  }, [currentVideo]);

  /**
   * Posts a comment on the current video. (Not implemented)
   * @param {string} comment - The comment to be posted.
   */
  const postComment = (comment) => {};

  return (
    <main className="video-page">
      <VideoPlayer
        video={currentVideo}
        // posterSrc={currentVideo.image}
        // videoSrc={currentVideo.video}
      />
      <section className="bottom-section">
        <div className="bottom-section__content">
          <div className="bottom-section__container bottom-section__container--video-details">
            <VideoInfo
              video={currentVideo}
              // title={currentVideo.title}
              // channel={currentVideo.channel}
              // description={currentVideo.description}
              // views={currentVideo.views}
              // likes={currentVideo.likes}
              // timestamp={currentVideo.timestamp}
            />
            <CommentsSection
              comments={currentVideo?.comments ?? []}
              onComment={postComment}
            />
          </div>
          <div className="bottom-section__container bottom-section__container--next-videos">
            <NextVideos videos={sideVideos} currentId={videoId} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default VideoPage;
