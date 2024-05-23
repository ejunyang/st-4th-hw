import React from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();
  console.log(param.id);
  return (
    <div>
      <h1>Detail</h1>
      <Link to="/">홈 페이지 이동</Link>
    </div>
  );
};

export default Detail;
