import "./CommentsSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import { postComment } from "../../js/apiUtils";

/**
 * Section which displays a {@link CommentForm} and {@link CommentList}; allowing users to view and post comments.
 * @param {object} props
 * @param {string} props.videoId - List of comments
 * @param {(comment: string) => {}} props.onCommented - Callback for posting a comment
 * @returns
 */
function CommentsSection({ comments, videoId, onCommented }) {
  const commentList = [...comments].sort((a, b) => b.timestamp - a.timestamp); //Sort newest -> oldest
  const countText = `${comments.length} Comment${
    comments.length !== 1 ? "s" : ""
  }`;

  /**
   * Posts a comment to the server, then invokes ${@link onCommented}
   * @param {string} comment
   */
  const handleComment = (comment) => {
    const commentData = {
      name: "BrainFlix User",
      comment: comment,
    };
    postComment(videoId, commentData)
      .then(() => {
        onCommented();
      })
      .catch((error) => {
        console.error(error);
        alert(
          "An unexpected or occured when posting comment. Please try again."
        );
      });
  };

  return (
    <section className="comments-section">
      <h2 className="comments-section__header">{countText}</h2>
      <CommentForm onComment={handleComment} />
      <CommentList comments={commentList} />
    </section>
  );
}

export default CommentsSection;
