import React,{ useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Hello from './Hello.js';

function Form() {
const[Name,setName]=useState("");
const[Email,setEmail]=useState("");
const[Password,setPassword]=useState("");

const handleEmailChange= (e) =>{
    setEmail(e.target.value);
}
const handleNameChange= (e) =>{
    setName(e.target.value);
}

const handlePasswordChange= (e) =>{
    setPassword(e.target.value);
}
const handleSubmit =(e)=>{
    e.preventDefault();
    const EmailRegex=/^[a-z]/;
    const PasswordRegex=/^[a-zA-Z]{8,12}/;
    if(!EmailRegex.test(Email)) {
        alert("Enter valid Email")
    }
    if(!PasswordRegex.test(Password)) {
        alert("Enter valid Password")}
    else{
        console.log("FORM SUBMITED");
        localStorage.setItem("Name",Email);
        window.location.pathname="/Hello";
    }
}

return(
<form onSubmit={handleSubmit}>
<label>
    Email: 
    <input type="Email"  onChange={handleEmailChange}/>
</label>
<br/>
<label>
    Name
    <input type="Text"  onChange={handleNameChange}/>
</label>
<br/>
<label>
    Password 
    <input type="Password "  onChange={handlePasswordChange}/>
</label>
<br/>
<button type="submit">Submit</button>
    </form>
);
}
export default Form;