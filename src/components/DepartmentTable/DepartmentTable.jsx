import React from "react";
import "./DepartmentTable.css";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const DepartmentTable = ({ name, description }) => {
  return (
    <div className="departmentTable_container">
      <div style={{width:'100px'}}>{name}</div>
      <div style={{width:'400px' ,height:'20px',overflow:'hidden'}}>{description}</div>

      <div className="task_comment_container">
        <div className="group_profile_div">
          <div className="profile-icons">
            <img src="profile1.jpg" alt="Profile 1" className="profile-img" />
            <img src="profile2.jpg" alt="Profile 2" className="profile-img" />
            <img src="profile3.jpg" alt="Profile 3" className="profile-img" />
          </div>
        </div>
      </div>

      <div className="edit_delete_div">
        <AiFillEdit />
        <MdDelete />
      </div>
    </div>
  );
};

export default DepartmentTable;
