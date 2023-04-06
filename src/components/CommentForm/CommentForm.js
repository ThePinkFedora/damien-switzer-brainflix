import "./CommentForm.scss";
import CtaButton from "../CtaButton/CtaButton";
import Avatar from "../Avatar/Avatar";
import commentIcon from "../../assets/images/add-comment.svg";

function CommentForm({onComment}) {

  const handleSubmit = (event) => {
    event.preventDefault();

    if(event.target.comment.value){
      const name = "USERNAME";
      const comment = event.target.comment.value;
      
      onComment(name,comment);

      event.target.reset();
    }
  };

  return (
    <div className="comment-form">
      <div className="comment-form__avatar-wrapper">
        <Avatar />
      </div>
      <form className="comment-form__form" onSubmit={handleSubmit}>
        <div className="comment-form__item comment-form__item--comment">
          <label className="comment-form__label" htmlFor="comment">
            JOIN THE CONVERSATION
          </label>
          <textarea name="comment" className="comment-form__textarea" placeholder="Add a new comment"></textarea>
        </div>
        <div className="comment-form__item comment-form__item--submit">
        <CtaButton text="COMMENT" iconSrc={commentIcon} iconAlt="comment" />
        </div>
      </form>
    </div>
  );
}
export default CommentForm;
