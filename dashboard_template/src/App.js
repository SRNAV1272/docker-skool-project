import './App.css';
import { useRoutes, Outlet, Navigate } from 'react-router-dom'
import SPrivateRoutes from './Components/Routes/SPrivateRoutes';
import Login from './Components/Login/Login';
import SDashboard from './Components/Dashboard/StudentDashboard';
import StudentProfile from './Components/Student/StudentProfile';
import TDashboard from './Components/Dashboard/TeacherDashboard';
import TPrivateRoutes from './Components/Routes/TPrivateRoutes';
import Fees from './Components/Student/StudentFees';
import Notifications from './Components/Student/Notifications';
import SHome from './Components/Student/SHome';
import PasswordChange from './Components/Student/PasswordChange';
import SAbout from './Components/Student/SAbout';
import Breadcrumb from './Components/BreadCrumbs';
import Read from './Components/Student/Read';
import New from './Components/Student/New';
import Signup from './Components/Student/Signup/SignUp';
import './App.scss'
import BasicInfo from './Components/Student/Signup/BasicInfo';
import UpdateState, { SetContext, initialState } from './Components/Student/Signup/Reducer';
import { useReducer } from 'react';
import Address from './Components/Student/Signup/Address';



function App() {

  var [currentStep, dispatch] = useReducer(UpdateState, initialState);

  const WebRoutes = [
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
      path: '/signup',
      element:
        <SetContext.Provider value={{ currentStep, dispatch }}>
          <Signup />
        </SetContext.Provider>
      ,
      children: [
        {
          path: 'basic_info',
          element:
            <BasicInfo />
        },
        {
          path: 'address',
          element:
            <Address />
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
            <>
              <SDashboard>
                <Outlet />
              </SDashboard>
            </>,
          children: [
            {
              path: 'dashboard',
              element:
                <>
                  <Breadcrumb />
                  <SHome />
                </>
            },
            {
              path: 'profile',
              element:
                <>
                  <Breadcrumb />
                  <StudentProfile />
                </>,
              children: [
                {
                  path: 'about',
                  element: <SAbout />
                },
                {
                  path: 'password',
                  element: <PasswordChange />
                }
              ]

            },
            {
              path: 'notifications',
              element:
                <>
                  <Breadcrumb />
                  <Notifications />
                </>,
              children: [
                {
                  path: 'new',
                  element: <New />
                },
                {
                  path: 'read',
                  element: <Read />
                }
              ]
            },
            {
              path: 'fees',
              element:
                <>
                  <Breadcrumb />
                  <Fees />
                </>
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
  ]

  const routes = useRoutes(WebRoutes)


  console.log("Display", initialState)
  return routes
}

export default App;
