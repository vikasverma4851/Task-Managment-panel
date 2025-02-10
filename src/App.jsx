import "./App.css";
import { createContext, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import ProtectedRoute from "./routes/ProtectedRoute";
import axios from "axios";
import { toast } from "react-toastify";

const UserContext = createContext();

function App() {
  const [userDetails, setUserDetails] = useState(null);
  const [role, setRole] = useState("");
  // Create a state for token that initializes from localStorage
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    // Retrieve the role from localStorage (if exists)
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  // for User Details
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from localStoarge
        if (!token) {
          toast.error("User not authenticated");
          return;
        }

        const response = await axios.get(
          "http://16.171.8.84:8085/api/get/by/id/admin/auth",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Pass token in the headers
            },
          }
        );

        // console.log("api comming", response.data.data.name);

        setUserDetails(response.data.data);

        // toast.success("User details Fetched Successfully");
      } catch (error) {
        toast.error(error.response.data.message);
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [token, setUserDetails]);
  return (
    <>
      <UserContext.Provider
        value={{ role, setRole, userDetails, setUserDetails, token, setToken }}
      >
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route
            path={"/home/*"}
            element={
              <ProtectedRoute>
                <div className="container">
                  <div className="left-container">
                    <Sidebar />
                  </div>
                  <div className="right-container">
                    <RightContainer />
                  </div>
                </div>
              </ProtectedRoute>
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
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };
