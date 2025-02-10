import React, { useState, useEffect, useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import hide_icon from "../../assets/hide-icon.png";
import show_icon from "../../assets/show_icon.png";
import axios from "axios";

import { toast } from "react-toastify";
import { UserContext } from "../../App";

const Login = () => {
  const { setRole, setToken } = useContext(UserContext);
  const [response, setResponse] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const [hide, setHide] = useState(false);
  const [hideImage, setHideImage] = useState(false);
  const [confirmHideImage, setConfirmHideImage] = useState(false);
  const [confirmHide, setConfirmHide] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("Updated Response:", response);
  // }, [response]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const responseData = await axios.post(
        "http://16.171.8.84:8085/api/login/admin/auth",
        { email, password }
      );
      setResponse(responseData.data);

      localStorage.setItem("role", responseData.data.role);
      setRole(responseData.data.role);

      console.log(responseData.data.role);
      localStorage.setItem("token", responseData?.data?.token);
      setToken(responseData.data.token);
      toast.success("Login Successful!");
      console.log(response);
      navigate("/home/task-overview");
    } catch (err) {
      toast.error(err.response.data.message || "Went Something Wrong");
    }

    // console.log("Stored User :", users);

    // const foundUser = users.find(
    //   (storeUser) =>
    //     storeUser.user.toLowerCase() === user.toLowerCase() &&
    //     storeUser.password === password
    // );

    // if (foundUser) {
    //   toast.success("Login Successful!");
    //   navigate("/home/task-overview");
    // } else {
    //   alert("failed login !!!");
    // }
  };

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
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
