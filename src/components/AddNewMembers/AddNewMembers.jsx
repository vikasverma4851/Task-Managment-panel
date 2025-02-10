import React, { useState } from "react";
import "./AddNewMembers.css";
import { IoMdPerson } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import axios from "axios";
import { toast } from "react-toastify";

const AddNewMembers = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [data, setData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    username: "",
    mobileNo: "",
    shortDescription: "",
    destination: "",
    department: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    if (data.profilePicture) {
      formData.append("profilePicture", data.profilePicture);
    }

    try {
      const response = await axios.post(
        "http://16.171.8.84:8085/api/create/user",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(response.data.message);
    } catch (err) {
      toast.error(err.response.data.message || "Went Something Wrong");
      console.log("failed registration");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a preview URL for the uploaded image
      const imageUrl = URL.createObjectURL(file);
      console.log("my url", imageUrl);
      setProfilePhoto(imageUrl);
      setData((prevData) => ({ ...prevData, profilePicture: file }));
    }
  };

  const handleRemovePhoto = () => {
    setProfilePhoto(null); // Reset the profile photo
  };
  return (
    <div className="addNewMembers_container">
      <h3>Add New Members</h3>
      <div className="addNewMember_form_container">
        <div className="profile_photo_div">
          <label htmlFor="upload_photo">
            {" "}
            <IoMdPerson /> Profile Photo:{" "}
          </label>
          <div
            className="profile_photo_edit_div"
            id="upload_photo"
            style={{
              position: "relative",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f0f0f0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Image or Placeholder */}
            <div></div>

            <img
              src={profilePhoto}
              alt="Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            {/* Upload Photo Button */}
            <label
              htmlFor="profilePhoto"
              style={{
                height: "100px",
                width: "100px",
                position: "absolute",
                // backgroundColor: "#1f1f1f",
                color: "#fff",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                borderRadius: "50%",
                fontSize: "15px",
                cursor: "pointer",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CiCamera
                style={{
                  color: "grey",
                  width: "40px",
                  height: "40px",
                  opacity: "0.4",
                }}
              />
            </label>
            <input
              id="profilePhoto"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          {/* Edit Button on Top Right */}
          <button
            onClick={handleRemovePhoto}
            style={{
              backgroundColor: "#1f1f1f",
              color: "#fff",
              border: "1px solid white",
              borderRadius: "20%",
              width: "50px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "12px",
              cursor: "pointer",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            ✎ Edit
          </button>
        </div>

        {/* form feilds */}
        <div className="addNewMembers_inputField_div">
          <div>
            <div>
              <label htmlFor="name">
                <IoMdPerson /> Name:{" "}
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            {/* <div>
              <label htmlFor="id">
                <IoMdPerson /> ID:{" "}
              </label>
              <input type="text" name="id" id="" placeholder="User Id" />
            </div> */}
            <div>
              <label htmlFor="email">
                <IoMdPerson /> Email:{" "}
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="username">
                <IoMdPerson /> Username:{" "}
              </label>
              <input
                type="text"
                name="username"
                id=""
                placeholder="Username"
                value={data.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">
                <IoMdPerson /> Password:{" "}
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="mobileNo">
                <IoMdPerson /> Phone:{" "}
              </label>
              <input
                type="Number"
                name="mobileNo"
                placeholder="Phone Number"
                value={data.mobileNo}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="designation">
                <IoMdPerson /> Designation:{" "}
              </label>
              <input
                type="text"
                name="destination"
                placeholder="Designation"
                value={data.destination}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="department">
                <IoMdPerson /> Department:{" "}
              </label>
              <input
                type="text"
                name="department"
                placeholder="Department"
                value={data.department}
                onChange={handleChange}
              />
            </div>
            <div></div>
            <div>
              <label htmlFor="confirmPassword">
                <IoMdPerson /> Confirm Password:{" "}
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={data.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="shortDesciption_field">
          <label htmlFor="shortDescription">
            <IoMdPerson /> Short desciption:{" "}
          </label>
          <textarea
            name="shortDescription"
            placeholder="Short Description"
            value={data.shortDescription}
            onChange={handleChange}
          />
        </div>
        <div className="addNewMember_btn">
          <button onClick={handleSubmit}>Create Profile</button>
        </div>
      </div>
    </div>
  );
};

export default AddNewMembers;
