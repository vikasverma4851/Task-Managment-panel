import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import CountTask from "../CountTask/CountTask";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="name-search ">
          <div>
            <p>Hello Vikas,</p>
          </div>
          <div className="search-container">
            <input
              id="search-field"
              type="text"
              placeholder="Search for Stocks and more"
            />

            <span className="search-icon">
              <CiSearch />
            </span>
          </div>
        </div>

        {/* profile code */}
        <div>
          <div className="profile-notification">
            <div>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={"/home/notification"}
              >
                <IoNotificationsOutline
                  style={{ width: "25px", height: "25px" }}
                />
              </Link>
            </div>
            <div className="profile-container">
              <div>
                <CgProfile style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="profile-content">
                <p>John Carter</p>
                <p>Account Settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
