import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import MbtiTest from "./Components/MBTI test";
import MbtiPage from "./Pages/MBTI_Test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <MbtiTest /> */}
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mbtitest" element={<MbtiPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
