import './CommentsSection.scss';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

function CommentsSection(){
    return (
        <section className="comments-section">
            <h4 className="comments-section__count">3 Comments</h4>
            <CommentForm />
            <CommentList />
        </section>
    );
}

export default CommentsSection;
