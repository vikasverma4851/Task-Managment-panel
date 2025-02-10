import React from "react";
import correct_icon from "../../assets/correct_icon.png";

const NotificationCard = ({ title, message }) => {
  return (
    <div className="notificationCard_container">
      <div className="notificationCard_img">
        <img src={correct_icon} alt="" />
      </div>
      <div className="notificationCard_content">
        <h3>{title}</h3>
        <p style={{ fontSize: "14px",width:'93%'}}>{message}</p>
      </div>
      <p className="notification_time">10 min ago</p>
    </div>
  );
};

export default NotificationCard;
