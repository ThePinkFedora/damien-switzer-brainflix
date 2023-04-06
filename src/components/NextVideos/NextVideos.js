import './NextVideos.scss';
import VideoCard from '../VideoCard/VideoCard';

/**
 * 
 * @param {object} props
 * @param {Array} props.videos
 * @param {function} props.onSelect
 * @returns 
 */
function NextVideos({videos,onSelect}){

    const handleSelect = (videoId) => {
        onSelect(videoId);
    };

    return (
        <aside className="next-videos">
            <h3 className="next-videos__title">NEXT VIDEOS</h3>
            <ul className="next-videos__list">
                {videos.map(video => (
                    <VideoCard key={video.id} title={video.title} channel={video.channel} image={video.image} onClick={()=>handleSelect(video.id)} />
                ))}
            </ul>
        </aside>
    );
}

export default NextVideos;