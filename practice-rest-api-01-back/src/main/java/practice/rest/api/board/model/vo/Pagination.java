package practice.rest.api.board.model.vo;

import org.springframework.stereotype.Component;

@Component
public class Pagination {

	public Page getPage(int reqPage, int numPerPage, int pageNaviSize, int totalCount) {
		int end = reqPage * numPerPage;
		int start = end - numPerPage +1;
		int totalPage = (int)Math.ceil(totalCount/(double)numPerPage);
		int pageNo = ((reqPage -1)/pageNaviSize) * pageNaviSize +1;
		Page p = new Page(start, end, pageNo, pageNaviSize, totalPage);
		
		return p;
	}
}
