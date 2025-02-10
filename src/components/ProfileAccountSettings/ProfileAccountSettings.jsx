import React, { useContext } from "react";
import "./ProfileAccountSettings.css";
import { IoMdPerson } from "react-icons/io";
import profile_icon from "../../assets/profile_icon.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { UserContext } from "../../App";

const ProfileAccountSettings = () => {
  const { userDetails } = useContext(UserContext);
  return (
    <div className="profileAccountSettings_container">
      <div className="profile_cover_background"></div>
      <div className="profile_div">
        <div style={{ border: "1px solid #734900", borderRadius: "50%" }}>
          <img
            src={profile_icon}
            alt="profile_image"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div className="profile_img_">
          <h3>Vikas Verma</h3>
          <div>ID: 2346799</div>
        </div>
      </div>
      <form className="profileAccountSettings_form">
        <div>
          <label htmlFor="name">
            <IoMdPerson /> Name
          </label>
          <input
            type="text"
            name="name"
            id=""
            placeholder=""
            value={userDetails && userDetails.name}
          />
        </div>
        <div>
          <label htmlFor="mobileNumber">
            <FaPhoneAlt /> Contact Number:{" "}
          </label>
          <input
            type="Number"
            name="mobileNumber"
            id=""
            placeholder="Mobile no."
            value={userDetails && userDetails.mobileNo}
          />
        </div>
        <div>
          <label htmlFor="email">
            <MdOutlineEmail /> Email:{" "}
          </label>
          <input type="email" name="email" id="" placeholder="Email Address"   value={userDetails && userDetails.email} />
        </div>
        <div>
          <label htmlFor="department">
            <IoMdPerson /> Department:{" "}
          </label>
          <input type="text" name="department" id="" placeholder="Department"   value={userDetails && userDetails.department} />
        </div>
        <div>
          <label htmlFor="description">
            <IoMdPerson /> Desciption:{" "}
          </label>

          <textarea
            name="description"
            placeholder="Description..."
            style={{ paddingBottom: "80px" }}
            value={userDetails && userDetails.description}
          ></textarea>
        </div>
        <div>
          <button type="submit" className="profileAccount_btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileAccountSettings;
