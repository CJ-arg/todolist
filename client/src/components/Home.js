import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { selectUser } from "../Redux/userSlice";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

const Home = (props) => {
  const user = useSelector(selectUser);
  console.log(user);
  useEffect(() => {
    if (user.token) {
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
          <div className="welcomeLorem">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium debitis ex enim tenetur. Tempore totam ducimus nam,
            alias iure reprehenderit sapiente maiores dicta nesciunt, pariatur
            cupiditate perspiciatis consequatur, aliquam debitis! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Accusantium debitis ex
            enim tenetur. Tempore totam ducimus nam, alias iure reprehenderit
            sapiente maiores dicta nesciunt, pariatur cupiditate perspiciatis
            consequatur, aliquam debitis!
          </div>
        </>
      ) : (
        props.history.push("/")
      )}
    </div>
  );
};

export default withRouter(Home);
