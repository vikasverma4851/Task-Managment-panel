import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CalenderViewDay.css"; // Ensure CSS is updated accordingly

const CalenderViewDay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { date } = location.state || { date: null };
  console.log("Location state in CalenderViewDay:", location.state);
  const [currentDate, setCurrentDate] = useState(new Date(date));
  const [tasks, setTasks] = useState([]);

  if (!date) {
    return <p>No date selected.</p>;
  }

  const allTasks = [
    {
      id: 1,
      title: "Node 1",
      startDate: "2045-05-21",
      dueDate: "2045-05-24",
      priority: "High",
    },
    {
      id: 2,
      title: "Task 2",
      startDate: "2045-05-23",
      dueDate: "2045-05-25",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Task 3",
      startDate: "2045-05-24",
      dueDate: "2045-05-26",
      priority: "Low",
    },
    {
      id: 4,
      title: "Task 4",
      startDate: "2045-05-22",
      dueDate: "2045-05-27",
      priority: "High",
    },
    {
      id: 5,
      title: "Task 4",
      startDate: "2045-05-29",
      dueDate: "2045-05-30",
      priority: "High",
    },
    {
      id: 6,
      title: "Task 4",
      startDate: "2045-06-01",
      dueDate: "2045-06-03",
      priority: "medium",
    },
  ];

  // Function to filter tasks for the selected date range
  const filterTasksByDate = (selectedDate) => {
    return allTasks.filter((task) => {
      const taskStartDate = new Date(task.startDate);
      const taskDueDate = new Date(task.dueDate);
      const selected = new Date(selectedDate);

      return selected >= taskStartDate && selected <= taskDueDate;
    });
  };

  // Fetch tasks when the component loads or when date changes
  useEffect(() => {
    const formattedDate = currentDate.toISOString().split("T")[0];
    setTasks(filterTasksByDate(formattedDate));
  }, [currentDate]);

  // Function to format date
  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  // Navigate to previous day
  const handlePrev = () => {
    const prevDate = new Date(currentDate);
    prevDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(prevDate);
  };

  // Navigate to next day
  const handleNext = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  return (
    <div className="CalenderViewDay_container">
      {/* Navigation Header with Day Switch */}
      <div className="calenderView_heading">
        <h3>Task Managment</h3>
        <div className="task_day_navigate">
          <button className="nav-button" onClick={handlePrev}>
            &lt;
          </button>
          <p
            className="date-header"
            onClick={() => navigate("/home/calender-view-week")}
            style={{ cursor: "pointer" }}
          >
            {formatDate(currentDate)}
          </p>
          <button className="nav-button" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>

      {/* Tasks Table */}
      <div className="task-calendar">
        <table className="calendar-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>
                {new Date(currentDate).toLocaleDateString("en-US", {
                  weekday: "long", // "Monday"
                  day: "numeric", // "29"
                })}
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <tr key={task.id}>
                  {/* Empty Time Column */}
                  <td
                    style={{
                      width: "100px",
                      borderRight: "1px solid grey",
                      borderBottom: "1px solid grey",
                      color: "white",
                    }}
                  >
                    {index + 1}
                  </td>

                  {/* Task spanning full row */}
                  <td
                    colSpan="1"
                    style={{
                      borderRight: "1px solid grey",
                      borderBottom: "1px solid grey",
                    }}
                  >
                    <strong
                      className={`task-item priority-${task.priority.toLowerCase()}`}
                      style={{ fontSize: "13px" }}
                    >
                      {task.title} , Deadline: {task.dueDate}
                    </strong>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="no-tasks">
                  No tasks for this day.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalenderViewDay;
