import './CommentList.scss';
import CommentCard from '../CommentCard/CommentCard';

function CommentList(){
    const comments = [
        {
            id: 1,
            name: "Micheal Lyons",
            comment: "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
            timestamp: 1613538000000
        },
        {
            id: 2,
            name: "Gary Wong",
            comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            timestamp: 1610168400000
        },
        {
            id: 3,
            name: "Theodore Duncan",
            comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He s definitely my favorite ever!",
            timestamp: 1608440400000
        }
    ];

    return (
        <section className="comment-list">
            <ul className="comment-list__list">
                {comments.map(comment => <CommentCard key={comment.id} avatar={comment.avatar} name={comment.name} comment={comment.comment} timestamp={comment.timestamp}/>)}
            </ul>
        </section>
    );
}
export default CommentList;