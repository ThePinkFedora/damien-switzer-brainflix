import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import VideoPage from "./pages/VideoPage/VideoPage";

function App() {
  const videoPage = <VideoPage />;
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={videoPage} />
          <Route path=":id" element={videoPage} />
        </Route>
        <Route path="upload" element={<h1>Upload</h1>} />
      </Routes>
    </div>
  );
}

export default App;
