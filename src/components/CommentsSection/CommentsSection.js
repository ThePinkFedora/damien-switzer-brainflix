import './CommentsSection.scss';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

/**
 * Section which displays a {@link CommentForm} and {@link CommentList}; allowing users to view and post comments.
 * @param {object} props
 * @param {object[]} props.comments - List of comments
 * @param {(comment: string) => {}} props.onComment - Callback for posting a comment
 * @returns 
 */
function CommentsSection({comments,onComment}){

    return (
        <section className="comments-section">
            <h4 className="comments-section__count">{comments.length} Comments</h4>
            <CommentForm onComment={onComment} />
            <CommentList comments={comments}/>
        </section>
    );
}

export default CommentsSection;
