// const Userdata = JSON.parse(sessionStorage.getItem("userData"));

import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";

// console.log("3456789", Userdata?.role);

const SideBarRoute = [
  {
    path: "/app/task-management",
    icon: <AiOutlineUser />,
    name: "Task Management",
    heading: "",
    submenu: [
      {
        path: "/app/view-all-tasks",
        name: "View All Task",
      },
      {
        path: "/app/create-new-task",
        name: "Create New Task",
      },
    ],
    // service: overView,
  },
  {
    path: "/app/Team Management",
    icon: <AiOutlineSetting />,
    name: "View Team Members",
    toggleArrowBtn: true,
    heading: "",
    submenu: [
      {
        path: "/app/view-team-members",
        name: "View Team Members",
      },
      {
        path: "/app/add-new-member",
        name: "Add New Member",
      },
    ],
    // service: reports,
  },
  {
    path: "/app/settings",
    icon: <IoIosSettings />,
    name: "Settings",
    heading: "",
  },
];

export default SideBarRoute;
