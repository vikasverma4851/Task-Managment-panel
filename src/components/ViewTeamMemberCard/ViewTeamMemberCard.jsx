import React from "react";
import "../ViewTeamMembers/ViewTeamMembers.css";
import { CgProfile } from "react-icons/cg";
import { FaCode } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

const ViewTeamMemberCard = () => {
  return (
    <div className="view_team_members_div">
      <div className="card_profile">
        <div className="viewTeamMembers_profile_div">
          <div>
            <CgProfile style={{ height: "50px", width: "35px" }} />
          </div>
          <div>
            <p>Vikas Verma</p>
            <p>ID: 2346799</p>
          </div>
        </div>
        <div className="sales_div">
          <FaCode style={{ color: "#1F75FE" }} />
          <p>Sales</p>
        </div>
        <div>
          <BsThreeDotsVertical />
        </div>
      </div>
      <div className="contact_details_div">
        <span>+91 34589326934</span>
        <span>vikasverma4851@gmail.com</span>
      </div>

      <div className="card_heading">
        Lorem ipsum dolor sit amet consectetur.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        repudiandae officiis accusamus nostrum est maxime nesciunt fuga quis
        voluptatibus sapiente!
      </div>
    </div>
  );
};

export default ViewTeamMemberCard;
