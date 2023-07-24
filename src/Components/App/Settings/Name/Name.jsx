import React from 'react'
import {useState} from 'react';
import './Name.css'

const Name = () => {

/* Update name */
const [message, setMessage] = useState('K Shankar Saumya');

const handleChange = event => {
    setMessage(event.target.value);
  };


function updateName() {
    let x = document.getElementById("myText").value;
    document.getElementById("forName").innerHTML = x;
    console.log("yes");
  }
  


  return (
    <div>
      <h2>Name: </h2>
      <input className="nameUpdt-Fld" type="text" id="myText" value={message} onChange={handleChange} />
  <button className="nameUpdtBtn" onClick={updateName}>Update</button>
    </div>
  )
}

export default Name
