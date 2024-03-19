package practice.rest.api.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Hidden; //숨기고 싶은 항목에 사용 @Hidden
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;

import practice.rest.api.board.model.service.BoardService;
import practice.rest.api.board.model.vo.Board;

@Tag(name = "Board API", description = "")
@RestController
@RequestMapping(value="/board")
public class BoardController {
	@Autowired
	private BoardService boardService;
	
	//게시글 등록
	@Operation(summary = "게시글 등록", description = "DB에 게시글을 등록합니다.")
	@PostMapping //@PostMapping(value="/board")
	public int insertBoard(@RequestBody Board board) {
		System.out.println(board);
		int result = boardService.insertBoard(board);
		return result;
	}
	
	//게시글 목록 출력
	@Operation(summary = "게시글 목록 출력", description = "DB에 등록된 게시글 목록을 출력합니다.")
    @GetMapping //@GetMapping(value="/board")
	public List boardList() {
		List boardList = boardService.boardList();
		return boardList;
	}
	
	//게시글 상세 보기
	@Operation(summary = "게시글 상세 보기", description = "DB에 등록된 특정 게시글을 조회합니다.")
	@GetMapping(value="/{boardNo}") //@GetMapping(value="/board/{boardNo}")
	public Board boardView(@PathVariable int boardNo) {
		Board board = boardService.boardView(boardNo);
		return board;
	}
	
	//게시글 삭제
	@Operation(summary = "게시글 삭제", description = "DB에 등록된 특정 게시글을 삭제합니다.")
	@DeleteMapping(value="/{boardNo}") //@DeleteMapping(value="/board/{boardNo}")
	public int boardDelete(@PathVariable int boardNo) {
		int result = boardService.boardDelete(boardNo);
		return result;
	}
	
	//게시글 수정
	@Operation(summary = "게시글 수정", description = "DB에 등록된 특정 게시글을 수정합니다.")
	@PatchMapping //@PatchMapping(value="/board")
	public int boardModify(@RequestBody Board modifiedBoard) {
		int result = boardService.boardModify(modifiedBoard);
		return result;
	}
}
