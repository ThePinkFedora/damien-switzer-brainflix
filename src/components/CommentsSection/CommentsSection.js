import './CommentsSection.scss';
import CommentForm from '../CommentForm/CommentForm';

function CommentsSection(){
    return (
        <section className="comments-section">
            <h4 className="comments-section__count">3 Comments</h4>
            <CommentForm />
        </section>
    );
}

export default CommentsSection;
