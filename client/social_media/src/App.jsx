import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import ForgotPassword from "./pages/ForgotPassword";
import useCurrentUser from "./hooks/useCurrentUser";
import { useSelector } from "react-redux";

export default function App() {

  useCurrentUser()

    const {userData} = useSelector(state=>state.user)
  

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={userData ? <Home /> : <Signin/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/forgotpassword" element={<ForgotPassword/>} />
    </Routes>
  );
}
