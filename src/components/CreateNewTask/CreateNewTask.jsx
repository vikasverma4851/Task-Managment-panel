import React, { useState } from "react";
import "./CreateNewTask.css";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const CreateNewTask = () => {
  const [goNext, setGoNext] = useState(false);
  const [frequency, setfrequency] = useState("daily");

  return (
    <div className="createNewTask_container">
      <div className="createNewTask_heading">
        <h3>Create Recurrence Task</h3>
        <div className="createNewTask_buttons">
          {/* <button type="submit">
            <Link to={"/home/bulk-task"}>Bulk Task</Link>
          </button> */}
          <button type="submit">
            {" "}
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/home/create-new-task-schedule"}
            >
              Single Task
            </Link>
          </button>
        </div>
      </div>

      <div className="createNewTask_form">
        <div className="Schedule_Task_div">
          <h5 onClick={(e) => setGoNext(false)} style={{ cursor: "pointer" }}>
            <span className="one_two_icon">1</span> Task Detail
          </h5>
          <IoIosArrowForward style={{ color: "grey" }} />
          <h5>
            <span
              className="one_two_icon"
              style={{ backgroundColor: `${goNext ? "blue" : "grey"}` }}
            >
              2
            </span>{" "}
            Schedule
          </h5>
          <IoIosArrowForward style={{ color: "grey" }} />
        </div>
        <form
          className="createNewTask_form
        " style={{border:'none'}}
        >
          {!goNext && (
            <>
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
                <input
                  type="text"
                  name="Assignee"
                  id=""
                  placeholder="Assignee"
                />
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
                <button type="submit" onClick={() => setGoNext(true)}>
                  Go Next
                </button>
              </div>
            </>
          )}

          {/* schedule task */}

          {goNext && (
            <>
              <div>
                <label htmlFor="Frequency">
                  <IoMdPerson /> Frequency:
                </label>
                <div className="freq_btn">
                  <button
                    type="button"
                    style={{
                      backgroundColor: `${
                        frequency === "daily" ? "blue" : "#4e4b4b"
                      }`,
                    }}
                    onClick={() => setfrequency("daily")}
                  >
                    Daily
                  </button>
                  <button
                    type="button"
                    style={{
                      backgroundColor: `${
                        frequency === "weekly" ? "blue" : "#4e4b4b"
                      }`,
                    }}
                    onClick={() => setfrequency("weekly")}
                  >
                    Weekly
                  </button>
                  <button
                    type="button"
                    style={{
                      backgroundColor: `${
                        frequency === "monthly" ? "blue" : "#4e4b4b"
                      }`,
                    }}
                    onClick={() => setfrequency("monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    style={{
                      backgroundColor: `${
                        frequency === "yearly" ? "blue" : "#4e4b4b"
                      }`,
                    }}
                    onClick={() => setfrequency("yearly")}
                  >
                    Yearly
                  </button>

                  {/* <input type="radio" name="daily" />
                  <input type="radio"  name="weekly" />
                  <input type="radio" name="monthly" />
                  <input type="radio"  name="yearly" /> */}
                </div>
              </div>
              <div>
                <label htmlFor="days">
                  <IoMdPerson /> Days:
                </label>
                <div className="freq_btn">
                  <div>
                    <input type="checkbox" id="sunday" name="sunday" />
                    <label htmlFor="sunday">Sunday</label>
                  </div>
                  <div>
                    <input type="checkbox" id="monday" name="monday" />
                    <label htmlFor="monday">Monday</label>
                  </div>
                  <div>
                    <input type="checkbox" id="tuesday" name="tuesday" />
                    <label htmlFor="tuesday">Tuesday</label>
                  </div>
                  <div>
                    <input type="checkbox" id="wednesday" name="wednesday" />
                    <label htmlFor="wednesday">Wednesday</label>
                  </div>
                  <div>
                    <input type="checkbox" id="thursday" name="thursday" />
                    <label htmlFor="thursday">Thursday</label>
                  </div>
                  <div>
                    <input type="checkbox" id="friday" name="friday" />
                    <label htmlFor="friday">Friday</label>
                  </div>
                  <div>
                    <input type="checkbox" id="saturday" name="saturday" />
                    <label htmlFor="saturday">Saturday</label>
                  </div>
                </div>
              </div>
              {/* <div>
                <label htmlFor="Priority">
                  <IoMdPerson /> Reapeat Every:
                </label>
                <select name="Priority" id="">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div> */}
              <div>
                <label htmlFor="reapeatEvery">
                  <IoMdPerson /> Reapeat Every:
                </label>

                <input
                  type="text"
                  name="reapeatEvery"
                  id="ReapeatEvery"
                  placeholder="Reapeat days"
                />
              </div>
              <div>
                <label htmlFor="starttime">
                  <IoMdPerson /> Start Time:
                </label>

                <input type="time" name="startTime" id="startTime" />
              </div>
              <div>
                <label htmlFor="duration">
                  <IoMdPerson /> Duration:
                </label>

                <input
                  type="text"
                  name="duration"
                  id="duration"
                  placeholder="Set task length Example 1,2,3 Days"
                />
              </div>

              <div>
                <button style={{padding: "10px 60px", marginTop: '70px' }}>
                  Create
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateNewTask;
