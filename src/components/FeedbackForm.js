import React from "react";
import {useState} from 'react'

const FeedbackForm = (props)=>{

  const [formInfo, setFormInfo] = useState({
    projectExp: 0,
    instFeedback: "",
    fellowFeedback: ""
  })

  console.log(formInfo)

  const handleForm = (e) => {
     setFormInfo({...formInfo, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAllFeedback(formInfo)
    e.target.reset();
    console.log(formInfo)
   
  }


    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <p>Rate your overall experience on the Youtube Project:</p>
            <label for="exp-1">1</label>
            <input id="exp-1" type="radio" name="projectExp" value="1" onChange={(e) => handleForm(e)}/>
            <label for="exp-2">2</label>
            <input id="exp-2" type="radio" name="projectExp" value="2" onChange={(e) => handleForm(e)}/>
            <label for="exp-3">3</label>
            <input id="exp-3" type="radio" name="projectExp" value="3" onChange={(e) => handleForm(e)}/>
            <label for="exp-4">4</label>
            <input id="exp-4" type="radio" name="projectExp" value="4" onChange={(e) => handleForm(e)}/>
            <p>Provide feedback for your instructors:</p>
            <textarea id="instFeedback" name="instFeedback" onInput={(e) => handleForm(e)}></textarea >
            <p>Provide feedback for your group members:</p>
            <textarea id="fellowFeedback" name="fellowFeedback" onInput={(e) => handleForm(e)}></textarea>
            {/* <Link to="/confirmation"> */}
                <button type="submit">Submit</button>
                {/* </Link> */}
        </form>
    );
}


export default FeedbackForm;
