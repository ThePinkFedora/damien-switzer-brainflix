import "./CommentForm.scss";
import CtaButton from "../CtaButton/CtaButton";
import Avatar from "../Avatar/Avatar";
import commentIcon from "../../assets/images/add-comment.svg";

function CommentForm() {
  return (
    <div className="comment-form">
      <div className="comment-form__avatar-wrapper">
        <Avatar />
      </div>
      <form className="comment-form__form">
        <div className="comment-form__item comment-form__item--comment">
          <label class="comment-form__label" for="comment">
            JOIN THE CONVERSATION
          </label>
          <textarea class="comment-form__textarea" placeholder="Add a new comment"></textarea>
        </div>
        <div className="comment-form__item comment-form__item--submit">
        <CtaButton text="COMMENT" iconSrc={commentIcon} iconAlt="comment" />
        </div>
      </form>
    </div>
  );
}
export default CommentForm;
