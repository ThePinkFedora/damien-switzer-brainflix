import './NextVideos.scss';
import VideoCard from '../VideoCard/VideoCard';
import videos from '../../data/videos.json';

function NextVideos(){

    return (
        <aside className="next-videos">
            <h3 className="next-videos__title">NEXT VIDEOS</h3>
            <ul className="next-videos__list">
                {videos.map(video => (
                    <VideoCard key={video.id} title={video.title} channel={video.channel} image={video.image} />
                ))}
            </ul>
        </aside>
    );
}

export default NextVideos;