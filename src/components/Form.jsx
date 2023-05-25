import he from "he";
import Radio from "./Radio";
import { useEffect, useState } from "react";

export default function Form(props) {
  const [ansArr, setAnsArr] = useState([]);
  const decodedQuestion = he.decode(props.question);
  function handleChange(event,id) {
    const { name, value } = event.target;
    const ansObj = {
      id: id,
      correctAnswer: name,
      chosenAnswer: value,
    };
    props.setAnsData((prev) => [...prev, ansObj]);
  }

  useEffect(() => {
    setAnsArr([...props.incorrect_answers, props.correct_answer].sort(
      (a, b) => 0.5 - Math.random()
    ))
  }, [props.correct_answer])
  
  const radioElements = ansArr.map((ans, index) => {
    const decodedAns = he.decode(ans);
    return (
      <Radio
        key = {index}
        id={props.id}
        answer={decodedAns}
        count={index + 1}
        correctAnswer={props.correct_answer}
        handleChange={handleChange}
        check = {props.check}
        ansData = {props.ansData}
      />
    );
  });
  

  return (
    <div className="form" id={props.id}>
      <h3>{decodedQuestion}</h3>
      <div className="form--radios">{radioElements}</div>
      <hr />
    </div>
  );
}
