import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./board.css";

const BoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const navigate = useNavigate();

  //백엔드에 게시글 목록 조회 요청
  useEffect(() => {
    axios
      .get("/board") //.get("http://khdsa1.iptime.org:18080" + "/board")
      .then((res) => {
        if (res.data.data === null) {
          console.log(res.data);
          alert("게시글 조회 실패");
        } else {
          console.log(res.data);
          setBoardList(res.data.data);
        }
      })
      .catch((res) => {
        console.log(res.data);
      });
  }, []);

  //메인으로 이동하는 함수
  const toMain = () => {
    navigate("/");
  };

  //글쓰기 함수
  const write = () => {
    navigate("/boardWrite");
  };

  return (
    <>
      <h1>Practice REST API</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일</th>
          </tr>
        </thead>
        {boardList.map((boardList, index) => {
          return <BoardListObj key={"board" + index} boardList={boardList} />;
        })}
      </table>
      <button onClick={toMain}>메인으로</button>
      <button onClick={write}>글쓰기</button>
    </>
  );
};

const BoardListObj = (props) => {
  const boardList = props.boardList;
  const navigate = useNavigate();

  console.log(boardList);

  //게시글 상세보기로 이동하는 함수
  const toBoardView = () => {
    navigate("/boardView", { state: { boardNo: boardList.boardNo } });
  };

  return (
    <>
      <tbody>
        <tr>
          <td>{boardList.boardNo}</td>
          <td onClick={toBoardView}>{boardList.boardTitle}</td>
          <td>{boardList.boardWriter}</td>
          <td>{boardList.regDate}</td>
        </tr>
      </tbody>
    </>
  );
};
export default BoardList;
