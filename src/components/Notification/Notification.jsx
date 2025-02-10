import React from "react";
import "../ViewTeamMembers/ViewTeamMembers.css";
import "./Notification.css";
import { CiSearch } from "react-icons/ci";
import NotificationCard from "../NotificationCard/NotificationCard";

const Notification = () => {
  const dummyNotifications = [
    {
      id: 1,
      title: "Task Completed",
      message:
        "You successfully completed the onboarding process. You successfully completed the onboarding process.You successfully completed the onboarding process.You successfully completed the onboarding process.You successfully completed the onboarding process.",
    },
    {
      id: 2,
      title: "Profile Updated",
      message: "Your profile has been updated successfully.",
    },
    {
      id: 3,
      title: "Password Changed",
      message: "Your password was changed on 24th Jan at 10:00 AM.",
    },
    {
      id: 4,
      title: "New Message",
      message: "You received a new message from John Doe.",
    },
    {
      id: 5,
      title: "Subscription Active",
      message: "Your subscription is now active until 24th Feb.",
    },
    {
      id: 6,
      title: "New Connection",
      message: "Jane Smith added you as a connection.",
    },
    {
      id: 7,
      title: "Event Reminder",
      message: "Don't forget the team meeting tomorrow at 3:00 PM.",
    },
    {
      id: 8,
      title: "Update Available",
      message: "A new update for your app is now available.",
    },
    {
      id: 9,
      title: "Payment Successful",
      message: "Your payment of $50.00 was successful.",
    },
    {
      id: 10,
      title: "Task Reminder",
      message: "Don't forget to review the latest project documents.",
    },
  ];

  return (
    <div className="notification_container">
      <div className="team_member_search_heading">
        <h3 style={{ margin: "10px" }}>View Team Members</h3>
      </div>
      {/* <div
        className="view_team_member_nav"
        style={{
          color: "white",
          padding: "15px",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
      </div> */}
      <div className="notification_row_div">
        {dummyNotifications.map((items,index) => (
          <NotificationCard title={items.title} message={items.message} key={index} />
        ))} 
      </div>
    </div>
  );
};

export default Notification;
