import './CommentCard.scss';
import {createDateString,createRelativeTimeString} from '../../js/utils';
import Avatar from '../Avatar/Avatar';



function CommentCard({name,comment,timestamp}){
    return (
        <article className="comment-card">
            <div className="comment-card__container comment-card__container--avatar">
                <Avatar imageSrc="" />
            </div>
            <div className="comment-card__content">
                <h4 className="comment-card__name">{name}</h4>
                <span className="comment-card__timestamp">{createRelativeTimeString(timestamp)}</span>
                <p className="comment-card__text">{comment}</p>
            </div>
        </article>
    );
}
export default CommentCard;