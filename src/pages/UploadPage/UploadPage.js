import "./UploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Upload page which provides access uploading a video via {@link UploadForm}
 * @returns
 */
function UploadPage() {
  const navigate = useNavigate();
  const [uploadValues, setUploadValues] = useState(null);

  /**
   * @param {{title: string, description: string, thumbnail: string}} uploadData
   */
  const handleUploadSubmitted = (uploadData) => {
    setUploadValues({ ...uploadData });
    setTimeout(() => navigate("/"), 2000);
  };

  const handleCancel = () => navigate("/");

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
              src={uploadValues.thumbnail}
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
