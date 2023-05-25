import { useState } from "react";
import Blob from "./components/Blob";
import IntroPage from "./components/introPage";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  const [start, setStart] = useState(0);
  const [duration, setDuration] = useState(0);
  let restart;
  function toggleStart() {
    setStart((prev) => prev + 1);
  } 
  
  function toggleStop(id) {
    setStart((prev) => !prev);
    clearInterval(id);
  }

  const styles = {
    overflow: "hidden",
    height: start ? "fit-content" : "100vh"
  }

  

  return (
    <div className="container" style={styles}>
      <Blob color="yellow" start={start} />
      <Blob color="blue" start={start} />
      {start ? <Quiz toggleClick = {toggleStop} duration = {duration}setDuration = {setDuration}/> : <IntroPage toggleClick={toggleStart} />}
    </div>
  );
}

export default App;
