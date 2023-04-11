import "./UploadForm.scss";
import videoImage from "../../assets/images/upload-video-preview.jpg";
import uploadIcon from "../../assets/images/upload.svg";
import CtaButton from "../../components/CtaButton/CtaButton";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function UploadForm() {
  const formRef = useRef();
  const navigate = useNavigate();

  /**
   *
   * @param {SubmitEvent} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = formRef.current;

    const title = form.title.value;
    const description = form.description.value;

    console.log(title, description);

    setTimeout(() => navigate("/"), 1000);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit} ref={formRef}>
      <div className="upload-form__row upload-form__row--thumbnail">
        <label className="upload-form__label" htmlFor="thumbnail">
          VIDEO THUMBNAIL
        </label>
        <img
          className="upload-form__thumbnail"
          id="thumbnail"
          src={videoImage}
          alt=""
          name="thumbnail"
        />
      </div>
      <div className="upload-form__row upload-form__row--fields">
        <label className="upload-form__label" htmlFor="title">
          TITLE YOUR VIDEO
        </label>
        <input
          className="upload-form__field"
          id="title"
          type="text"
          name="title"
          placeholder="Add a title to your video"
        />
        <label className="upload-form__label" htmlFor="description">
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea
          className="upload-form__field upload-form__field--textarea"
          id="description"
          name="description"
          placeholder="Add a description to your video"
        />
      </div>
      <div className="upload-form__row upload-form__row--buttons">
        <div className="upload-form__container upload-form__container--button">
          <CtaButton text="PUBLISH" iconSrc={uploadIcon} iconAlt="publish" />
        </div>
        <div className="upload-form__container upload-form__container--button">
          <CtaButton text="CANCEL" style="secondary" onClick={handleCancel} />
        </div>
      </div>
    </form>
  );
}

export default UploadForm;
