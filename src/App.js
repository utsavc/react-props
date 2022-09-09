import React from "react";
import Card from "./Card";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"
function App() {
  let a="Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ";
  return (
    <div className="App">
      <h2>Things to Expect</h2>
      <div className="container">
      <Card title="Nice Bird" source={img1} content={a}/>
      <Card title="Dusk" source={img2} content={a}/>
      <Card title="Autumn's Arrival " source={img3} content={a}/>
      <Card title="Elephant" source={img4} content={a}/>
      </div>

    </div>
  );
}

export default App;
