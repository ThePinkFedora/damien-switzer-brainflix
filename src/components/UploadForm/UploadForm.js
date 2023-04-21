import "./UploadForm.scss";
import videoImage from "../../assets/images/upload-video-preview.jpg";
import uploadIcon from "../../assets/images/upload.svg";
import CtaButton from "../../components/CtaButton/CtaButton";
import { useRef, useState, useEffect } from "react";

/**
 * Form element for uploading a videos.
 * @param {object} props
 * @param {({title: string, description:string, thumbnail: string} : object)=>{}} props.onUpload - Callback invoked with the upload details.
 * @param {()=>{}} props.onCancel - Callback to cancel creating an upload.
 */
function UploadForm({ onUpload, onCancel }) {
  const formRef = useRef();
  const [formValues, setValues] = useState({
    title: null,
    description: null,
    thumbnail: videoImage,
    thumbnailFile: null,
  });

  // When thumbnailFile changes: update the preview
  useEffect(() => {
    if (!formValues.thumbnailFile) {
      setValues({ ...formValues, thumbnail: videoImage });
      return;
    }
    //Setup object URL to access the image
    const objectUrl = URL.createObjectURL(formValues.thumbnailFile);
    setValues({ ...formValues, thumbnail: objectUrl });

    // Release the object url when the form is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [formValues.thumbnailFile]);

  /**
   * Submit handler to invoke {@link onUpload} with {@link formValues}
   */
  const handleSubmit = () => {
    onUpload({ ...formValues });
  };

  /**
   * Change handler, updates state with the modified form value
   * @param {Event} event
   */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...formValues, [name]: value });
  };

  /**
   * File change handler, updates state with modified thumbnail value
   * @param {*} event
   * @returns
   */
  const handleSelectFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setValues({ ...formValues, thumbnailFile: null });
      return;
    }
    setValues({ ...formValues, thumbnailFile: event.target.files[0] });
  };

  const isTitleValid = () => formValues.title?.length > 0;
  const isDescriptionValid = () => formValues.description?.length > 0;
  const isFormValid = () => isTitleValid() && isDescriptionValid();

  return (
    <form className="upload-form" ref={formRef}>
      <div className="upload-form__thumbnail-row">
        <label
          className="upload-form__label upload-form__label--file"
          htmlFor="thumbnail"
        >
          VIDEO THUMBNAIL
          <img
            className="upload-form__thumbnail"
            src={formValues.thumbnail}
            alt="thumbnail"
          />
          <input
            type="file"
            className="upload-form__file-input"
            id="thumbnail"
            name="thumbnail"
            accept="image/png, image/jpeg"
            onChange={handleSelectFile}
          />
        </label>
      </div>
      <div className="upload-form__fields-row">
        <label className="upload-form__label" htmlFor="title">
          TITLE YOUR VIDEO
        </label>
        <input
          type="text"
          className="upload-form__field"
          id="title"
          name="title"
          placeholder="Add a title to your video"
          value={formValues.title ?? ""}
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
          value={formValues.description ?? ""}
          onChange={handleChange}
        />
      </div>
      <div className="upload-form__buttons-row">
        <div className="upload-form__button-container">
          <CtaButton
            text="PUBLISH"
            iconSrc={uploadIcon}
            iconAlt="publish"
            disabled={!isFormValid()}
            onClick={handleSubmit}
          />
        </div>
        <div className="upload-form__button-container">
          <CtaButton text="CANCEL" ctaStyle="secondary" onClick={onCancel} />
        </div>
      </div>
    </form>
  );
}

export default UploadForm;
