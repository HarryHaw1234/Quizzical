import { useEffect, useState } from "react";
import Form from "./Form";
import {nanoid} from "nanoid"
export default function Quiz(props) {
  const [quizzes, setQuizzes] = useState([]);
  const [timeTaken, setTimeTaken] = useState(0);
  const [ansData, setAnsData] = useState([]);
  const [notfullyAns, setNotFullyAns] = useState(false);
  const [formElements, setFormElements] = useState([])
  const [intervalID, setIntervalID] = useState();
  const [check, setCheck] = useState(0);
  const [restart, setRestart] = useState(false);
  let checking;

  if(check % 2 == 1) {
    checking = true;
  } else {
    checking = false;
  }

  function checkAns() {
    if(!checking) {
      if(ansData.length < 5)  {
        setNotFullyAns(true);
      } else {
        clearInterval(intervalID)
        setCheck(prev => prev + 1);
      }
    } else {
      setRestart(prev => !prev);
    }
  }

  
  useEffect(() => {
    async function fetchQuestion() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );
      const data = await res.json();
      setQuizzes(data.results);
    }
    if(quizzes.length > 0) {
      setCheck(prev => prev + 1)
      setQuizzes([]);
    }
    fetchQuestion();
    setTimeTaken(0);
    let interval = setInterval(() => {
      setTimeTaken(prev => ++prev)
    }, 1000);
    setIntervalID(interval)
  }, [restart]);

  useEffect(() => {
    setFormElements(quizzes.map((quiz, index) => {
      return <Form {...quiz} key = {index} id = {nanoid()} setAnsData = {setAnsData} check = {checking} ansData = {ansData}/>
  }))}, [checking, quizzes]);



  return (
    <main>
      {quizzes.length > 0  ? (
        <div className="form--parent">
          <div className="form--time">
            <span className="form--time-duration">{timeTaken}s</span>
            {!checking && <button className = "form--time-stop" onClick={() => props.toggleClick(intervalID)}>Stop</button>}
          </div>
          {formElements}
          {notfullyAns &&<span className="form--warning">You haven't done all the quizzes.</span>}
          <button className="form--check" onClick={checkAns}>{checking ? "Replay" : "Check answers"}</button>
        </div>
      ) : (
        <div><div className="loader"></div></div>
      )}
    </main>
  );
}
