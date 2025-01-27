import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import hide_icon from "../../assets/hide-icon.png";
import show_icon from "../../assets/show_icon.png";

import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const [hide, setHide] = useState(false);
  const [hideImage, setHideImage] = useState(false);
  const [confirmHideImage, setConfirmHideImage] = useState(false);
  const [confirmHide, setConfirmHide] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    console.log("Stored User :", users);

    const foundUser = users.find(
      (storeUser) =>
        storeUser.user.toLowerCase() === user.toLowerCase() &&
        storeUser.password === password
    );

    if (foundUser) {
      toast.success("Login Successful!");
      navigate("/home");
    } else {
      alert("failed login !!!");
    }
  }

  function handleHide(e) {
    e.preventDefault();
    setHide(!hide);
  }
  function handleChide(e) {
    e.preventDefault();
    setConfirmHide(!confirmHide);
  }
  function handleHideIconImage() {
    setHideImage((prev) => !prev);
  }
  function handleConfirmHideIconImage() {
    setConfirmHideImage((prev) => !prev);
  }
  return (
    <>
      <div className="login_parent">
        <div className="heading_signup">Task Manager</div>
        <div className="signup_div_1 ">
          <div className="signup_div_2">
            <div className="sign_heading ">
              <h1>Login</h1>
            </div>
            <div>
              <form onSubmit={onSubmit} autoComplete="on" className="sign_form">
                <div>
                  <input
                    className="signup_input"
                    type="text"
                    name="username"
                    placeholder="Email"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>
                <div className="input_password">
                  <input
                    className="signup_input"
                    type={hide ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="hide_icon_btn"
                    type="submit"
                    onClick={handleHide}
                    arial-label="toggle button visibilty"
                  >
                    <img
                      onClick={handleHideIconImage}
                      className="hide_icon"
                      src={hideImage ? hide_icon : show_icon}
                      alt="hide-icon"
                    />
                  </button>
                </div>

                <div>
                  <button className="signup_btn" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
