import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const BoardView = (props) => {
  const location = useLocation();
  const boardNo = location.state.boardNo;
  const [board, setBoard] = useState({});
  const navigate = useNavigate();

  console.log(boardNo);

  //게시글 번호를 서버로 전달하여 해당 글을 가져옴
  useEffect(() => {
    axios
      .get("http://khdsa1.iptime.org:18080" + "/board" + "/" + boardNo) //get방식
      .then((res) => {
        if (res.data.data === null) {
          console.log(res.data);
          alert("게시글 조회 실패");
        } else {
          console.log(res.data);
          setBoard(res.data.data);
        }
      })
      .catch((res) => {
        console.log(res.data);
      });
  }, []);

  //게시판 목록으로 돌아가는 함수
  const toBoardList = () => {
    navigate("/boardList");
  };

  //게시글을 수정하는 함수
  const toBoardModify = () => {
    console.log(board);
    navigate("/boardModify", { state: { board: board } });
  };

  //게시글을 삭제하는 함수
  const boardDelete = () => {
    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      axios
        .delete("http://khdsa1.iptime.org:18080" + "/board" + "/" + boardNo)
        .then((res) => {
          console.log(res.data);
          alert("삭제가 완료되었습니다.");
          navigate("/boardList");
        })
        .catch((res) => {
          console.log(res.data);
        });
    }
  };

  return (
    <>
      <h1>Practice REST API</h1>
      <hr />
      <table>
        <tbody>
          <tr>
            <td className="boardTitle">{board.boardTitle}</td>
          </tr>
          <tr>
            <td className="regDate">{board.regDate}</td>
          </tr>
          <tr>
            <td className="boardWriter">{board.boardWriter}</td>
          </tr>
          <tr>
            <td className="boardContent">{board.boardContent}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button onClick={toBoardList}>목록으로</button>
        <button onClick={toBoardModify}>수정</button>
        <button onClick={boardDelete}>삭제</button>
      </div>
    </>
  );
};

export default BoardView;
