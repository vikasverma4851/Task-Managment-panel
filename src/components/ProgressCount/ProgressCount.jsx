import React from "react";
import { IoMdAdd } from "react-icons/io";
import "../../pages/Dashboard/Dashboard.css";
const ProgressCount = ({ title, count, icon, color }) => {
  return (
    <div className="progress_count" style={color}>
      <div className="content_count">
        <p>{title}</p>
        {/* <p className="count_task" style={color} >{count}</p> */}
      </div>
      {/* <div>{icon}</div> */}
    </div>
  );
};

export default ProgressCount;
