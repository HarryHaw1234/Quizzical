export default function Radio(props) {
  let className = "";
  if(props.check) {
    if(props.correctAnswer == props.answer) {
        className = "form--true";
    } else if (props.ansData.some(ans => ans.chosenAnswer == props.answer) ) {
        className = "form--false";
    } else {
        className = "";
    }
    return (
        <div className="form--radio-parent">
          <input
            type="radio"
            id={props.id + props.count}
            value={props.answer}
            name={props.correctAnswer}
            className={`form--radio radio${props.count}`}
            onChange={props.handleChange}
            disabled
          ></input>
          <label
            htmlFor={props.id}
            className={`form--label label${props.count} ${className}`}
          >
            {props.answer}
          </label>
        </div>
      );
    }
      return (
        <div className="form--radio-parent">
          <input
            type="radio"
            id={props.id + props.count}
            value={props.answer}
            name={props.correctAnswer}
            className={`form--radio radio${props.count}`}
            onChange={(event) => props.handleChange(event, props.id+ props.count)}
          ></input>
          <label
            htmlFor={props.id + props.count}
            className={`form--label label${props.count}`}
          >
            {props.answer}
          </label>
        </div>
      );
  }  
  

