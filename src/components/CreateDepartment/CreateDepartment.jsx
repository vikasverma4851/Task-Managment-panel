import React from "react";
import { Link } from "react-router-dom";
import "./CreateDepartment.css";
import { IoMdPerson } from "react-icons/io";


const CreateDepartment = () => {
  return (
    <div className="create_department_container">
      <div className="create_department_header">
        <h3>Task Managment</h3>
        <Link to={"/home/department-list"}>DepartmentList</Link>
        <Link to={"/home/department-details"}>DepartmentDetails</Link>
      </div>
      <div className="createDepartment_div">
        <div className="create_department_form">
          <div>
            <label htmlFor="departmentName">
              <IoMdPerson /> Department Name:
            </label>
            <input
              type="text"
              name="departmentName"
              placeholder="Department Name"
              id=""
            />
          </div>
          <div>
            <label htmlFor="departmentDescription">
              <IoMdPerson /> Department Description:
            </label>
            <textarea
              name="departmentDescription"
              placeholder="Department Description"
              id=""
            ></textarea>
          </div>

          <div className="create_department_assignee_div">
            <label htmlFor="assignAdmin">
              <IoMdPerson /> Assign Admin,s:
            </label>

            <input
              type="text"
              name="assignAdmin"
              placeholder="Assign Admin"
              id=""
            />
          </div>
          <p className="assignAdmin_para">
            Note: Only admins assigned here can assign tasks within this
            department
          </p>
        </div>
        <div className="create_department_btn">
          <button type="submit">Create Department</button>
        </div>
      </div>
    </div>
  );
};

export default CreateDepartment;
