
import Home from "../home/home";
import HomeLayout from "../home/layout/HomeLayout";

const HomeRoutes = {
  path: '/',
  element:  <HomeLayout />, 
  children: [
    {
      path: '/',
      element: <Home />
    },
   
  ]
};

export default HomeRoutes;
