import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from './views/Login';
import Singup from './views/Signup'
import Dashboard from './views/dashboard'
import GuestLayout from './component/GuestLayout';
import DefaultLayout from './component/DefaultLayout';
import Survey from './views/Survey';
const Router = createBrowserRouter([
  
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Navigate to='/' />
            },
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/survey',
                element: <Survey />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Singup />
            },
        ]
    },

])

export default Router;