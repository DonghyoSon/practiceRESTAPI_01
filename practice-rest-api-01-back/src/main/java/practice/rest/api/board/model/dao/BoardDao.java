package practice.rest.api.board.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import practice.rest.api.board.model.vo.Board;

@Mapper
public interface BoardDao {

	//게시글 등록
	int insertBoard(Board board);

	//게시글 목록 출력
	List boardList();

	//게시글 상세 보기
	Board boardView(int boardNo);

	//게시글 삭제
	int boardDelete(int boardNo);

	//게시글 수정
	int boardModify(Board modifiedBoard);

}
