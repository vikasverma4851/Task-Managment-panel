import React, { useState, useRef } from "react";
import "./ViewAllTasks.css";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import TaskTable from "../TaskTable/TaskTable";

const ViewAllTasks = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  const tasks = [
    {
      id: 1,
      title: "Task 1",
      dueDate: "2025-01-30",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      title: "Task 2",
      dueDate: "2025-02-10",
      priority: "Medium",
      status: "InProcess",
    },
    {
      id: 3,
      title: "Task 3",
      dueDate: "2025-01-28",
      priority: "Low",
      status: "Online",
    },
    {
      id: 4,
      title: "Task 1",
      dueDate: "2025-01-30",
      priority: "High",
      status: "Pending",
    },
    {
      id: 5,
      title: "Task 2",
      dueDate: "2025-02-10",
      priority: "Low",
      status: "InProcess",
    },
    {
      id: 6,
      title: "Task 3",
      dueDate: "2025-01-28",
      priority: "High",
      status: "Online",
    },
    {
      id: 7,
      title: "Task 1",
      dueDate: "2025-01-30",
      priority: "High",
      status: "Pending",
    },
    {
      id: 8,
      title: "Task 2",
      dueDate: "2025-02-10",
      priority: "Medium",
      status: "InProcess",
    },
    {
      id: 9,
      title: "Task 3",
      dueDate: "2025-01-28",
      priority: "Low",
      status: "Online",
    },
  ];

  const taskStatusNav = [
    "Current Tasks",
    "Incomplete Tasks",
    "Completed Tasks",
    "InProcess Tasks",
  ];

  // Filter tasks based on the active tab
  const getFilteredTasks = () => {
    switch (activeTab) {
      case 1: // Incomplete Tasks
        return tasks.filter(
          (task) => task.status === "Pending" || task.status === "InProcess"
        );
      case 2: // Completed Tasks
        return tasks.filter((task) => task.status === "Online");
      case 3: // InProcess Tasks
        return tasks.filter((task) => task.status === "InProcess");
      default: // Current Tasks (All)
        return tasks;
    }
  };

  const handleScrollBack = () => {
    scrollContainerRef.current.scrollBy({
      top: -200,
      behavior: "smooth",
    });
  };

  const handleScrollForward = () => {
    scrollContainerRef.current.scrollBy({
      top: 200,
      behavior: "smooth",
    });
  };

  const handleTaskClick = (tasks) => {
    console.log("Task clicked:", tasks);
    navigate(`/home/task/${tasks.id}`, { state: tasks });
  };

  return (
    <div className="view_task_container">
      <div className="view_all_task">
        <div className="view_task_heading">
          <h2>Task Managment</h2>
          <p>{`1-${getFilteredTasks().length} of ${tasks.length}`}</p>
        </div>

        <div className="all_task_table">
          <div>
            <ul className="task_status_nav">
              {taskStatusNav.map((status, index) => (
                <div
                  key={index}
                  className={`task_status_item ${
                    activeTab === index ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <li>{status}</li>
                  <div className="line_hover"></div>
                </div>
              ))}
            </ul>
            <hr style={{ margin: "0px 20px" }} />
          </div>

          <div className="task_table_heading">
            <div className="table_heading_items_div">
              <FaUserEdit />
              <p>Task title</p>
            </div>
            <div className="table_heading_items_div">
              <FaUserEdit />
              <p>Due date</p>
            </div>
            <div className="table_heading_items_div">
              <FaUserEdit />
              <p>Priority</p>
            </div>
            <div className="table_heading_items_div">
              <FaUserEdit />
              <p>Assignees</p>
            </div>
            <div className="table_heading_items_div">
              <FaUserEdit />
              <p>Status</p>
            </div>
            <div className="table_heading_items_div">
              <p>Edit / Delete</p>
            </div>
          </div>
        </div>

        {/* Rows  */}
        <div className="scrollable-task-table" ref={scrollContainerRef}>
          <TaskTable
            tasks={getFilteredTasks()}
            highlightIncomplete={activeTab === 1}
            highlightCompleted={activeTab === 2}
            highlightInprocess={activeTab === 3}
            handleTaskClick={handleTaskClick}
          />
        </div>
      </div>
      {/* Page more navigator */}
      <div className="page_navigator">
        <div>{}</div>
        <div className="change_page_div">
          <div className="row_per_page_div">
            <p>Rows per page: </p>
            <p>5</p>
          </div>
          <div>
            <button onClick={handleScrollBack} className="back_forward_icons">
              <IoMdArrowRoundBack />
            </button>
            <button
              onClick={handleScrollForward}
              className="back_forward_icons"
            >
              <IoMdArrowRoundForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllTasks;
