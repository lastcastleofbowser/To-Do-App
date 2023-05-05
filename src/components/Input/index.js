import React, { useState } from "react";
import "./index.css";

function Input({ handleChange, handleClick}) {
  const [text, setText] = useState("");
 

  function handleButtonClick() {
    handleClick(text);
    setText("");
  }

  function handleTextChange(event) {
    setText(event.target.value);
    handleChange(event);
  }

  return (
    <div className="Input">
      <input type="text" onChange={handleTextChange} value={text} />
      <button onClick={handleButtonClick}>Add</button>
    </div>
  );
}




export default Input;