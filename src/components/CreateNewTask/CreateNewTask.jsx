import React from "react";
import "./CreateNewTask.css";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";
const CreateNewTask = () => {
  return (
    <div className="createNewTask_container">
      <div className="createNewTask_heading">
        <h3>Create Recurrence Task</h3>
        <div className="createNewTask_buttons">
          <button type="submit">Bulk Task</button>
          <button type="submit">Single Task</button>
        </div>
      </div>

      <div className="createNewTask_form">
        <div className="Schedule_Task_div">
          <h5>Task Detail</h5>
          <h5>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/home/create-new-task-schedule"}
            >
              Schedule
            </Link>
          </h5>
        </div>
        <form
          className="createNewTask_form
        "
        >
          <div>
            <label htmlFor="taskTitle">
              <IoMdPerson /> Task Title:
            </label>
            <input
              type="text"
              name="taskTitle"
              id=""
              placeholder="Task title"
            />
          </div>
          <div>
            <label htmlFor="desciption">
              <IoMdPerson /> Desciption:
            </label>
            <textarea
              name="desciption"
              id=""
              placeholder="Desciption..."
              style={{ paddingBottom: "25px" }}
            ></textarea>
          </div>
          <div>
            <label htmlFor="Assignee">
              <IoMdPerson /> Assignee:
            </label>
            <input type="text" name="Assignee" id="" placeholder="Assignee" />
          </div>
          <div>
            <label htmlFor="Priority">
              <IoMdPerson /> Priority:
            </label>
            <select name="Priority" id="">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <label htmlFor="fileAttachments">
              <IoMdPerson /> File Attachments:
            </label>
            <input
              type="file"
              name="fileAttachments"
              placeholder="Upload File"
              style={{ paddingBottom: "50px" }}
            />
          </div>
          <div>
            <button type="submit">Go Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewTask;
