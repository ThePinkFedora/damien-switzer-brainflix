import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import VideoPage from "./pages/VideoPage/VideoPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/">
            <Route path=":id?" element={<VideoPage />} />
          </Route>
          <Route path="upload" element={<UploadPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
