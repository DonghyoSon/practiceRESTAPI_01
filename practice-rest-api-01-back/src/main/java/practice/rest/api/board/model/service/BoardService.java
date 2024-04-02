package practice.rest.api.board.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import practice.rest.api.board.model.dao.BoardDao;
import practice.rest.api.board.model.vo.Board;
import practice.rest.api.board.model.vo.Page;
import practice.rest.api.board.model.vo.Pagination;

@Service
public class BoardService {
	@Autowired
	private BoardDao boardDao;
	@Autowired
	private Pagination pagination;

	//게시글 등록
	public int insertBoard(Board board) {
		return boardDao.insertBoard(board);
	}

	//게시글 목록 출력
	/*public List boardList() {
		List boardList = boardDao.boardList();
		return boardList;
	}*/
	//게시글 목록 출력(페이지 기능 포함)
	public Map boardList(int reqPage) {
		int numPerPage = 10;
		int pageNaviSize = 5;
		int totalCount = boardDao.totalCount();
		
		Page p = pagination.getPage(reqPage, numPerPage, pageNaviSize, totalCount);
		
		List boardList = boardDao.boardList(p);
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("boardList", boardList);
		map.put("p", p);
		
		return map;
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
		System.out.println(modifiedBoard);
		return boardDao.boardModify(modifiedBoard);
	}
}
