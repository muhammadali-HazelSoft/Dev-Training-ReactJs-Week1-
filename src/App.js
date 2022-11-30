import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Login from "./Components/Pages/Login/Login";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import "./App.css";
import Auth from "./Components/Utils/auth/auth";
import { getUserData } from "./Components/State/UserSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
 useEffect(()=>{
  dispatch(getUserData())
 },[])
  return (
    <div className="App">
      <Routes>
        {/* {isLogIn ? (
       <Route path="/dashboard" element={<Dashboard />} />
        ) : (<Route path="/" element={<Login />} />)}       */}
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Auth>
              <Dashboard />
            </Auth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
