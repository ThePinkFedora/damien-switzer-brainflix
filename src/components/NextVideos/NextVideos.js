import "./NextVideos.scss";
import VideoCard from "../VideoCard/VideoCard";
/**
 * An aside section which displays a list of videos as {@link VideoCard} components.
 * @param {object} props
 * @param {object[]} props.videos - The list of videos to display.
 * @param {object[]} props.currentId - The id of the active video.
 */
function NextVideos({ videos, currentId }) {
  const nextVideos = videos.filter((video) => video.id !== currentId); //Filter the current video from the list.

  return (
    <aside className="next-videos">
      <h2 className="next-videos__title">NEXT VIDEOS</h2>
      <ul className="next-videos__list">
        {nextVideos.map((video) => (
          <li key={video.id}>
            <VideoCard
              id={video.id}
              title={video.title}
              channel={video.channel}
              image={video.image}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default NextVideos;
