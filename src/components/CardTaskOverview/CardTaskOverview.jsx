import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";

const CardTaskOverview = () => {
  return (
    <div className="card_container">
      <div className="card_logo">
        <div className="overview_logo">
          <FaCode />
          <p>Designing</p>
        </div>
        <div>
          <BsThreeDotsVertical />
        </div>
      </div>
      <div>
        <h3>Task Management App</h3>
      </div>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          rem distinctio recusandae quos tenetur eveniet sed laborum quasi
          consequatur? Dolorum velit amet.
        </p>
      </div>
      <div className="priorty-container">
        <div>
          <BsFillPeopleFill />
        </div>
        <div className="priority_div">High</div>
      </div>
      <div className="comment_logo_container">
        <FaRegCommentDots />
        <div>04</div>
        <IoDocumentAttach />
        <div>09</div>
      </div>
    </div>
  );
};

export default CardTaskOverview;
