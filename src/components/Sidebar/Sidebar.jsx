import React, { useContext } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineSetting,
} from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { FaEuroSign } from "react-icons/fa";
import SidebarItems from "../SidebarItems/SidebarItems";
import { IoIosNotifications } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { use } from "react";
import { UserContext } from "../../App";

const Sidebar = () => {
  const { role } = useContext(UserContext);
  const menuItems = [
    // {
    //   id: 1,
    //   name: "Dashboard",
    //   icon: <AiOutlineDashboard />,
    //   path: "/home/task-overview",
    // },
    {
      id: 2,
      name: "Task Management",
      icon: <AiOutlineUser />,
      path: "/task-management",
    },
    {
      id: 3,
      name: "Team Management",
      icon: <AiOutlineSetting />,
      path: "/team-managment",
    },
    // {
    //   id: 4,
    //   name: "Calender Management",
    //   icon: <FaEuroSign />,
    //   path: "/calender-managment",
    // },
    { id: 5, name: "Settings", icon: <IoIosSettings />, path: "/settings" },
  ];

  // Add Admin Management only if the logged-in user is a super admin
  // const role = "admin";
  if (role === "superAdmin") {
    menuItems.push({
      id: 6,
      name: "Admin Managment",
      icon: <AiOutlineDashboard />,
      path: "/admin-managment",
    });

    // console.log("admin feature added sucessfully");
  }
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <IoLogoTwitter />
        <h3>Task Manager</h3>
      </div>
      <div className="notification_link">
        <div>
          <AiOutlineDashboard />
        </div>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={"/home/task-overview"}
        >
          <div>Dashboard</div>
        </Link>
      </div>
      {menuItems.map((item, index) => (
        <div key={index}>
          <SidebarItems item={item} />
        </div>
      ))}

      <div className="notification_link">
        <div>
          <SlCalender />
        </div>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={"/home/calender-view-week"}
        >
          {" "}
          Calender Managment
        </Link>
      </div>
      <div className="notification_link">
        <div>
          <IoIosNotifications />
        </div>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={"/home/notification"}
        >
          {" "}
          Notificaton
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
