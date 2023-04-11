import "./UploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";

function UploadPage() {
  return (
    <main className="upload-page">
      <div className="upload-page__content">
        <h1 className="upload-page__title">Upload Video</h1>
        <UploadForm />
      </div>
    </main>
  );
}
export default UploadPage;
