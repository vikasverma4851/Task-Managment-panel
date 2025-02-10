import React, { useState } from "react";
import "./BulkTask.css"; // Import the CSS file

const BulkTask = () => {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    leader: "",
    assignee: "",
    priority: "High",
    startDate: "",
    dueDate: "",
    attachment: null,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setFormData((prev) => ({
      ...prev,
      attachment: file, // Save the file object
    }));
  };

  // Add task to the list
  const handleAddTask = () => {
    setTasks((prev) => [...prev, { ...formData, id: prev.length + 1 }]);
    setFormData({
      title: "",
      description: "",
      leader: "",
      assignee: "",
      priority: "High",
      startDate: "",
      dueDate: "",
      attachment: null,
    });
  };

  return (
    <div className="bulk_task_container">
      <h1 className="title">Bulk Task Management</h1>
      <div className="form-section">
        <h2 className="subtitle">Add New Task</h2>
        <div className="form-grid">
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={formData.title}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="leader"
            placeholder="Leader"
            value={formData.leader}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="assignee"
            placeholder="Assignee"
            value={formData.assignee}
            onChange={handleChange}
            className="input"
          />
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="input"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="input"
          />

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="input"
          />
          <div class="file-input-container">
            <input
              type="file"
              id="fileInput"
              class="file-input"
              onChange={handleFileChange}
            />
            <label for="fileInput" id="fileLabel">
              Browser
            </label>
          </div>
          <label htmlFor="fileInput" id="fileLabel">
            {formData.attachment ? formData.attachment.name : "Select File"}
          </label>

          <button onClick={handleAddTask} className="add-task-button">
            Add Task
          </button>
        </div>
      </div>
      <div className="task-table-container" >
        <h2 className="subtitle">Task List</h2>
        <table className="task-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Task Title</th>
              <th>Description</th>
              <th>Leader</th>
              <th>Assignee</th>
              <th>Priority</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Attachment</th>
            </tr>
          </thead>
          <tbody >
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <td>{index + 1}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.leader}</td>
                <td>{task.assignee}</td>
                <td
                  className={
                    task.priority === "High"
                      ? "priority-high"
                      : task.priority === "Medium"
                      ? "priority-medium"
                      : "priority-low"
                  }
                >
                  {task.priority}
                </td>
                <td>{task.startDate}</td>
                <td>{task.dueDate}</td>
                <td>
                  {task.attachment ? (
                    <a
                      href={URL.createObjectURL(task.attachment)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {task.attachment.name}
                    </a>
                  ) : (
                    "No File"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BulkTask;
