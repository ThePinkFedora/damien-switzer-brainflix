import Avatar from '../Avatar/Avatar';
import './CommentCard.scss';

function CommentCard(props){
    return (
        <article className="comment-card">
            <div className="comment-card__avatar-wrapper">
                <Avatar imageSrc="" />
            </div>
            <div className="comment-card__content">
                <h4 className="comment-card__name">{props.name}</h4>
                <span className="comment-card__timestamp">3 years ago</span>
                <p className="comment-card__text">{props.comment}</p>
            </div>
        </article>
    );
}
export default CommentCard;