import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="containerHome py-3">
      <Link to={"/admin"}>
        <button className="dash-btn">Admin</button>
      </Link>
      <Link to={"/user"}>
        <button className="dash-btn">User</button>
      </Link>
    </div>
  );
};

export default Home;
