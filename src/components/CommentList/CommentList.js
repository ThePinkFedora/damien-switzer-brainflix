import './CommentList.scss';
import CommentCard from '../CommentCard/CommentCard';

/**
 * A section which displays a list of comments as @see {@link CommentCard}s.
 * @param {object} props 
 * @param {object[]} props.comments - The list of comments to display.
 */
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