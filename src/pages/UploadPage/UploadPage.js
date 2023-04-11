import "./UploadPage.scss";
import videoImage from "../../assets/images/upload-video-preview.jpg";
import uploadIcon from "../../assets/images/upload.svg";
import CtaButton from "../../components/CtaButton/CtaButton";

function UploadPage() {
  return (
    <main className="upload-page">
      <div className="upload-page__content">
        <h1 className="upload-page__title">Upload Video</h1>
        <form className="upload-form">
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
            <div class="upload-form__container upload-form__container--button">
              <CtaButton
                text="PUBLISH"
                iconSrc={uploadIcon}
                iconAlt="publish"
              />
            </div>
            <div class="upload-form__container upload-form__container--button">
              <CtaButton text="CANCEL" style="secondary" />
            </div>
          </div>
          {/* <button className="upload-form__button" type="button">
            CANCEL
          </button> */}
        </form>
      </div>
    </main>
  );
}
export default UploadPage;
