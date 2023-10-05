import { createContext, useState } from "react";
// import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
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
    <ShowlbContext.Provider value={value}>
      <Profile/>
    </ShowlbContext.Provider>
  
  );
}

export default App;
