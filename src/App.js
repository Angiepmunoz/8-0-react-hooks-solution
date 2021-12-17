import './App.css';
import React, {useState} from 'react';
import feedbackData from './data/feedbackData';
import ReviewFeedback from './components/ReviewFeedback';
import {Routes, Route, Link} from "react-router-dom"
import MainPage from './components/MainPage'

const App = () => {

  const [allFeedback, setAllFeedback] = useState(feedbackData);

  const handleAllFeedback = (feedback) => {
    setAllFeedback([...allFeedback, feedback])
  } 
 
    return (
      <>
        <header>
          <h2>Youtube React Project Feedback</h2>
          <Link to="/" className="nav-link survey">Survey</Link>
          <Link to="/ReviewFeedback" className="nav-link review-feedback">All Feedback</Link>
        </header>
        <Routes>
          <Route exact path="/" element={<MainPage handleAllFeedback={handleAllFeedback}/>}/>
          <Route path="/ReviewFeedback" element={<ReviewFeedback allFeedback={allFeedback}/>}/>
        </Routes>
      </>
    );
}

export default App;
