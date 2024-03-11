import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <h1>Practice REST API</h1>
      <hr />
      <span>
        <Link to="/boardList">Board</Link>
      </span>
    </>
  );
};

export default Main;
