import './App.css';
import { useRoutes, Outlet, Navigate } from 'react-router-dom'
import SPrivateRoutes from './Components/Routes/SPrivateRoutes';
import Login from './Components/Login/Login';
import SDashboard from './Components/Dashboard/StudentDashboard';
import StudentProfile from './Components/Student/StudentProfile';
import TDashboard from './Components/Dashboard/TeacherDashboard';
import TPrivateRoutes from './Components/Routes/TPrivateRoutes';

function App() {

  const routes = useRoutes([
    {
      path: '/',
      children: [
        {
          path: 'login',
          element: <Login />  
        }
      ]
    },
    {
      path: '/',
      element:
        <SPrivateRoutes>
          <Outlet />
        </SPrivateRoutes>,
      children: [
        {
          path: 'student',
          element:
            <SDashboard>
              <Outlet />
            </SDashboard>,
          children: [
            {
              path: 'profile',
              element: <StudentProfile />
            }
          ]
        }
      ]
    },
    {
      path: '/',
      element:
        <TPrivateRoutes>
          <Outlet />
        </TPrivateRoutes>,
      children: [
        {
          path: 'teacher',
          element:
            <TDashboard>
              <Outlet />
            </TDashboard>,
          children: [
            {
              path: 'profile',
              element: <StudentProfile />
            }
          ]
        }
      ]
    },
    {
      path: '*',
      element: <Navigate to='/login' />
    }
  ])

  return routes

}

export default App;
