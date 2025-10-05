import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import ForgotPassword from "./pages/ForgotPassword";
import useCurrentUser from "./hooks/useCurrentUser";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import UploadPost from "./pages/UploadPost";
import useAllPosts from "./hooks/useAllPosts";

export default function App() {

  useCurrentUser()
  useAllPosts()

    const {userData} = useSelector(state=>state.user)
  

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={userData ? <Home /> : <Signin/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/forgotpassword" element={<ForgotPassword/>} />
      <Route path="/profile/:userName" element={<Profile/>} />
      <Route path="/editprofile/" element={<EditProfile/>} />
      <Route path="/upload/" element={<UploadPost/>} />
    </Routes>
  );
}
