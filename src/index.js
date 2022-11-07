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
import DemoPage from "./Pages/DemoPage";

const pages = [
  { path: "/demo", element: <DemoPage /> },
  { path: "/", element: <Home /> },
  { path: "/mbtitest", element: <MbtiPage /> },
  { path: "/disctest", element: <DiscTest /> },
  { path: "/testresult", element: <TestResultPage /> },
  { path: "/review", element: <ReviewPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

function Index() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          {pages.map((item, index) => {
            return (
              <Route path={item.path} element={item.element} key={index} />
            );
          })}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
