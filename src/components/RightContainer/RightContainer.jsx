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
import BulkTask from "../BulkTask/BulkTask";
import CalendarViewWeek from "../CalenderViewWeek/CalenderViewWeek";
import CalenderViewDay from "../CalenderViewDay/CalednerViewDay";
import CreateDepartment from "../CreateDepartment/CreateDepartment";
import DepartmentList from "../DepartmentlList/DepartmentList";
import DepartmentDetails from "../DepartmentDetails/DepartmentDetails";
import TaskDetails from "../TaskDetails/TaskDetails";
import ViewAllAdmins from "../ViewAllAdmins/ViewAllAdmins";
import CreateNewAdmin from "../CreateNewAdmin/CreateNewAdmin";

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
          <Route
            path="create-new-task-schedule"
            element={<CreateNewTaskSchedule />}
          />
          <Route path="bulk-task" element={<BulkTask />} />
          <Route path="calender-view-week" element={<CalendarViewWeek />} />
          <Route path="calender-view-day" element={<CalenderViewDay />} />
          <Route path="create-department" element={<CreateDepartment />} />
          <Route path="department-list" element={<DepartmentList />} />
          <Route path="department-details" element={<DepartmentDetails />} />
          <Route path="task-details" element={<TaskDetails />} />
          <Route path="view-all-admins" element={<ViewAllAdmins />} />
          <Route path="task/:id" element={<TaskDetails />} />
          <Route path="create-new-admin" element={<CreateNewAdmin />} />
          
        </Routes>

        {/* Render the child route component here */}
      </div>
    </>
  );
};

export default RightContainer;
