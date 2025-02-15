import React, { useState } from "react";
import "../CreateNewTask/CreateNewTask.css";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";

const CreateNewTaskSchedule = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };
  return (
    <div className="createNewTask_container">
      <div className="createNewTask_heading">
        <h3>Create Schedule Task</h3>
        <div className="createNewTask_buttons">
          <button type="submit">
            <Link
              to={"/home/create-new-task"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Schedule
            </Link>
          </button>
          <button type="submit">Single Task</button>
        </div>
      </div>

      <div className="createNewTask_form">
        <form
          className="createNewTask_form
            "
          style={{ border: "none" }}
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
            <label htmlFor="startDate">
              <IoMdPerson /> Start Date:
            </label>
            <input
              type="date"
              name="startDate"
              id=""
              placeholder="Start Date"
              style={{ color: "white" }}
            />
          </div>
          <div>
            <label htmlFor="dueDate">
              <IoMdPerson /> Due Date:
            </label>
            <input type="date" name="dueDate" id="" placeholder="due Date" />
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
              onChange={handleFileChange}
            />
            {/* {selectedFiles.length > 0 && (
              <div>
                <h3>Selected files:</h3>
                <ul>
                  {selectedFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>
          <div>
            <button type="submit">Create Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewTaskSchedule;
