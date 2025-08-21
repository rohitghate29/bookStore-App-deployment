import React from "react";
import Home from "./components/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import CoursePage from "./components/Course/CoursePage";
import Signup from "./components/signup/Signup";
import Contact from "./components/contact/Contact";
import Products from "./Products";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./components/context/AuthProvider";

function App() {

  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={ authUser ? <CoursePage /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
