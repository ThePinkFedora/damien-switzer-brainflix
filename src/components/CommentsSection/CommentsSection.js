import './CommentsSection.scss';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

/**
 * 
 * @param {object} props
 * @param {Array} props.comments
 * @param {function} props.onComment
 * @returns 
 */
function CommentsSection({comments,onComment}){
    const addComment = (name,comment) => {
        const commentObject = {
            name: name,
            comment: comment
        };
        onComment(commentObject);
    };

    return (
        <section className="comments-section">
            <h4 className="comments-section__count">3 Comments</h4>
            <CommentForm onComment={addComment} />
            <CommentList comments={comments}/>
        </section>
    );
}

export default CommentsSection;
