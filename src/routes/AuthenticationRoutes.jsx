import Login from "../auth/Login";
import AuthLayout from "../auth/layout/AuthLayout";

const AuthenticationRoutes = {
  path: '/',
  element: <AuthLayout />,
  children: [
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'auth/login',
      element: <Login />
    },
  ]
};

export default AuthenticationRoutes;
