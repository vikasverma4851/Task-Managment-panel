import React from "react";
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

const TaskOverview = () => {
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
        backgroundColor: "#E2FEFE",
        color: "aqua",
      },
    },
    {
      title: "In Process",
      count: "4",
      icon: <IoMdAdd />,
      color: {
        border: "2px solid #E1C013 ",
        backgroundColor: "#FFFF8F",
        color: "#E1C013",
      },
    },
    {
      title: "Completed",
      count: "4",
      icon: <IoMdAdd />,
      color: {
        border: "2px solid green",
        backgroundColor: "#ADEBB3",
        color: "green",
      },
    },
  ];
  return (
    <>
      <div className="scroller">
        <div className="count_task_container">
          {countData.map((items, index) => (
            <div>
              <CountTask
                image={items.image}
                title={items.title}
                count={items.count}
                icon={items.icon}
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
