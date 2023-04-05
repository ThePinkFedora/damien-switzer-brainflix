import './NextVideos.scss';
import VideoCard from '../VideoCard/VideoCard';

function NextVideos(props){

    const handleSelect = (videoId) => {
        props.onSelect(videoId);
    };

    return (
        <aside className="next-videos">
            <h3 className="next-videos__title">NEXT VIDEOS</h3>
            <ul className="next-videos__list">
                {props.videos.map(video => (
                    <VideoCard key={video.id} title={video.title} channel={video.channel} image={video.image} onClick={()=>handleSelect(video.id)} />
                ))}
            </ul>
        </aside>
    );
}

export default NextVideos;