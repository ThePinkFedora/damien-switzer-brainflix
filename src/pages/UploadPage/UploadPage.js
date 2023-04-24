import "./UploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postVideo, endpoint } from "../../js/apiUtils";

/**
 * Main content section for uploading a video via {@link UploadForm}
 */
function UploadPage() {
  const navigate = useNavigate();
  const [uploadValues, setUploadValues] = useState(null);

  /**
   * Upload submit handler. Posts the video to the server. Notifies the user of upload, then redirects home.
   * @param {{title: string, description: string, thumbnailUrl: string, thumbnailFile: object}} uploadData
   */
  const handleUploadSubmitted = async (uploadData) => {
    const videoPostData = {
      ...uploadData,
      channel: "BrainFlix User",
      thumbnailUrl: `${endpoint}images/image9.jpeg`,
    };

    postVideo(videoPostData).then(() => {
      setUploadValues({ ...uploadData });
      setTimeout(() => navigate("/"), 2000);
    });
  };

  const handleCancel = () => navigate("/");

  document.title = `BrainFlix: Upload`;

  return (
    <main className="upload-page">
      <div className="upload-page__content">
        <h1 className="upload-page__title">Upload Video</h1>
        {uploadValues !== null || (
          <UploadForm
            onUpload={handleUploadSubmitted}
            onCancel={handleCancel}
          />
        )}
        {uploadValues !== null && (
          <div className="upload-page__success-container">
            <img
              className="upload-page__success-image"
              src={uploadValues.thumbnailUrl}
              alt="thumbnail"
            />
            <p className="upload-page__success-message">
              '{uploadValues.title}' has been uploaded!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
export default UploadPage;
