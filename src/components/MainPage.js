import React, {useState} from "react";
import FeedbackForm from "./FeedbackForm";
import Confirmation from "./Confirmation";

const MainPage = (props)  => {

  // const [projectExp, setProjectExp] = useState(0);
  // const [instFeedback, setInstFeedback] = useState("");
  // const [fellowFeedback, setFellowFeedback ] = useState("");
  const [didSubmit, changeDidSubmit ] = useState(false);

  const [formInfo, setFormInfo] = useState({
    projectExp: 0,
    instFeedback: "",
    fellowFeedback: ""
  })
  
  const handleForm = (e) => {
    console.log(e.target.name, e.target.value )
    setFormInfo({...formInfo, [e.target.name]: e.target.value })
  };


  // the event handlers below would have been used if we had declared each state variable on its own as seen on lines 7-9

  // const handleInstFeedback = (e) => {
  //   setInstFeedback(e.target.value);
  // }

  // const handleProjectExp = (e) => {
  //   setProjectExp(e.target.value);
  // }

  // const handleFellowFeedback = (e) => {
  //   setFellowFeedback(e.target.value);
  // }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    //in order to pass all of the variables to handleAllFeedback at once we stored them in an object
    // let feedback = {
    //   projectExp,
    //   instFeedback,
    //   fellowFeedback
    // }
    // console.log(feedback)
  
    props.handleAllFeedback(formInfo); //passing the object as a arg
    changeDidSubmit(!didSubmit);
    e.target.reset();
  };

      return (
        <>
            {didSubmit ? <Confirmation/> : (<FeedbackForm  handleSubmit={handleSubmit} handleForm={handleForm}/>)}
        </>  
      )

}

export default MainPage;

// We would have passed the below props if we had declared each state variable on its own

// handleInstFeedback={handleInstFeedback} handleProjectExp={handleProjectExp} handleFellowFeedback={handleFellowFeedback}