import React from "react";
import "./ViewTeamMembers.css";
import '../ViewAllTasks/ViewAllTasks.css'
import "../Navbar/Navbar.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

import { CiSearch } from "react-icons/ci";
import ViewTeamMemberCard from "../ViewTeamMemberCard/ViewTeamMemberCard";

const ViewTeamMembers = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Vikas Verma",
      employeeId: "2346799",
      role: "Sales",
      contactNumber: "+91 34589326934",
      email: "vikasverma4851@gmail.com",
      cardHeading: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae officiis accusamus nostrum est maxime nesciunt fuga quis voluptatibus sapiente!",
    },
    {
      id: 2,
      name: "Anjali Sharma",
      employeeId: "4561237",
      role: "Developer",
      contactNumber: "+91 7894561230",
      email: "anjali.sharma@example.com",
      cardHeading: "Software development and innovation.",
      description:
        "Experienced in building scalable web applications with a strong focus on performance and usability.",
    },
    {
      id: 3,
      name: "Rahul Singh",
      employeeId: "7890456",
      role: "Marketing",
      contactNumber: "+91 9876543210",
      email: "rahul.singh@example.com",
      cardHeading: "Expert in digital marketing strategies.",
      description:
        "Specializes in SEO, SEM, and social media marketing to drive business growth.",
    },
    {
      id: 4,
      name: "Priya Jain",
      employeeId: "3216548",
      role: "Designer",
      contactNumber: "+91 8523697410",
      email: "priya.jain@example.com",
      cardHeading: "Creative designs that stand out.",
      description:
        "Passionate about creating visually appealing and user-friendly designs.",
    },
    {
      id: 5,
      name: "Priya Jain",
      employeeId: "3216548",
      role: "Designer",
      contactNumber: "+91 8523697410",
      email: "priya.jain@example.com",
      cardHeading: "Creative designs that stand out.",
      description:
        "Passionate about creating visually appealing and user-friendly designs.",
    },
    {
      id: 6,
      name: "Priya Jain",
      employeeId: "3216548",
      role: "Designer",
      contactNumber: "+91 8523697410",
      email: "priya.jain@example.com",
      cardHeading: "Creative designs that stand out.",
      description:
        "Passionate about creating visually appealing and user-friendly designs.",
    },
    {
      id: 7,
      name: "Priya Jain",
      employeeId: "3216548",
      role: "Designer",
      contactNumber: "+91 8523697410",
      email: "priya.jain@example.com",
      cardHeading: "Creative designs that stand out.",
      description:
        "Passionate about creating visually appealing and user-friendly designs.",
    },
    {
      id: 8,
      name: "Priya Jain",
      employeeId: "3216548",
      role: "Designer",
      contactNumber: "+91 8523697410",
      email: "priya.jain@example.com",
      cardHeading: "Creative designs that stand out.",
      description:
        "Passionate about creating visually appealing and user-friendly designs.",
    },
    {
      id: 9,
      name: "Priya Jain",
      employeeId: "3216548",
      role: "Designer",
      contactNumber: "+91 8523697410",
      email: "priya.jain@example.com",
      cardHeading: "Creative designs that stand out.",
      description:
        "Passionate about creating visually appealing and user-friendly designs.",
    },
    {
      id: 10,
      name: "Priya Jain",
      employeeId: "3216548",
      role: "Designer",
      contactNumber: "+91 8523697410",
      email: "priya.jain@example.com",
      cardHeading: "Creative designs that stand out.",
      description:
        "Passionate about creating visually appealing and user-friendly designs.",
    },
    {
      id: 11,
      name: "Priya Jain",
      employeeId: "3216548",
      role: "Designer",
      contactNumber: "+91 8523697410",
      email: "priya.jain@example.com",
      cardHeading: "Creative designs that stand out.",
      description:
        "Passionate about creating visually appealing and user-friendly designs.",
    },
  ];

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

  return (
    <>
      <div className="view_team_member_div">
        <div className="team_member_search_heading">
          <h3>View Team Members</h3>
          <div className="team-search-container">
            <input
              id="team-search-field"
              type="text"
              placeholder="Search for Stocks and more"
            />

            <span className="team-search-icon">
              <CiSearch />
            </span>
          </div>
        </div>
        <div className="view_team_member_nav">
          <div>Lorem, ipsum.</div>
          <div>Lorem, ipsum.</div>
          <div>Lorem, ipsum.</div>
          <div>Lorem, ipsum.</div>
          <div>Lorem, ipsum.</div>
          <div>Lorem, ipsum.</div>
          <div>Lorem, ipsum.</div>
          <div>Lorem, ipsum.</div>
        </div>
        <div className="card_component_div">
          {teamMembers.map((member) => (
            <ViewTeamMemberCard key={member.id} name={member.name} />
          ))}
        </div>
      </div>
      <div className="page_navigator">
        <div>
          <p style={{color:'white'}}>1-6 of 256</p>
        </div>
        <div className="change_page_div">
          <div className="row_per_page_div">
            <p>Rows per page: </p>
            <p>5</p>
          </div>
          <div>
            <button onClick={handleScrollBack} className="back_forward_icons">
              <IoMdArrowRoundBack />
            </button>
            <button
              onClick={handleScrollForward}
              className="back_forward_icons"
            >
              <IoMdArrowRoundForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewTeamMembers;
