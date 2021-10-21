import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { selectUser } from "../Redux/userSlice";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

const Home = (props) => {
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      console.log("existe");
    } else {
      console.log("no existe");
      props.history.push("/");
    }
  }, [props.history]);

  return (
    <div className="home">
      {user ? (
        <>
          <Link to="Tasks" className="link">
            <h2 className="welcome">📋 Welcome </h2>
          </Link>
        </>
      ) : (
        props.history.push("/")
      )}
    </div>
  );
};

export default withRouter(Home);
