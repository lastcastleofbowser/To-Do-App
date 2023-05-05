import React from 'react';
import './App.css';
import Input from "../Input";
import List from "../List";
import {useState} from "react";

function App() {

  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(textEvent){
    setText(textEvent.target.value);
  }

  function handleClick() {
    if (text.trim() !== "") {
    console.log("Adding item:", text);
    setItems([...items, text]);
    setText("");
    }
  }

  function handleDelete(index) {
   setItems(items.filter((item, i)=> i !== index));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To do List 📝</h1>
      </header>
      <h2 className="add to-do display" style={{ fontSize: "15px" }}>
        My Personal List
      </h2>
      <section className="add-to-do-buttons">
        <Input handleChange={handleChange} handleClick={handleClick} />
        <List items={items} delete1={handleDelete} />
        <p>Number of items: {items.length}</p>
      </section>
    </div>
  );
}

export default App;
