import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Loginyoungseo from "./pages/kimyoungseo/pages/Login/Login";
import Listyoungseo from "./pages/kimyoungseo/pages/List/List";
import Detailyoungseo from "./pages/kimyoungseo/pages/Detail/Detail";
import Listhaewon from "./pages/seulhaewon/List/List";
import Loginhaewon from "./pages/seulhaewon/Login/Login";
import Detailhaewon from "./pages/seulhaewon/Detail/Detail";
import Main from "./pages/Main";
import Loginyoungseo from "./pages/kimyoungseo/pages/Login/Login";
import Listyoungseo from "./pages/kimyoungseo/pages/List/List";
import Detailyoungseo from "./pages/kimyoungseo/pages/Detail/Detail";
import Logineuitaek from "./pages/leeeuitaek/Login/Login";
import Listeuitaek from "./pages/leeeuitaek/List/List";
import Detaileuitaek from "./pages/leeeuitaek/Detail/Detail";

import "./styles/reset.scss";
import "./styles/common.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login-youngseo" element={<Loginyoungseo />} />
        <Route path="/list-youngseo" element={<Listyoungseo />} />
        <Route path="/detail-youngseo" element={<Detailyoungseo />} />
        <Route path="/login-euitaek" element={<Logineuitaek />} />
        <Route path="/list-euitaek" element={<Listeuitaek />} />
        <Route path="/detail-euitaek" element={<Detaileuitaek />} />

        <Route path="/login-haewon" element={<Loginhaewon />} />
        <Route path="/list-haewon" element={<Listhaewon />} />
        <Route path="/detail-haewon" element={<Detailhaewon />} />
        <Route path="login-seonghoson" element={<LoginSeongho />} />
        <Route path="/list-seonghoson" element={<ListSeongho />} />
        <Route path="/detail-seonghoson/:id" element={<DetailSeongho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
