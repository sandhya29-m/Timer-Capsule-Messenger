import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import CapsuleDetails from "./pages/capsuledetails";
import Chat from "./pages/chat"
import Graduation from "./pages/graduation";
import Festival from "./pages/festivals";
import Marriage from "./pages/marriage";
import Farewell from "./pages/farewell";
import Birthday from "./pages/birthday";
import Login from "./pages/login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/capsule" element={<CapsuleDetails/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/gradu" element={<Graduation/>}/>
        <Route path="/fest" element={<Festival/>}/>
        <Route path="/marr" element={<Marriage/>}/>
        <Route path="/fare" element={<Farewell/>}/>
        <Route path="/birth" element={<Birthday/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
