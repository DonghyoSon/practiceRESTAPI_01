import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import BoardList from "./component/BoardList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/boardList" element={<BoardList />} />
    </Routes>
  );
}

export default App;
