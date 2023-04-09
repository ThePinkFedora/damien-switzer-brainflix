import "./CommentCard.scss";
import Avatar from "../Avatar/Avatar";
import TimestampLabel from "../Timestamp/TimestampLabel";

/**
 * A card element which displays a comment.
 * @param {object} props
 * @param {string} props.name - The name of the commenter.
 * @param {string} props.comment - The content of the comment.
 * @param {number} props.timestamp - The timestamp of the comment (in millis).
 */
function CommentCard({ name, comment, timestamp }) {
  return (
    <article className="comment-card">
      <div className="comment-card__container comment-card__container--avatar">
        <Avatar imageSrc="" />
      </div>
      <div className="comment-card__content">
        <h4 className="comment-card__name">{name}</h4>
        <TimestampLabel timestamp={timestamp} />
        <p className="comment-card__text">{comment}</p>
      </div>
    </article>
  );
}

export default CommentCard;
