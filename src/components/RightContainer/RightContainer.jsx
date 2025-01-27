import React from "react";
import Navbar from "../Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom"; // Import Outlet to render nested routes
import "./RightContainer.css";
import TaskOverview from "../TaskOverview";
import ViewAllTasks from "../ViewAllTasks/ViewAllTasks";
import ViewTeamMembers from "../ViewTeamMembers/ViewTeamMembers";
import Notification from "../Notification/Notification";
import ProfileAccountSettings from "../ProfileAccountSettings/ProfileAccountSettings";
import CreateNewTask from "../CreateNewTask/CreateNewTask";
import AddNewMembers from "../AddNewMembers/AddNewMembers";
import CreateNewTaskSchedule from "../CreateNewTaskSchedule/CreateNewTaskSchedule";

const RightContainer = () => {
  //CountTask array

  return (
    <>
      <div className="right-container-main">
        <Navbar />
        <Routes>
          <Route path="task-overview" element={<TaskOverview />} />
          <Route path="view-all-tasks" element={<ViewAllTasks />} />
          <Route path="view-team-members" element={<ViewTeamMembers />} />
          <Route path="notification" element={<Notification />} />
          <Route
            path="profile/account-settings"
            element={<ProfileAccountSettings />}
          />
          <Route path="create-new-task" element={<CreateNewTask />} />
          <Route path="add-new-member" element={<AddNewMembers />} />
          <Route path="create-new-task-schedule" element={<CreateNewTaskSchedule />} />
        </Routes>

        {/* Render the child route component here */}
      </div>
    </>
  );
};

export default RightContainer;
