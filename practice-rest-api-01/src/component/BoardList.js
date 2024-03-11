import axios from "axios";
import { useEffect } from "react";

const BoardList = () => {
  useEffect(() => {
    axios
      .get("/board")
      .then((res) => {
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res.data);
      });
  }, []);
};

export default BoardList;
