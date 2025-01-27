import React from "react";
import "./CountTask.css";

const CountTask = ({ image,title,count,icon}) => {
  return (
    <div className="count_container">
      <div className="count_logo">
        {image}
      </div>
      <div className="count-task">
        {/* <img src="" alt="task-logo" /> */}
        <h3>{title}</h3>
        <p>{count}</p>
      </div>
      <div>
        {icon}
      </div>
    </div>
  );
};

export default CountTask;
