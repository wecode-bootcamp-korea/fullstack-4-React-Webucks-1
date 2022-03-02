import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginyoungseo from "./pages/kimyoungseo/Login/Login";
import Mainyoungseo from "./pages/kimyoungseo/Main/Main";
import Listhaewon from "./pages/seulhaewon/List/List";
import Loginhaewon from "./pages/seulhaewon/Login/Login";
import Detailhaewon from "./pages/seulhaewon/Detail/Detail";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-youngseo" element={<Loginyoungseo />} />
        <Route path="/main-youngseo" element={<Mainyoungseo />} />

        <Route path="/login-haewon" element={<Loginhaewon />} />
        <Route path="/list-haewon" element={<Listhaewon />} />
        <Route path="/detail-haewon" element={<Detailhaewon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
