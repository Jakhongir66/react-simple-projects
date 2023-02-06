import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Error from "../pages/Error.jsx";


export const routes = [
   {
      path: '/',
      component: Home,
      exact: true
   },
   {
      path: '/about',
      component: About,
      exact: true
   },
   {
      path: '*',
      component: Error
   }
]


