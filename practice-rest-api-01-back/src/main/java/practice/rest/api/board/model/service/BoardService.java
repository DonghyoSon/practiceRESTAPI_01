package practice.rest.api.board.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import practice.rest.api.board.model.dao.BoardDao;
import practice.rest.api.board.model.vo.Board;

@Service
public class BoardService {
	@Autowired
	private BoardDao boardDao;

	//게시글 등록
	public int insertBoard(Board board) {
		return boardDao.insertBoard(board);
	}

	//게시글 목록 출력
	public List boardList() {
		List boardList = boardDao.boardList();
		return boardList;
	}

	//게시글 상세 보기
	public Board boardView(int boardNo) {
		return boardDao.boardView(boardNo);
	}

	//게시글 삭제
	public int boardDelete(int boardNo) {
		return boardDao.boardDelete(boardNo);
	}

	//게시글 수정
	public int boardModify(Board modifiedBoard) {
		return boardDao.boardModify(modifiedBoard);
	}
}
