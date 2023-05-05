import React from "react";
import "./index.css";


function List({ items, delete1, /* strike1 */ }) {
  return ( 
    <ul>
      {items.map((item, index) => (
      <li 
        //  style = {{}}
         key={index}>{item}
       {/* <button onClick  ={() => strike1(index)}>Strike</button> */}
        <button onClick  ={() => delete1(index)} >❌</button>
      </li>
        //style="text-decoration: line-through;" {{textDecoration: 'line-through'}}
      ))}
    </ul>


);
}

 


export default List;