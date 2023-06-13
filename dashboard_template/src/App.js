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
import { useEffect, useReducer } from 'react';
import Address from './Components/Student/Signup/Address';
import Home from './Public/Home';
import Portfolio from './Public/Portfolio';
import About from './Public/About';
import Contact from './Public/Contact';
import Navbar from './Public/Navbar';



function App() {

  var [currentStep, dispatch] = useReducer(UpdateState, initialState);

  const WebRoutes = [
    {
      path: '',
      element:
      <div
        style={{
          backgroundColor: "#EDF1F4",
          height:`${window.innerHeight-4}px`
        }}
      >
        <Navbar />
      </div>,
      children: [
        {
          path:'',
          element:<Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path:'portfolio',
          element:<Portfolio />
        },
        {
          path:'about',
          element:<About />
        },
        {
          path:'contact',
          element:<Contact />
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

  useEffect(() => {
    // const clearCacheData = () => {
      // console.log("Display",caches.keys().then)
      caches.keys().then((names) => {
        console.log("Display", names)
          names.forEach((name) => {
            console.log("Display", name)
              caches.delete(name);
          });
      });
      // alert('Complete Cache Cleared')
  // };
  })
  
  const routes = useRoutes(WebRoutes)
  return routes
}

export default App;



// Filename: App.js
// import * as React from 'react';
 
// export default function App() {
 
//     // Function to clear complete cache data
//     const clearCacheData = () => {
//         caches.keys().then((names) => {
//             names.forEach((name) => {
//                 caches.delete(name);
//             });
//         });
//         alert('Complete Cache Cleared')
//     };
 
//     return (
//         <div style={{ height: 500, width: '80%' }}>
//             <h4>How to clear complete cache data in ReactJS?</h4>
//             <button onClick={() => clearCacheData()} >
//                 Clear Cache Data</button>
//         </div>
//     );
// }