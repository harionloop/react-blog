import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Single from "./Pages/Single/Single";
import Settings from "./Pages/Settings/Settings";
import Write from "./Pages/Write/Write";

function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postID" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
