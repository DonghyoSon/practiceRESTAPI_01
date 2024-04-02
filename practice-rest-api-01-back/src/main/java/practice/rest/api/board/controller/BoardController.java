package practice.rest.api.board.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.tags.Tag;

import practice.rest.api.board.model.service.BoardService;
import practice.rest.api.board.model.vo.Board;
import response.ResponseDTO;

@Tag(name = "Board API", description = "")
@CrossOrigin("*")
@RestController
@RequestMapping(value="/board")
public class BoardController {
	@Autowired
	private BoardService boardService;
	
	//게시글 등록
	@Operation(summary = "게시글 등록", description = "DB에 게시글을 등록합니다.")
	@PostMapping //@PostMapping(value="/board")
	public ResponseDTO insertBoard(@RequestBody Board board) {		
		System.out.println(board);
		
		int result = boardService.insertBoard(board);
		ResponseDTO response = new ResponseDTO();
		
		if(result == 0) {
			response.setMessage("Fail");
//			response.setData(0);
			
			return response;
		}else {
			response.setMessage("Success");
//			response.setData(1);
			
			return response;
		}
	}
	
	//게시글 목록 출력
	/*@Operation(summary = "게시글 목록 출력", description = "DB에 등록된 게시글 목록을 출력합니다.")
    @GetMapping //@GetMapping(value="/board")
	public ResponseDTO boardList() {		
		List boardList = boardService.boardList();
		ResponseDTO response = new ResponseDTO();
		
		if(boardList == null) {
			response.setMessage("Fail");
			response.setData(null);
			
			return response;
		}else {
			response.setMessage("Success");
			response.setData(boardList);
			
			return response;
		}
	}*/
	//게시글 목록 출력(페이지 기능 포함)
	@Operation(summary = "게시글 목록 출력", description = "DB에 등록된 게시글 목록을 출력합니다.")
	@GetMapping(value="/list/{reqPage}")
	public ResponseDTO boardList(@PathVariable int reqPage) {
		Map map = boardService.boardList(reqPage);
		ResponseDTO response = new ResponseDTO();
		
		if(map.get("boardList") == null) {
			response.setMessage("Fail");
			response.setData(null);
			
			return response;
		}else {
			response.setMessage("Success");
			response.setData(map);
			
			return response;
		}
	}
	
	//게시글 상세 보기
	@Operation(summary = "게시글 상세 보기", description = "DB에 등록된 특정 게시글을 조회합니다.")
	@GetMapping(value="/{boardNo}") //@GetMapping(value="/board/{boardNo}")
	public ResponseDTO boardView(@PathVariable int boardNo) {
		Board board = boardService.boardView(boardNo);
		ResponseDTO response = new ResponseDTO();
		
		if(board == null) {
			response.setMessage("Fail");
			response.setData(null);
			
			return response;
		}else {
			response.setMessage("Success");
			response.setData(board);
			
			return response;
		}
		
	}
	
	//게시글 삭제
	@Operation(summary = "게시글 삭제", description = "DB에 등록된 특정 게시글을 삭제합니다.")
	@DeleteMapping(value="/{boardNo}") //@DeleteMapping(value="/board/{boardNo}")
	public ResponseDTO boardDelete(@PathVariable int boardNo) {
		int result = boardService.boardDelete(boardNo);
		ResponseDTO response = new ResponseDTO();
		
		if(result == 0) {
			response.setMessage("Fail");
//			response.setData(0);
			
			return response;
		}else {
			response.setMessage("Success");
//			response.setData(1);
			
			return response;
		}
	}
	
	//게시글 수정
	@Operation(summary = "게시글 수정", description = "DB에 등록된 특정 게시글을 수정합니다.")
	@PatchMapping //@PatchMapping(value="/board")
	public ResponseDTO boardModify(@RequestBody Board modifiedBoard) {
		int result = boardService.boardModify(modifiedBoard);
		ResponseDTO response = new ResponseDTO();
		
		if(result == 0) {
			response.setMessage("Fail");
//			response.setData(0);
			
			return response;
		}else {
			response.setMessage("Success");
//			response.setData(1);
			
			return response;
		}
	}
}
