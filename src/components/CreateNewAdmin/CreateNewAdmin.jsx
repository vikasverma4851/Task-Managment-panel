import React, { useState } from "react";
import "../AddNewMembers/AddNewMembers.css";
import { IoMdPerson } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import axios from "axios";
import { toast } from "react-toastify";

const CreateNewAdmin = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    password: "",
    description: "",
    department: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  console.log("data", data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create FormData object to send form data and image
    const formData = new FormData();

    // Append the fields from the state to FormData
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    // Append the profile photo if exists
    if (data.profilePicture) {
      formData.append("profilePicture", data.profilePicture);
    }

    try {
      console.log(FormData);
      const response = await axios.post(
        "http://16.171.8.84:8085/api/create/admin/auth",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important to tell the server it's multipart
          },
        }
      );
      console.log("Resonponse Admin Created", response.data);
      toast.success(response.data.message);
    } catch (err) {
      toast.error(err.response.data.message || "Went Something Wrong");
      console.log("Failed Registeration");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // // Create a preview URL for the uploaded image
      // const imageUrl = URL.createObjectURL(file);
      // console.log("my url", imageUrl);
      // setProfilePhoto(imageUrl);
      const imageUrl = URL.createObjectURL(file);
      setProfilePhoto(imageUrl);
      setData((prevData) => ({ ...prevData, profilePicture: file })); // Update state with File object
    }
  };

  const handleRemovePhoto = () => {
    setProfilePhoto(null); // Reset the profile photo
    setData((prevData) => ({ ...prevData, profilePicture: null }));
  };
  return (
    <div className="addNewMembers_container">
      <h3>Add New Admin</h3>
      <div className="addNewMember_form_container" style={{paddingBottom:'70px'}}>
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
            {/* <div>
              <label htmlFor="username">
                <IoMdPerson /> Username:{" "}
              </label>
              <input type="text" name="username" id="" placeholder="Username" />
            </div> */}
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
            {/* <div>
              <label htmlFor="designation">
                <IoMdPerson /> Designation:{" "}
              </label>
              <input
                type="text"
                name="Designation"
                id=""
                placeholder="Designation"
              />
            </div> */}
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
            {/* <div>
              <label htmlFor="confirmPassword">
                <IoMdPerson /> Password:{" "}
              </label>
              <input
                type="password"
                name="password"
                id=""
                placeholder="Password"
              />
            </div> */}
          </div>
        </div>
        <div className="shortDesciption_field">
          <label htmlFor="description">
            <IoMdPerson /> Short desciption:{" "}
          </label>
          <textarea
            name="description"
            placeholder="Short Desciption"
            value={data.description}
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

export default CreateNewAdmin;
