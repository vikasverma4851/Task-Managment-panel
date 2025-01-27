import "./App.css";
import { Routes, Route } from "react-router-dom";
// import CountTask from "./components/CountTask/CountTask";
// import Navbar from "./components/Navbar/Navbar";
// import RightContainer from "../../components/RightContainer/RightContainer";
import RightContainer from "../src/components/RightContainer/RightContainer";
import Sidebar from "../src/components/Sidebar/Sidebar";
import Login from "./components/Login/Login";
import TaskOverview from "./components/TaskOverview";
import ViewAllTasks from "./components/ViewAllTasks/ViewAllTasks";
import ViewTeamMemberCard from "./components/ViewTeamMemberCard/ViewTeamMemberCard";
import ViewTeamMembers from "./components/ViewTeamMembers/ViewTeamMembers";
import Notification from "./components/Notification/Notification";
import ProfileAccountSettings from "./components/ProfileAccountSettings/ProfileAccountSettings";
import CreateNewTask from "./components/CreateNewTask/CreateNewTask";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route
          path={"/home/*"}
          element={
            <div className="container">
              <div className="left-container">
                <Sidebar />
              </div>
              <div className="right-container">
                <RightContainer />
              </div>
            </div>
          }
        >
          {/* <Route path="task-overview" element={<TaskOverview />} /> */}

          {/* <Route path="view-all-tasks" element={<ViewAllTasks/>} /> */}

          {/* <Route path="view-team-members" element={<ViewTeamMembers/>} /> */}

          {/* <Route path="notification" element={<Notification/>} /> */}

          {/* <Route
            path="profile/account-settings"
            element={<ProfileAccountSettings />}
          /> */}

          {/* <Route
            path="create-new-task"
            element={<CreateNewTask />}
          /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
