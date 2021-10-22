import React, { useEffect, useState } from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { login } from "../Redux/userSlice";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const itemHard = {
    email: "oscarfamado@gmail.com",
    password: "oscar123",
  };
  // let tokenR;
  // const randomBoolean = () => {
  //   tokenR = Boolean(Math.ceil(Math.random() >= 0.5));
  // };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, settoken] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (email === itemHard.email) settoken(true);
  }, [email, itemHard.email]);

  const dispatch = useDispatch();

  // console.log(itemHard);

  const handleOnSubmitLogin = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("enter a valid email");
      return;
    }
    if (email !== itemHard.email) {
      setError("not registered email");
      return;
    }
    if (!password.trim()) {
      setError("enter a valid password");
      return;
    }
    if (password !== itemHard.password) {
      setError("not registered password");
      return;
    }

    dispatch(
      login({
        email: email,
        password: password,
        token: token,
      })
    );
  };
  // const loginUser = React.useCallback(async (itemHard) => {
  //   try { const res =
  //     await axios.post('http://dev.nexttruck.draketechdev.ca:3600/api/login'), itemHard

  //   } catch (error) {
  //     console.log(error)
  //   }
  // } []);

  return (
    <div className="login">
      <img className="blobOne" src="/background-blob-1.png" alt="blob" />
      <img className="blobTwo" src="/background-blob-1.png" alt="blob" />
      <img className="blobThree" src="/background-blob-1.png" alt="blob" />

      <div className="loginContainer">
        <div className="titleContainer">
          <h1>Login</h1>
        </div>
        <div className="formContainer">
          <form className="loginForm" onClick={handleOnSubmitLogin}>
            {error && <div className="error"> {error} </div>}

            <input
              type="email"
              placeholder="Mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="Home" className="link">
              <button type="submit" className="loginButton">
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
