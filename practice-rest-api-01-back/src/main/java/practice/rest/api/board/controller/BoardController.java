package practice.rest.api.board.controller;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import practice.rest.api.board.model.service.BoardService;
import practice.rest.api.board.model.vo.Board;

@RestController
@RequestMapping(value="/board")
public class BoardController {
	@Autowired
	private BoardService boardService;
	
	//게시글 등록
	@PostMapping(value="/board")
	public int insertBoard(@RequestBody Board board) {
		System.out.println(board);
		int result = boardService.insertBoard(board);
		return result;
	}
	
	//게시글 목록 출력
	@GetMapping(value="/board")
	public List boardList() {
		List boardList = boardService.boardList();
		return boardList;
	}
	
	//게시글 상세 보기
	@GetMapping(value="/board/{boardNo}")
	public Board boardView(@PathVariable int boardNo) {
		Board board = boardService.boardView(boardNo);
		return board;
	}
	
	//게시글 삭제
	@Delete(value="/board/{boardNo}")
	public int boardDelete(@PathVariable int boardNo) {
		int result = boardService.boardDelete(boardNo);
		return result;
	}
	
	//게시글 수정
	@PatchMapping(value="/board")
	public int boardModify(@RequestBody Board modifiedBoard) {
		int result = boardService.boardModify(modifiedBoard);
		return result;
	}
}
