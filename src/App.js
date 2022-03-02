import { BrowserRouter, Routes, Router } from "react-router-dom";
import Loginyoungseo from "./pages/kimyoungseo/Login/Login";
import Mainyoungseo from "./pages/kimyoungseo/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Router path="/login-youngseo" element={<Loginyoungseo />} />
        <Router path="/main-youngseo" element={<Mainyoungseo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
