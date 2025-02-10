import React, { useState, useRef } from "react";
import "./DepartmentList.css";
import DepartmentTable from "../DepartmentTable/DepartmentTable";
import { FaUserEdit } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

const DepartmentList = () => {
  const scrollContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8; // You can make this dynamic later if needed

  // Dummy data for departments
  const departmentData = [
    { id: 1, name: "Marketing", description: "Lorem ipsum dolor sit amet." },
    { id: 2, name: "Engineering", description: "Lorem ipsum dolor sit amet." },
    {
      id: 3,
      name: "Human Resources",
      description: "Lorem ipsum dolor sit amet.",
    },
    { id: 4, name: "Marketing", description: "Lorem ipsum dolor sit amet." },
    { id: 5, name: "Engineering", description: "Lorem ipsum dolor sit amet." },
    {
      id: 6,
      name: "Human Resources",
      description: "Lorem ipsum dolor sit amet.",
    },
    { id: 7, name: "Marketing", description: "Lorem ipsum dolor sit amet." },
    { id: 8, name: "Engineering", description: "Lorem ipsum dolor sit amet." },
    {
      id: 9,
      name: "Human Resources",
      description: "Lorem ipsum dolor sit amet.",
    },
  ];

  // Calculate the departments to display based on pagination
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentDepartments = departmentData.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  // Handle scroll actions
  const handleScrollBack = () => {
    scrollContainerRef.current.scrollBy({
      top: -200,
      behavior: "smooth",
    });
  };

  const handleScrollForward = () => {
    scrollContainerRef.current.scrollBy({
      top: 200,
      behavior: "smooth",
    });
  };

  // Pagination handling
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage * rowsPerPage < departmentData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="department_list_container">
        <div className="department_list_heading">
          <h2>Task Management</h2>
          <p>{`Showing ${startIndex + 1}-${Math.min(
            startIndex + rowsPerPage,
            departmentData.length
          )} of ${departmentData.length}`}</p>
        </div>

        <div className="Department_table_heading">
          <div className="departmentList_table_heading">
            <div className="table_heading_items_div">
              <FaUserEdit />
              <p>Department Name</p>
            </div>
            <div
              className="table_heading_items_div"
              style={{ marginLeft: "-10px" }}
            >
              <FaUserEdit />
              <p>Description</p>
            </div>
            <div
              className="table_heading_items_div"
              style={{ marginLeft: "300px" }}
            >
              <FaUserEdit />
              <p>Assignee</p>
            </div>
            <div className="table_heading_items_div">
              <p>Edit / Delete</p>
            </div>
          </div>
        </div>

        {/* Scrollable department list */}
        <div className="Departmentlist_scrollar" ref={scrollContainerRef}>
          {currentDepartments.map((items) => (
            <DepartmentTable
              key={items.id}
              name={items.name}
              description={items.description}
            />
          ))}
        </div>
      </div>
      {/* Page navigator */}
      <div className="page_navigator">
        <div>{`Showing ${startIndex + 1}-${Math.min(
          startIndex + rowsPerPage,
          departmentData.length
        )} of ${departmentData.length}`}</div>
        <div className="change_page_div">
          <div className="row_per_page_div">
            <p>Rows per page: </p>
            <p>{rowsPerPage}</p>
          </div>
          <div>
            <button onClick={goToPreviousPage} className="back_forward_icons">
              <IoMdArrowRoundBack />
            </button>
            <button onClick={goToNextPage} className="back_forward_icons">
              <IoMdArrowRoundForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentList;
