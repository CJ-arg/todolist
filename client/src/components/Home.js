import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { selectUser } from "../Redux/userSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector(selectUser);
  return (
    <div className="home">
      {user ? (
        <>
          <Link to="Tasks" className="link">
            <h2 className="welcome">📋 Welcome </h2>
          </Link>

          <form className="homeForm">
            <button className="logoutButton"> Logout </button>
          </form>
        </>
      ) : (
        <Link to="App" className="link">
          <div className="home">
            <h1 className="logoutButton">Please LOGIN</h1>{" "}
          </div>{" "}
        </Link>
      )}
    </div>
  );
};

export default Home;
