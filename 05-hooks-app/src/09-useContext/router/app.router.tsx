import {
  createBrowserRouter,
  Navigate
} from "react-router";
import { AboutPage } from "../page/about/AboutPage";
import { LoginPage } from "../page/auth/LoginPage";
import { ProfilePage } from "../page/profile/ProfilePage";

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AboutPage />,
  },
  {
    path: '/auth',
    element: <LoginPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '*',
    element: <Navigate to='/' />,
  }
])

