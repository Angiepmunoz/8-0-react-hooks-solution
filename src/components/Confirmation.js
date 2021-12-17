import React, {useState, useEffect} from "react";

const Confirmation = () => {

  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetch("https://geek-jokes.sameerkumar.website/api?format=json")
      .then((response) => response.json())
      .then((joke) =>{ 
        // console.log(joke)
          setJoke(joke.joke)
        })
      .catch((err) => console.log(err));
  }, [])
  // the empty array stops the function from running on update

    return (
      <div>
        <p>Thank you for your honest review!</p>
        <p>As a token of our appreciation here is a joke:</p>
        <p>{joke}</p>
      </div>
    );
}

export default Confirmation