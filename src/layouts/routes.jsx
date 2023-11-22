import { createBrowserRouter} from 'react-router-dom'
import Layout from './../layouts/Layout';
import Home from './../componants/web/home/Home';
import Catigoris from './../componants/web/catigoris/Catigoris';
import DashbordLayout from './../layouts/DashbordLayout';
import DashbordHome from './../componants/dashbord/home/Home';
import DashbordCatigoris from './../componants/dashbord/catigoris/Catigoris';
import Register from '../componants/web/register/Register';


export const router = createBrowserRouter([
{
  path: "/",
  element:<Layout />,
  children:[
    {
      path:"register",
      element:<Register/>

    },
    {
    path:"home",
    element:<Home />
  },
  {
    path:"catigoris",
    element:<Catigoris />
  }
]
},
{
  path:"/dashbord",
  element:<DashbordLayout/>,
  children:[
    {
    path:"home",
    element:<DashbordHome />
  },
  {
    path:"catigoris",
    element:<DashbordCatigoris />
  }
]
}
// ,
// {
//   path: "*",
//   element:<h1>Page not found</h1>

// }

]);
