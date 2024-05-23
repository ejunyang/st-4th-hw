import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/detail/1">디테일 1 페이지 이동</Link>
    </div>
  );
};

export default Home;
