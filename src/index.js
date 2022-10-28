import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

import MbtiPage from "./Pages/MBTI_Test";
import DiscTest from "./Pages/DISC_Test";
import TestResultPage from "./Pages/TestResult";

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
        </Routes>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
