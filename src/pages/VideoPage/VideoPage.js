import "./VideoPage.scss";
import { useEffect, useState } from "react";
import { getVideos, getVideoDetails, putVideoLike } from "../../js/apiUtils";
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

  const [sideVideos, setSideVideos] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [error, setError] = useState(null);

  let videoId = videoIdParam ?? sideVideos?.[0].id;

  //When this component initializes: Retrieve sideVideos array
  useEffect(() => {
    getVideos()
      .then(setSideVideos)
      .catch((error) => {
        console.error(error);
        setError("Failed to load videos");
      });
  }, []);

  //Whenever videoId changes: Retrieve the video
  useEffect(() => {
    //Clear error state, and current video
    setError(null);
    setCurrentVideo(null);
    //If videoId is assigned, load the video
    if (videoId) {
      getVideoDetails(videoId)
        .then((video) => setCurrentVideo(video))
        .catch((error) => {
          console.error(error);
          setError("This video isn't available");
        });
    }
    //Scroll up to the top when the video changes
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [videoId]);

  document.title = `BrainFlix: ${currentVideo?.title ?? error ?? "Loading..."}`;

  /**
   * Handles reload after a comment has been posted.
   */
  const handleCommented = () =>
    getVideoDetails(videoId).then((video) => setCurrentVideo(video));

  /**
   * Sends a like request for the current video.
   */
  const handleLike = () => {
    putVideoLike(videoId).then((updatedVideo) => {
      setCurrentVideo(updatedVideo);
    });
  };

  return (
    <main className="video-page">
      {
        // If we have error or we're still loading, display the appropriate status message.
        error || !sideVideos ? (
          <div className="video-page__status-message">
            {error || "Loading..."}
          </div>
        ) : (
          <>
            <VideoPlayer
              posterSrc={currentVideo?.image}
              videoSrc={currentVideo?.video}
            />
            <section className="bottom-section">
              <div className="bottom-section__content">
                <div className="bottom-section__video-details-container">
                  <VideoInfo
                    title={currentVideo?.title}
                    channel={currentVideo?.channel}
                    description={currentVideo?.description}
                    views={currentVideo?.views}
                    likes={currentVideo?.likes}
                    timestamp={currentVideo?.timestamp}
                    onLike={handleLike}
                  />
                  {currentVideo !== null && (
                    <CommentsSection
                      comments={currentVideo.comments}
                      videoId={videoId}
                      onCommented={handleCommented}
                    />
                  )}
                </div>
                <div className="bottom-section__next-videos-container">
                  <NextVideos videos={sideVideos} currentId={videoId} />
                </div>
              </div>
            </section>
          </>
        )
      }
    </main>
  );
}

export default VideoPage;
