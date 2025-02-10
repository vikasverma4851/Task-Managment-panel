import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import CountTask from "../CountTask/CountTask";
import { UserContext } from "../../App";

const Navbar = () => {
  const { userDetails } = useContext(UserContext);
  return (
    <>
      <div className="nav-container">
        <div className="name-search ">
          <div>
            <p>Hello, {userDetails && userDetails.name || "User"}</p>
          </div>
          {/* <div className="search-container">
            <input
              id="search-field"
              type="text"
              placeholder="Search for Stocks and more"
            />

            <span className="search-icon">
              <CiSearch />
            </span>
          </div> */}
        </div>

        {/* profile code */}
        <div>
          <div className="profile-notification">
            {/* <div>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={"/home/notification"}
              >
                <IoNotificationsOutline
                  style={{ width: "25px", height: "25px" }}
                />
              </Link>
            </div> */}
            <div className="profile-container">
              <div>
                {userDetails ? (
                  <img
                    src={userDetails.profilePicture}
                    alt="Profile Picture"
                    style={{ width: "45px", height: "45px", borderRadius:'50%' }}
                  />
                ) : (
                  <CgProfile style={{ width: "45px", height: "45px" }} />
                )}
              </div>
              <div className="profile-content">
                <p style={{ fontSize: "larger" }}>
                  {userDetails && userDetails.name ? userDetails.name : "User"}
                </p>
                <p style={{ color: "#AEB9E1", fontSize: "13px" }}>
                  Account Settings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
