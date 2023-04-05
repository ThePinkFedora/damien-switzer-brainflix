import Avatar from '../Avatar/Avatar';
import './CommentCard.scss';

function CommentCard(props){
    return (
        <article className="comment-card">
            <div className="comment-card__avatar-wrapper">
                <Avatar imageSrc="" />
            </div>
            <div class="comment-card__content">
                <h4 class="comment-card__name">{props.name}</h4>
                <span class="comment-card__timestamp">3 years ago</span>
                <p class="comment-card__text">{props.comment}</p>
            </div>
        </article>
    );
}
export default CommentCard;