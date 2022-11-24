import { Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Login/Login";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import "./App.css";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </div>
  );
}

export default App;
