import React, { useState } from "react";
import "./SidebarItems.css";
import { Link } from "react-router-dom";

import { RiArrowDropUpLine } from "react-icons/ri";

const SidebarItems = ({ item }) => {
  const [isSublistVisible, setIsSublistVisible] = useState(null);
  const [isRotated, setIsRotated] = useState(false);

  const submenu = {
    // 1: [
    //   { name: "Task Overview", path: "/home/task-overview" },
    //   ,
    //   { name: "Team Overview", path: "/home/team-overview" },
    //   { name: "Upcoming Deadlines", path: "/home/upcoming-deadlines" },
    // ],
    2: [
      { name: "View All Task", path: "/home/view-all-tasks" },
      ,
      { name: "Create New Task", path: "/home/create-new-task-schedule" },
    ],
    3: [
      { name: "View Team Members", path: "/home/view-team-members" },
      ,
      { name: "Add New Member", path: "/home/add-new-member" },
    ],
    // 4: [{ name: "Calender Week", path: "/home/calender-view-week" }],
    5: [
      {
        name: "Profile/Account Settings",
        path: "/home/profile/account-settings",
      },
      ,
      { name: "Change Password", path: "/home/change-password" },
    ],
    6: [
      {
        name: "View all Admins",
        path: "/home/view-all-admins",
      },
      ,
      { name: "Create New Admin", path: "/home/create-new-admin" },
      { name: "Modify Admin Role", path: "/home/modify-admin-role" },
      { name: "Remove Admin", path: "/home/remove-admin" },
      { name: "Create Department", path: "/home/create-department" },
    ],
  };

  const handleSublist = (e, id) => {
    e.preventDefault();
    setIsSublistVisible((prev) => (prev === id ? null : id));
  };

  const toggleRotation = () => {
    setIsRotated((prev) => !prev);
  };
  return (
    <div>
      <ul>
        <li onClick={toggleRotation} className="sidebarItems">
          <Link to={item.path} className="custom-link">
            <div
              className="sidebar-list"
              onClick={(e) => handleSublist(e, item.id)}
            >
              <div className="list-icon">
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
              <div
                style={{
                  transform: isRotated ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <RiArrowDropUpLine style={{ height: "30px", width: "25px" }} />
              </div>
            </div>
          </Link>
        </li>
      </ul>
      {isSublistVisible === item.id && (
        <div className="sub_list">
          <ul>
            {submenu[item.id]?.map((subItem, index) => (
              <Link style={{ textDecoration: "none" }} to={subItem.path}>
                <li key={index}>{subItem.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SidebarItems;
