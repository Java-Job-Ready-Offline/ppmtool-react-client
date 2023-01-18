import Dashboard from "./components/Dashboard";
import MainNavigation from "./components/layout/MainNavigation";
import AddProjectForm from "./components/project/AddProjectForm";
import { Routes,Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/users/LoginForm";
import RegisterForm from "./components/users/RegisterForm";
import ProjectBoard from "./components/project/ProjectBoard";
import AddProjectTaskForm from "./components/project-task/AddProjectTaskForm";
import PrivateRoute from "./components/auth/PrivateRoute";
import { useSelector } from "react-redux";
import { getToken } from "./components/auth/authSlice";

function App() {
  const token = useSelector(getToken)

  return (
  <div>
    <MainNavigation />

    <Routes>
      <Route path='/'>
        <Route index element={<LandingPage/>} />
        <Route path='login' element={<LoginForm/>} />
        <Route path='register' element={<RegisterForm/>} />
        <Route path='dashboard' element={
          <PrivateRoute token={token}>
            <Dashboard />
          </PrivateRoute>
        }/>

        <Route path="project">
          <Route path='create' element={
            <PrivateRoute token={token}>
              <AddProjectForm />
            </PrivateRoute>
          }/>
          <Route path='edit/:projectId' element={
            <PrivateRoute token={token}>
              <AddProjectForm mode='edit' />
            </PrivateRoute>
          }/>
          <Route path='projectboard/:projectId' element={
          <PrivateRoute token={token}>
            <ProjectBoard/>
          </PrivateRoute>
          }/>
        </Route>

        <Route path='project-task'>
            <Route path="create/:projectId" element={
            <PrivateRoute token={token}>
              <AddProjectTaskForm />
            </PrivateRoute>
              }/>
            <Route path="update/:projectId/:sequence" element={
              <PrivateRoute token={token}>
              <AddProjectTaskForm mode='edit'/>
              </PrivateRoute>
              }/>
        </Route>
      </Route>
    </Routes>
  </div>);
}

export default App;
