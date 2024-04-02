package practice.rest.api.board.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Page {
	private int start;
	private int end;
	private int pageNo;
	private int pageNaviSize;
	private int totalPage;
}
