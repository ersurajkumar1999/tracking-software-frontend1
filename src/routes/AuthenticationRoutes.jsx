import AuthLayout from "../auth/layout/AuthLayout";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
const AuthenticationRoutes = {
  path: '/',
  element: <AuthLayout />,
  children: [
    {
      path: 'login',
      element: <SignIn />
    },
    {
      path: 'auth/login',
      element: <SignIn />
    },
    {
      path: 'signup',
      element: <SignUp />
    },
    {
      path: 'auth/signup',
      element: <SignUp />
    },
  ]
};

export default AuthenticationRoutes;
