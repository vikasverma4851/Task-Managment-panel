import React from "react";
import "../ViewAllTasks/ViewAllTasks.css";
// import './TaskTable.css'
import { MdMargin } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const TaskTable = ({
  tasks,
  highlightIncomplete,
  highlightCompleted,
  highlightInprocess,
}) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return "high_priority"; // Red
      case "Medium":
        return "medium_priority"; // Yellow
      case "Low":
        return "low_priority"; // Green
      default:
        return "";
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "pending_status"; // Gray
      case "InProcess":
        return "in_progress_status"; // Blue
      case "Online":
        return "completed_status"; // Green
      default:
        return "";
    }
  };

  const current = new Date();
  return (
    <div className="task_row_table">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task_rows  ${
            highlightIncomplete &&
            (task.status === "Pending" || task.status === "InProcess")
              ? "transparent-red-overlay"
              : ""
          } ${
            highlightCompleted && task.status === "Online"
              ? "green-overlay"
              : ""
          }  ${
            highlightInprocess && task.status === "InProcess"
              ? "yellow-overlay"
              : ""
          }`}
        >
          <div>{task.title}</div>
          <div>{current.toLocaleDateString()}</div>
          <div className={`high_div ${getPriorityClass(task.priority)}`}>
            {task.priority}
          </div>
          <div className="task_comment_container">
            <div className="group_profile_div">
              <div className="profile-icons">
                <img
                  src="profile1.jpg"
                  alt="Profile 1"
                  className="profile-img"
                />
                <img
                  src="profile2.jpg"
                  alt="Profile 2"
                  className="profile-img"
                />
                <img
                  src="profile3.jpg"
                  alt="Profile 3"
                  className="profile-img"
                />
              </div>
              <p>+2</p>
            </div>
            <div className="comment_icon_div">
              <FaComment />
              <p>10</p>
            </div>
          </div>
          <div className={`pending_div ${getStatusClass(task.status)}`}>
            <GoDotFill />
            <p>{task.status}</p>
          </div>

          <div className="edit_delete_div">
            <AiFillEdit />
            <MdDelete />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskTable;
