import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CalenderViewWeek.css"; // Custom styles for the calendar

const CalenderViewWeek = () => {
  const [startDate, setStartDate] = useState(new Date("2045-05-21"));
  const [endDate, setEndDate] = useState(new Date("2045-05-26"));

  // Generate week dates dynamically
  const generateWeekDates = (start) => {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      week.push(day.toISOString().split("T")[0]); // Convert to yyyy-mm-dd format
    }
    return week;
  };

  const [weekDates, setWeekDates] = useState(generateWeekDates(startDate));

  const handlePrev = () => {
    const newStart = new Date(startDate);
    const newEnd = new Date(endDate);
    newStart.setDate(startDate.getDate() - 7);
    newEnd.setDate(endDate.getDate() - 7);
    setStartDate(newStart);
    setEndDate(newEnd);
    setWeekDates(generateWeekDates(newStart));
  };

  const handleNext = () => {
    const newStart = new Date(startDate);
    const newEnd = new Date(endDate);
    newStart.setDate(startDate.getDate() + 7);
    newEnd.setDate(endDate.getDate() + 7);
    setStartDate(newStart);
    setEndDate(newEnd);
    setWeekDates(generateWeekDates(newStart));
  };

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  const tasks = [
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

  const navigate = useNavigate();

  const handleDayClick = (date) => {
    const filteredTasks = tasks.filter(
      (task) => task.startDate <= date && task.dueDate >= date
    );

    console.log(
      "Navigating to day view with date:",
      date,
      "and tasks:",
      filteredTasks
    );

    navigate("/home/calender-view-day", {
      state: { date, tasks: filteredTasks },
    });
  };

  return (
    <div className="CalenderViewWeek_container">
      <div className="calenderView_heading">
        <h3>Task Management</h3>
        <div className="date-navigator">
          <button className="nav-button" onClick={handlePrev}>
            &lt;
          </button>
          <span className="date-range">{`${formatDate(
            startDate
          )} – ${formatDate(endDate)}, ${startDate.getFullYear()}`}</span>
          <button className="nav-button" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>

      <div className="task-calendar">
        <table className="calendar-table">
          <thead>
            <tr>
              <th>time</th>
              {weekDates.map((date) => (
                <th
                  key={date}
                  className="day"
                  onClick={() => handleDayClick(date)}
                  style={{ cursor: "pointer" }}
                >
                  {new Date(date).toLocaleDateString("en-US", {
                    weekday: "short",
                    day: "numeric",
                  })}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => {
              // Find the start and end index for the task based on the weekDates
              const taskStartIdx = weekDates.indexOf(task.startDate);
              const taskEndIdx = weekDates.indexOf(task.dueDate);

              // Skip rendering tasks that are completely outside the current week
              if (taskStartIdx === -1 && taskEndIdx === -1) return null;

              // Adjust start and end indices if they partially overlap with the week
              const adjustedStartIdx = taskStartIdx === -1 ? 0 : taskStartIdx;
              const adjustedEndIdx =
                taskEndIdx === -1 ? weekDates.length - 1 : taskEndIdx;

              return (
                <tr key={task.id}>
                  <td
                    style={{
                      color: "white",
                      borderRight: "1px solid #ccc",
                      borderBottom: "1px solid grey",
                    }}
                  >
                    {task.id}
                  </td>

                  {/* Render empty cells before the task's start date */}
                  {Array(adjustedStartIdx)
                    .fill(null)
                    .map((_, idx) => (
                      <td
                        key={`empty-${idx}`}
                        style={{
                          borderRight: "1px solid grey",
                          borderBottom: "1px solid grey",
                        }}
                      ></td>
                    ))}

                  {/* Render the task with colSpan for its duration */}
                  <td
                    key={`task-${task.id}`}
                    colSpan={adjustedEndIdx - adjustedStartIdx + 1}
                    style={{
                      borderRight: "1px solid grey",
                      borderBottom: "1px solid grey",
                    }}
                  >
                    <strong
                      className={`task-item priority-${task.priority.toLowerCase()}`}  style={{fontSize:'13px'}}
                    >
                      {task.title} , Deadline {task.dueDate}
                    </strong>
                  </td>

                  {/* Render empty cells after the task's end date */}
                  {Array(weekDates.length - adjustedEndIdx - 1)
                    .fill(null)
                    .map((_, idx, array) => (
                      <td
                        key={`empty-after-${idx}`}
                        style={{
                          borderRight:
                            idx === array.length - 1
                              ? "none"
                              : "1px solid grey",
                          borderBottom: "1px solid grey",
                        }}
                      ></td>
                    ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalenderViewWeek;
