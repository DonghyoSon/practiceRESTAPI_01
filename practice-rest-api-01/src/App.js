import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import BoardList from "./component/BoardList";
import BoardView from "./component/BoardView";
import BoardWrite from "./component/BoardWrite";
import BoardModify from "./component/BoardModify";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/boardList" element={<BoardList />} />
      <Route path="/boardView" element={<BoardView />} />
      <Route path="/boardWrite" element={<BoardWrite />} />
      <Route path="/boardModify" element={<BoardModify />} />
    </Routes>
  );
}

export default App;
