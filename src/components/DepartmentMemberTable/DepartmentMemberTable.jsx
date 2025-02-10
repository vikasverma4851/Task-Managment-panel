import React from "react";
import "./DepartmentMemberTable.css";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const DepartmentMemberTable = ({ member }) => {
  return (
    <div className="departmentMemberTable_container">
      <div className="departmentMemberTable_div" key={member.id}>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <CgProfile style={{ width: "40px", height: "40px" }} />
          <p>{member.name}</p>
        </div>
        <div>{member.idNumber}</div>
        <div>{member.email}</div>
        <div>{member.phone}</div>
        <div style={{ height: "40px", overflow: "hidden" }}>
          {member.description}
        </div>
        <div>
          <AiFillEdit />
          {"   "}
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default DepartmentMemberTable;
