import React from "react";
import "./Sidebar.css";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineSetting,
} from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { FaEuroSign } from "react-icons/fa";
import SidebarItems from "../SidebarItems/SidebarItems";

const Sidebar = () => {
  const menuItems = [
    {
      id: 1,
      name: "Dashboard",
      icon: <AiOutlineDashboard />,
      path: "/dashboard",
    },
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
    { id: 4, name: "Pricing", icon: <FaEuroSign />, path: "/pricing" },
    { id: 5, name: "Settings", icon: <IoIosSettings />, path: "/settings" },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="" alt="logo" />
        <h3>Task Manager</h3>
      </div>
      {menuItems.map((item, index) => (
        <div key={index}>
          <SidebarItems item={item} />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
