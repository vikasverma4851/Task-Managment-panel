import React, { useContext, useEffect } from "react";
import "../pages/Dashboard/Dashboard.css";
import ProgressCount from "./ProgressCount/ProgressCount";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlinePendingActions } from "react-icons/md";
import { FcProcess } from "react-icons/fc";
import { MdEditDocument } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import CardTaskOverview from "./CardTaskOverview/CardTaskOverview";
import CountTask from "./CountTask/CountTask";
import { toast } from "react-toastify";
// import axios from "axios";
// import { UserContext } from "../App";

const TaskOverview = () => {
  // const { userDetails, setUserDetails } = useContext(UserContext);
  // useEffect(() => {
  //   const fetchUserDetails = async () => {
  //     try {
  //       const token = localStorage.getItem("token"); // Get token from localStoarge
  //       if (!token) {
  //         toast.error("User not authenticated");
  //         return;
  //       }

  //       const response = await axios.get(
  //         "http://16.171.8.84:8085/api/get/by/id/admin/auth",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`, // Pass token in the headers
  //           },
  //         }
  //       );

  //       // console.log("api comming", response.data.data.name);

  //       setUserDetails(response.data.data);
  //       console.log(response.data.data.profilePicture);
  //       console.log(userDetails);

  //       toast.success("User details Fetched Successfully");
  //     } catch (error) {
  //       toast.error(error.response.data.message);
  //       console.error("Error fetching user details:", error);
  //     }
  //   };

  //   fetchUserDetails();

  // }, []);

  const countData = [
    {
      image: <GoProjectRoadmap style={{ color: "white" }} />,
      title: "Total Project",
      count: 3,
      icon: <BsThreeDotsVertical />,
    },
    {
      image: <MdOutlinePendingActions style={{ color: "blue" }} />,
      title: "Pending",
      count: 3,
      icon: <BsThreeDotsVertical />,
    },
    {
      image: <FcProcess style={{ color: "orange" }} />,
      title: "In Process",
      count: 3,
      icon: <BsThreeDotsVertical />,
    },
    {
      image: <MdEditDocument style={{ color: "green" }} />,
      title: "Completed",
      count: 3,
      icon: <BsThreeDotsVertical />,
    },
  ];

  //Progress Count Array
  const progress_count_data = [
    {
      title: "Next Up",
      count: "4",
      icon: <IoMdAdd />,
      color: {
        border: "2px solid aqua",
        backgroundColor: "rgb(226, 254, 254,0.2)",
        color: "aqua",
      },
    },
    {
      title: "In Process",
      count: "4",
      icon: <IoMdAdd />,
      color: {
        border: "2px solid #E1C013 ",
        backgroundColor: "rgb(255, 255, 143,0.3)",
        color: "#E1C013",
      },
    },
    {
      title: "Completed",
      count: "4",
      icon: <IoMdAdd />,
      color: {
        border: "2px solid green",
        backgroundColor: "rgb(173, 235, 179,0.2)",
        color: "green",
      },
    },
  ];
  return (
    <>
      <div className="scroller">
        <div className="count_task_container">
          {countData.map((items, index) => (
            <div key={index}>
              <CountTask
                image={items.image}
                title={items.title}
                count={items.count}
                icon={items.icon}
                key={index}
              />
            </div>
          ))}
        </div>
        <div className="progress_count_container">
          {progress_count_data.map((items, index) => (
            <ProgressCount
              title={items.title}
              count={items.count}
              icon={items.icon}
              color={items.color}
              key={index}
            />
          ))}
        </div>

        {/* // Card grid */}

        <div className="cards_grid">
          <div className="cardTaskOverview_container">
            <CardTaskOverview />
            <CardTaskOverview />
            <CardTaskOverview />
          </div>

          <div className="cardTaskOverview_container">
            <CardTaskOverview />
            <CardTaskOverview />
            <CardTaskOverview />
          </div>

          <div className="cardTaskOverview_container">
            <CardTaskOverview />
            <CardTaskOverview />
            <CardTaskOverview />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskOverview;
