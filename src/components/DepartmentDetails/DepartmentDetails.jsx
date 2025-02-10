import React, { useState } from "react";
import "./DepartmentDetails.css";
import { MdEdit } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import DepartmentMemberTable from "../DepartmentMemberTable/DepartmentMemberTable";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

const DepartmentDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // You can make this dynamic later if needed
  // Dummy data for department members
  const adminData = [
    {
      id: 1,
      firstName: "Shubham",
      lastName: "Sharma",
      profileImage: "https://via.placeholder.com/40", // Placeholder image URL
    },
    {
      id: 2,
      firstName: "Aman",
      lastName: "Gupta",
      profileImage: "https://via.placeholder.com/40", // Placeholder image URL
    },
    {
      id: 3,
      firstName: "Priya",
      lastName: "Verma",
      profileImage: "https://via.placeholder.com/40", // Placeholder image URL
    },
  ];
  
  
  const members = [
    {
      id: 1,
      name: "Subham Sharma",
      idNumber: "429687320",
      email: "oiarghe@gmail.com",
      phone: "1234567890",
      description: "Small description of the department Brief description.",
    },
    {
      id: 2,
      name: "Aman Gupta",
      idNumber: "329483729",
      email: "aman.gupta@example.com",
      phone: "0987654321",
      description: "Worked in project management and team coordination.",
    },
    {
      id: 3,
      name: "Priya Verma",
      idNumber: "120498734",
      email: "priya.verma@example.com",
      phone: "1122334455",
      description: "Specialized in data analytics and market research.",
    },
    {
      id: 4,
      name: "Raj Kumar",
      idNumber: "231749203",
      email: "raj.kumar@example.com",
      phone: "9988776655",
      description: "Experienced in software development and engineering.",
    },
    {
      id: 5,
      name: "Raj Kumar",
      idNumber: "231749203",
      email: "raj.kumar@example.com",
      phone: "9988776655",
      description: "Experienced in software development and engineering.",
    },
    {
      id: 6,
      name: "Raj Kumar",
      idNumber: "231749203",
      email: "raj.kumar@example.com",
      phone: "9988776655",
      description: "Experienced in software development and engineering.",
    },
    {
      id: 7,
      name: "Raj Kumar",
      idNumber: "231749203",
      email: "raj.kumar@example.com",
      phone: "9988776655",
      description: "Experienced in software development and engineering.",
    },
  ];
  // Calculate the departments to display based on pagination
  const startIndex = (currentPage - 1) * rowsPerPage;
  const membersData = members.slice(startIndex, startIndex + rowsPerPage);

  //   Pagination handling
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage * rowsPerPage < members.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="department_details_container">
      <h3>Department Details</h3>
      <div className="department_details_div">
        <div>
          <label htmlFor="departmentName">Department Name: </label>
          <p id="departmentName">MARKETING</p>
        </div>
        <div>
          <label htmlFor="departmentDescription">
            Department Description:{" "}
          </label>
          <p id="departmentDescription" style={{ height: "70px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias
            eaque perferendis commodi. Voluptatum nesciunt veniam error id
            debitis illum quas est accusamus sit eum.
          </p>
        </div>
        <div>
          <label htmlFor="departmentName">Admins in Charge: </label>
          <div className="admin_profile_div">
            { adminData.map((admin)=>(

           
            <div className="admin_in_charge">
              <div>
                <img src="" alt="profile" />
              </div>
              <div className="departmentDetails_profile_name">
                <div>{admin.firstName}</div>
                <div>{admin.lastName}</div>
              </div>
            </div>
             ))}
            <IoMdAddCircleOutline style={{ width: "35px", height: "40px" }} />
          </div>
        </div>
        <div className="departmentDetials_edit_btn">
          <MdEdit />
          {"    "}
          Edit
        </div>
      </div>
      <div className="department_people_table_heading">
        <div className="table_heading_items_div">
          <FaUserEdit />
          <p>Name</p>
        </div>
        <div className="table_heading_items_div">
          <FaUserEdit />
          <p>Employee ID</p>
        </div>
        <div className="table_heading_items_div">
          <FaUserEdit />
          <p>Email</p>
        </div>
        <div className="table_heading_items_div">
          <FaUserEdit />
          <p>Phone</p>
        </div>
        <div className="table_heading_items_div">
          <FaUserEdit />
          <p>Description</p>
        </div>
        <div className="table_heading_items_div">
          <p>Actions</p>
        </div>
      </div>
      <div className="DepartmentMemberTable_scrollar">
        {membersData.map((members) => (
          <DepartmentMemberTable member={members} />
        ))}
      </div>
      {/* Page navigator */}
      <div className="page_navigator">
        <div>{`Showing ${startIndex + 1}-${Math.min(
          startIndex + rowsPerPage,
          members.length
        )} of ${members.length}`}</div>
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
    </div>
  );
};

export default DepartmentDetails;
