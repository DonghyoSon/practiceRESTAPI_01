import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

const BoardModify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const board = location.state.board;
  console.log(board);
  const boardNo = board.boardNo;
  const boardWriter = board.boardWriter;
  const [boardTitle, setBoardTitle] = useState(board.boardTitle);
  const [boardContent, setBoardContent] = useState(board.boardContent);

  //게시글 수정 함수
  const modifyBoard = () => {
    const modifiedBoard = { boardNo, boardTitle, boardContent, boardWriter };

    axios
      .patch("/board", modifiedBoard) //.patch("http://khdsa1.iptime.org:18080" + "/board", modifiedBoard)
      .then((res) => {
        console.log(res.data);
        alert("게시글 수정이 완료되었습니다.");
        navigate("/boardView", { state: { boardNo: board.boardNo } });
      })
      .catch((res) => {
        console.log(res.data);
      });
  };

  //수정 취소 함수
  const cancelModify = () => {
    if (window.confirm("게시글 수정을 취소하시겠습니까?")) {
      navigate("/boardView", { state: { boardNo: board.boardNo } });
    }
  };

  //글쓰기 양식에 입력되는 값을 boardTitle, boardContent에 대입
  const changeBoardTitle = (e) => {
    const inputTitle = e.currentTarget.value;
    setBoardTitle(inputTitle);
    console.log(boardTitle);
  };
  const changeBoardContent = (e) => {
    const inputContent = e.currentTarget.value;
    setBoardContent(inputContent);
    console.log(boardContent);
  };

  return (
    <>
      <h1>Practice REST API</h1>
      <hr />
      <table>
        <tbody>
          <tr>
            <td className="titleArea">
              <input
                type="text"
                value={boardTitle}
                onChange={changeBoardTitle}
              />
            </td>
          </tr>
          <tr>
            <td className="contentArea">
              <textarea value={boardContent} onChange={changeBoardContent} />
            </td>
          </tr>
          <tr>
            <td className="writerArea">
              <input
                className="writerArea-input"
                type="text"
                value={boardWriter}
                disabled
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button onClick={modifyBoard}>수정하기</button>
        <button onClick={cancelModify}>취소</button>
      </div>
    </>
  );
};

export default BoardModify;
