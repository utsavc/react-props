import React from "react";
import Card from "./Card";
import Jokes from "./Jokes";
import JokesData from "./JokesData";
import CardData from "./CardData";

/*This returns to the Joke.js files which accepts the props setup and punchline, The array is 
imported from the JokesData file*/

function App() {

  const jokeElements = JokesData.map(joke => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />
})

const cardElements= CardData.map(card=>{
    return <Card featured={card.featured} source={card.source}  title={card.title} content={card.content} like={card.like} />
})


  return (
    <div className="App">
      <h2>Things to Expect</h2>
      <div className="container">
      {cardElements}
     
      </div>
      <div className="joke-container">
      {jokeElements}
      </div>
    </div>
  );
}

export default App;
