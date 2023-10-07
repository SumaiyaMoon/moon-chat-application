import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainChat from "../../pages/chat-box/mainchat";
import Protected from "./protected";
import PersonalChat from "../../pages/chat-box/personalchat";
import Home from "../../pages/home";
import Login from "../../pages/authentication/login";
import SignUp from "../../pages/authentication/signup";
import NotFound from "../../pages/NotFound";


export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
           <Route path="mainchat" element={<Protected Screen={MainChat} />} />
           <Route path="personalchat" element={<Protected Screen={PersonalChat} />} />
           <Route path="/" element={<Home/>} />
           <Route path="login" element={<Login/>} />
           <Route path="signup" element={<SignUp/>} />
           <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}
