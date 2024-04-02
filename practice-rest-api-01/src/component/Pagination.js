const Pagination = (props) => {
  const reqPage = props.reqPage;
  const setReqPage = props.setReqPage;
  const page = props.page;

  //페이지가 저장될 배열
  const pageArr = new Array();

  //페이지 버튼 기능
  const changePageFunc = (e) => {
    const changePage = e.currentTarget.innerText;
    console.log("reqPage", changePage);
    setReqPage(changePage);
  };

  //'<<'버튼
  pageArr.push(
    <span
      onClick={() => {
        setReqPage(1); //reqPage를 1로 설정
      }}
      className="material-symbols-outlined"
    >
      first_page
    </span>
  );

  //'<'버튼
  pageArr.push(
    <span
      onClick={() => {
        //현재 페이지가 1이 아닐 때,
        if (reqPage !== 1) {
          setReqPage(Number(reqPage) - 1); //현재 페이지에서 -1
        }
      }}
      className="material-symbols-outlined"
    >
      keyboard_arrow_left
    </span>
  );

  //숫자 버튼
  let pageNo = page.pageNo;
  for (let i = 0; i < page.pageNaviSize; i++) {
    if (pageNo === Number(reqPage)) {
      pageArr.push(
        <span onClick={changePageFunc} className="active-pageNo">
          {pageNo}
        </span>
      );
    } else {
      pageArr.push(
        <span onClick={changePageFunc} className="nonActive-pageNo">
          {pageNo}
        </span>
      );
    }
    pageNo++;
    if (pageNo > page.totalPage) {
      break;
    }
  }

  //'>'버튼
  pageArr.push(
    <span
      onClick={() => {
        //맨 마지막 페이지가 아닐 때,
        if (reqPage !== page.totalPage) {
          setReqPage(Number(reqPage) + 1); //현재 페이지에서 +1
        }
      }}
      className="material-symbols-outlined"
    >
      keyboard_arrow_right
    </span>
  );

  //'>>'버튼
  pageArr.push(
    <span
      onClick={() => {
        setReqPage(page.totalPage); //reqPage를 맨 마지막 페이지(총 페이지)로 설정
      }}
      className="material-symbols-outlined"
    >
      last_page
    </span>
  );

  return <div>{pageArr}</div>;
};

export default Pagination;
