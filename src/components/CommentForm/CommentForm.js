import "./CommentForm.scss";
import {getUserAvatar} from '../../js/utils';
import CtaButton from "../CtaButton/CtaButton";
import Avatar from "../Avatar/Avatar";
import commentIcon from "../../assets/images/add-comment.svg";

/**
 * Form for posting new comments.
 * @param {object} props
 * @param {(comment: string) => {}} props.onComment - The callback for posting a comment.
 * @returns 
 */
function CommentForm({onComment}) {

  const handleSubmit = (event) => {
    event.preventDefault();

    const comment = event.target.comment.value;

    if(comment.length === 0){
      event.target.comment.classList.add("comment-form__commentbox--invalid");
      return;
    }

    event.target.comment.classList.remove("comment-form__commentbox--invalid");
    
    onComment(comment);

    event.target.reset();
  };

  return (
    <div className="comment-form">
      <div className="comment-form__container comment-form__container--avatar">
        <Avatar imageSrc={getUserAvatar()} />
      </div>
      <form className="comment-form__form" onSubmit={handleSubmit}>
        <div className="comment-form__container comment-form__container--commentbox">
          <label className="comment-form__label" htmlFor="comment">
            JOIN THE CONVERSATION
          </label>
          <textarea name="comment" className="comment-form__commentbox" placeholder="Add a new comment"></textarea>
        </div>
        <div className="comment-form__container comment-form__container--submit">
        <CtaButton text="COMMENT" iconSrc={commentIcon} iconAlt="comment" />
        </div>
      </form>
    </div>
  );
}
export default CommentForm;
