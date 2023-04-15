import "./CommentForm.scss";
import { getUserAvatar } from "../../js/utils";
import CtaButton from "../CtaButton/CtaButton";
import Avatar from "../Avatar/Avatar";
import commentIcon from "../../assets/images/add-comment.svg";

/**
 * Form posting new comments.
 * @param {object} props
 * @param {(comment: string) => {}} props.onComment - The callback for posting a comment.
 */
function CommentForm({ onComment }) {
  /**
   * @param {SubmitEvent} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;

    // If the comment field is empty, mark the field invalid and return.
    if (comment.length === 0) {
      event.target.comment.classList.add("comment-form__commentbox--invalid");
      return;
    }

    // Remove invalid state from the comment field
    event.target.comment.classList.remove("comment-form__commentbox--invalid");
    onComment(comment);
    event.target.reset();
  };

  return (
    <div className="comment-form">
      <div className="comment-form__avatar-container">
        <Avatar imageSrc={getUserAvatar()} />
      </div>
      <form className="comment-form__form" onSubmit={handleSubmit}>
        <div className="comment-form__commentbox-container">
          <label className="comment-form__label" htmlFor="commentBox">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="comment-form__commentbox"
            id="commentBox"
            name="comment"
            placeholder="Add a new comment"
          ></textarea>
        </div>
        <div className="comment-form__submit-container">
          <CtaButton text="COMMENT" iconSrc={commentIcon} iconAlt="comment" />
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
