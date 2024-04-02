import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./board.css";
import Pagination from "./Pagination";

const BoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const navigate = useNavigate();

  //페이지 기능에 필요한 변수
  const [reqPage, setReqPage] = useState(1);
  const [page, setPage] = useState({});

  //백엔드에 게시글 목록 조회 요청
  /*useEffect(() => {
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
  }, []);*/
  //백엔드에 게시글 목록 조회 요청(페이지 기능 포함)
  useEffect(() => {
    console.log(typeof reqPage);
    axios
      .get("/board" + "/list" + "/" + reqPage) //.get("http://khdsa1.iptime.org:18080" + "/board")
      .then((res) => {
        if (res.data.data.boardList === null) {
          console.log(res.data);
          alert("게시글 조회 실패");
        } else {
          console.log(res.data);
          setBoardList(res.data.data.boardList);
          setPage(res.data.data.p);
        }
      })
      .catch((res) => {
        console.log(res.data);
      });
  }, [reqPage]);

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
      <div className="whole-rap">
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
        <div className="pagenation">
          <Pagination reqPage={reqPage} setReqPage={setReqPage} page={page} />
        </div>
      </div>
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
