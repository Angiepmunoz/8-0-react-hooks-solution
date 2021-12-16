import React from "react";
import FeedbackForm from "./FeedbackForm";
import Confirmation from "./Confirmation";
import { useState } from "react";

const MainPage = (props) => {
  const [formInfo, setFormInfo] = useState({
    projectExp: 0,
    instFeedback: "",
    fellowFeedback: "",
  });

  const [didSubmit, setDidSubmit] = useState(false);

  const handleForm = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAllFeedback(formInfo);
    setDidSubmit(true);
  }; 

  return (
    <>
      {didSubmit ? (
        <Confirmation />
      ) : (
        <FeedbackForm handleForm={handleForm} handleSubmit={handleSubmit} />
      )}
    </>
  );
};

export default MainPage;
