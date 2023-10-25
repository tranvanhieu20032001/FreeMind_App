import { createContext, useState } from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from './pages/register/Register'

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/profile/:userId",
    element: <Profile/>,
  },
]);

export const ShowlbContext = createContext()
function App() {
  const [showleftbar, setShowleftbar] = useState(false)
  const _showLeftbar = ()=>{
    setShowleftbar(!showleftbar)

}
const value ={
  showleftbar,
  _showLeftbar
}
  return (
    // <Register/>
    <ShowlbContext.Provider value={value}>
       <RouterProvider router={router} />
    </ShowlbContext.Provider>
  
  );
}

export default App;
