import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import VideoPage from "./pages/VideoPage/VideoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/">
            <Route path=":id?" element={<VideoPage />} />
          </Route>
          <Route path="upload" element={<h1>Upload</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
