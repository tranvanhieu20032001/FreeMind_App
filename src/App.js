import { createContext, useState } from "react";
// import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
export const ShowlbContext = createContext()
function App() {
  const [showleftbar, setShowleftbar] = useState(false)
  const _showLeftbar = ()=>{
    setShowleftbar(!showleftbar)
    console.log(showleftbar);
}
const value ={
  showleftbar,
  _showLeftbar
}
  return (
    <Login/>
    // <ShowlbContext.Provider value={value}>
    //   <Profile/>
    // </ShowlbContext.Provider>
  
  );
}

export default App;
