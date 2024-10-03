import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function SignUp() {

  const [username, setUsername]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword] =useState('');
  const [dob, setDob]=useState('');
  const [gender, setGender]=useState('');

  const handleGender =(e) =>{
    setGender(e.target.value);
  }
  const handleSubmit =async (e) =>{
    e.preventDefault();
    const resp= await axios.post('http://localhost:8080/signUp',
    {username, email , password, dob, gender});
    console.log(resp);
    // console.log({username});
    // console.log({email});
    // console.log({password});
    // console.log({dob});
    // console.log({gender});
  }
  return (
    <>
    <center>
        <h2>Sign Up Form:</h2>
        <form onSubmit={handleSubmit}>
            <label>USERNAME: </label>
            <input type="text" 
            name="text"  
            value={username} onChange={(e) => {setUsername(e.target.value)}}required></input>
             <br></br> <br></br>

            <label>Email: </label>
            <input type="email" name="email" 
            value={email} 
            onChange={(e)=> {setEmail(e.target.value)}}></input> 
            <br></br><br></br>

            <label>PASSWORD: </label>
            <input type="password" name="password" 
            value={password} 
            onChange={(e) => {setPassword(e.currentTarget.value)}}></input>
            <br></br><br></br>


            <label>DOB: </label>
            <input type="date" name="dob"
            value={dob} onChange={(e) => {setDob(e.target.value)}}></input>
            <br></br><br></br>


            <label>GENDER: </label>
            <label>M</label>
            <input type="radio" name="gender" 
            value="M" checked ={gender==='M'} onChange={handleGender}></input>
            <label>F</label>
            <input type="radio" name="gender" 
             value="F" checked={gender==='F'} onChange={handleGender} 
            ></input>
            <label>O</label>
            <input type="radio" name="gender" 
            checked={gender==='O'} onChange={handleGender}
            value="O"></input>
            <br></br><br></br>

            <input type="submit" value="SIGN UP"></input>
            <br></br><br></br>

            <hr></hr>
            <a href="/">Already have account? Login instead</a>
        </form>
        </center>
    
    </>
  )
}
