import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const BoardWrite = () => {
  const navigate = useNavigate();
  const [boardTitle, setBoardTitle] = useState("");
  const [boardContent, setBoardContent] = useState("");
  const [boardWriter, setBoardWriter] = useState("");

  //글쓰기 등록 함수
  const insertBoard = () => {
    const board = { boardTitle, boardContent, boardWriter };

    axios
      .post("http://khdsa1.iptime.org:18080" + "/board", board) //post방식
      .then((res) => {
        console.log(res.data);
        alert("게시글 등록 완료");
        navigate("/boardList");
      })
      .catch((res) => {
        console.log(res.data);
        alert("게시글 등록 실패");
      });
  };

  //글쓰기 취소 함수
  const cancel = () => {
    if (window.confirm("게시글 작성을 취소하시겠습니까?")) {
      navigate("/boardList");
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
  const changeBoardWriter = (e) => {
    const inputWriter = e.currentTarget.value;
    setBoardWriter(inputWriter);
    console.log(boardWriter);
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
                placeholder="제목을 입력하세요."
              />
            </td>
          </tr>
          <tr>
            <td className="contentArea">
              <textarea
                value={boardContent}
                onChange={changeBoardContent}
                placeholder="내용을 입력하세요."
              />
            </td>
          </tr>
          <tr>
            <td className="writerArea">
              <input
                className="writerArea-input"
                type="text"
                value={boardWriter}
                onChange={changeBoardWriter}
                placeholder="작성자명을 입력하세요."
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button onClick={insertBoard}>등록</button>
        <button onClick={cancel}>취소</button>
      </div>
    </>
  );
};

export default BoardWrite;
