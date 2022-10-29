import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

import MbtiPage from "./Pages/MBTI_Test";
import DiscTest from "./Pages/DISC_Test";
import TestResultPage from "./Pages/TestResult";
import ReviewPage from "./Pages/Review";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          {/* console.log(sessionStorage.getItem("mbtiResult")) */}
          <Route path="/" element={<Home />} />
          <Route path="/mbtitest" element={<MbtiPage />} />
          <Route path="/disctest" element={<DiscTest />} />
          <Route path="/testresult" element={<TestResultPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
