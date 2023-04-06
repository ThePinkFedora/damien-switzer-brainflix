import './CommentCard.scss';
import {createDateString} from '../../js/utils';
import Avatar from '../Avatar/Avatar';



function CommentCard({name,comment,timestamp}){
    return (
        <article className="comment-card">
            <div className="comment-card__avatar-wrapper">
                <Avatar imageSrc="" />
            </div>
            <div className="comment-card__content">
                <h4 className="comment-card__name">{name}</h4>
                <span className="comment-card__timestamp">{createDateString(timestamp)}</span>
                <p className="comment-card__text">{comment}</p>
            </div>
        </article>
    );
}
export default CommentCard;