import './CommentList.scss';
import CommentCard from '../CommentCard/CommentCard';

function CommentList({comments}){
    return (
        <section className="comment-list">
            <ul className="comment-list__list">
                {comments.map(comment => <CommentCard key={comment.id} avatar={comment.avatar} name={comment.name} comment={comment.comment} timestamp={comment.timestamp}/>)}
            </ul>
        </section>
    );
}
export default CommentList;