import "./UploadForm.scss";
import videoImage from "../../assets/images/upload-video-preview.jpg";
import uploadIcon from "../../assets/images/upload.svg";
import CtaButton from "../../components/CtaButton/CtaButton";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Form element for uploading a videos.
 * @param {object} props
 * @param {({title: string, description:string, thumbnail: string} : object)=>{}} props.onUpload
 * @param {()=>{}} props.onCancel
 */
function UploadForm({ onUpload, onCancel }) {
  const formRef = useRef();
  const [values, setValues] = useState({
    title: null,
    description: null,
    thumbnail: videoImage,
  });

  const handleSubmit = () => {
    onUpload({ ...values });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const isTitleValid = () => values.title?.length > 0;
  const isDescriptionValid = () => values.description?.length > 0;
  const isFormValid = () => isTitleValid() && isDescriptionValid();

  return (
    <form className="upload-form" ref={formRef}>
      <div className="upload-form__row upload-form__row--thumbnail">
        <label className="upload-form__label" htmlFor="thumbnail">
          VIDEO THUMBNAIL
        </label>
        <img
          className="upload-form__thumbnail"
          id="thumbnail"
          src={values.thumbnail}
          alt="thumbnail"
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
          value={values.title ?? ""}
          onChange={handleChange}
        />
        <label className="upload-form__label" htmlFor="description">
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea
          className="upload-form__field upload-form__field--textarea"
          id="description"
          name="description"
          placeholder="Add a description to your video"
          value={values.description ?? ""}
          onChange={handleChange}
        />
      </div>
      <div className="upload-form__row upload-form__row--buttons">
        <div className="upload-form__container upload-form__container--button">
          <CtaButton
            text="PUBLISH"
            iconSrc={uploadIcon}
            iconAlt="publish"
            disabled={!isFormValid()}
            onClick={handleSubmit}
          />
        </div>
        <div className="upload-form__container upload-form__container--button">
          <CtaButton text="CANCEL" style="secondary" onClick={onCancel} />
        </div>
      </div>
    </form>
  );
}

export default UploadForm;
