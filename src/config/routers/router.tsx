import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Protected from "./protected";
import Home from "../../pages/home";
import Login from "../../pages/authentication/login";
import SignUp from "../../pages/authentication/signup";
import NotFound from "../../pages/NotFound";
import ChatBox from "../../pages/chat-box/chatbox";


export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="*" element={<NotFound/>} />
           <Route path="signup" element={<SignUp/>} />
           <Route path="login" element={<Login/>} />
           <Route path="chatbox/*" element={<Protected Screen={ChatBox} />} />
        </Routes>
      </Router>
    </>
  );
}
