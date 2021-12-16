import "./App.css";
import MainPage from "./components/MainPage";
import ReviewFeedback from "./components/ReviewFeedback";
import feedbackData from "./data/feedbackData"
import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

const App = () => {


  const [allFeedback, setAllFeedback] = useState(feedbackData);

  const handleAllFeedback = (feedback) => {
    setAllFeedback([...allFeedback, feedback]);
  };

  return (
    <>
      <nav>
        <header>Youtube React Project Feedback</header>
        <Link to="/">Survey</Link>
        <Link to="/ReviewFeedback">All Feedback</Link>
      </nav>
      <Routes>
        <Route
          exact
          path="/"
          element={<MainPage handleAllFeedback={handleAllFeedback} />}
        />
        <Route
          path="/ReviewFeedback"
          element={<ReviewFeedback allFeedback={allFeedback} />}
        />
      </Routes>
    </>
  );
};

export default App;
