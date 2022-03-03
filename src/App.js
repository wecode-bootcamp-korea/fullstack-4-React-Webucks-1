import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./pages/Main";
import LoginSeongho from "../src/pages/seonghoson/pages/login/Login";
import ListSeongho from "../src/pages/seonghoson/pages/list/List";
import DetailSeongho from "../src/pages/seonghoson/pages/detail/Detail";

import "./styles/reset.scss";
import "./styles/common.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login-seonghoson" element={<LoginSeongho />} />
        <Route path="/list-seonghoson" element={<ListSeongho />} />
        <Route path="/detail-seonghoson/:id" element={<DetailSeongho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
