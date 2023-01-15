import Dashboard from "./components/Dashboard";
import MainNavigation from "./components/layout/MainNavigation";
import AddProjectForm from "./components/project/AddProjectForm";
import { Routes,Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/users/LoginForm";
import RegisterForm from "./components/users/RegisterForm";
import ProjectBoard from "./components/project/ProjectBoard";
import AddProjectTaskForm from "./components/project-task/AddProjectTaskForm";

function App() {
  return (
  <div>
    <MainNavigation />

    <Routes>
      <Route path='/'>
        <Route index element={<LandingPage/>} />
        <Route path='login' element={<LoginForm/>} />
        <Route path='register' element={<RegisterForm/>} />
        <Route path='dashboard' element={<Dashboard />}/>

        <Route path="project">
          <Route path='create' element={<AddProjectForm />}/>
          <Route path='edit/:projectId' element={<AddProjectForm mode='edit' />}/>
          <Route path='projectboard/:projectId' element={<ProjectBoard/>} />
        </Route>

        <Route path='project-task'>
            <Route path="create/:projectId" element={<AddProjectTaskForm />}/>
            <Route path="update/:projectId" element={<AddProjectTaskForm mode='edit'/>}/>
        </Route>
      </Route>
    </Routes>
  </div>);
}

export default App;
