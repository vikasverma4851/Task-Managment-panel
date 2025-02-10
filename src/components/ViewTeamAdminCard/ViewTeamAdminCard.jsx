import React from "react";
import "../ViewTeamMembers/ViewTeamMembers.css";
import { CgProfile } from "react-icons/cg";
import { FaCode } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const ViewTeamAdminCard = ({
  userId,
  name,
  email,
  description,
  profilePicture,
  mobileNo,
  department,
}) => {
  return (
    <div className="view_team_members_div">
      <div className="card_profile">
        <div className="viewTeamMembers_profile_div">
          <div>
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="profile_picture"
                style={{ height: "45px", width: "45px", borderRadius: "50%" }}
              />
            ) : (
              <CgProfile style={{ height: "50px", width: "35px" }} />
            )}
          </div>
          <div>
            <p>{name}</p>
            <p style={{ color: "#AEB9E1" }}>ID: {userId}</p>
          </div>
        </div>
        <div
          className="sales_div"
          style={{
            backgroundColor: "#1f1f1f",
            border: "1px solid white",
            padding: "2px",
          }}
        >
          <FaCode style={{ color: "#1F75FE" }} />
          <p>{department}</p>
        </div>
        <div>
          <BsThreeDotsVertical />
        </div>
      </div>
      <div className="contact_details_div">
        <span style={{ marginRight: "5px" }}>
          <MdPhone />
          {"   "}
          +91 {mobileNo}
        </span>{" "}
        <br />
        <span>
          <IoMdMail />
          {"    "}
          {email}
        </span>
      </div>

      {/* <div className="card_heading">
        Lorem ipsum dolor sit amet consectetur.
      </div> */}
      <div
        style={{
          fontSize: "15px",
          color: "#C6C6C6",
          height: " 300px",
          overflow: "hidden",
        }}
      >
        {description}
      </div>
    </div>
  );
};

export default ViewTeamAdminCard;
