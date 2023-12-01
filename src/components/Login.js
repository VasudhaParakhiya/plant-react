import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const checkLogin = () => {
    localStorage.setItem("login", true);
  };

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });

  return (
    <>
      <div>
        <input type="text" name="username" placeholder="Username..." />
        <br></br>
        <input type="text" password="password" placeholder="password" />
        <button onClick={checkLogin}>Login</button>
      </div>
    </>
  );
}

export default Login;
