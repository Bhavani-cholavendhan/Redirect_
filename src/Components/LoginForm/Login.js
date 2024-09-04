import React, {useEffect, useState} from 'react'
import './Login.css'
import { TextField,  Button, Typography } from "@mui/material";
import {  useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const [loginSuccesful, setLoginSuccesful] = useState(false); 
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate(); 

    const credentials ={
        username : "bhavani",
        password : "bhavani@123",
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        // alert(`Username: ${username}\nPassword: ${password}`); 
        if(username===credentials.username && password===credentials.password){
          setLoginSuccesful(true)
        }else{
          setLoginSuccesful(false)
          alert("invalid username or password") 
        }
  
      };

      useEffect(()=>{
        if(loginSuccesful){
          setRedirect(true)
        }
      },[loginSuccesful])

      useEffect(()=>{
        if(redirect){
          const timer = setTimeout(() => {
            navigate('/home');
          }, 2000);
          return () => clearTimeout(timer);
        }
      },[redirect,navigate])
      
      

  return (
    <div className='main_container' >
        
      <h2 style={{marginLeft:"65px", color:"#1976d2"}}>Login</h2>
      <form onSubmit={handleSubmit}>
      {loginSuccesful && (
        <Typography variant="body1" style={{ color: "green", marginBottom: "10px" }}>
          <h4>Login Successfully!</h4>
        </Typography>
      )}
        {/* <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> */}

        <TextField id="outlined-basic" 
        label="Username" 
        variant="outlined" 
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        style={{marginBottom:"10px"}}/>
          <br/>
        {/* <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        /> */}

<TextField id="outlined-basic" 
        label="Password" 
        variant="outlined" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        type='password'
        style={{marginBottom:"10px"}}/>
        <br/>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Submit
        </Button>
      </form>
    </div>
   
  )
}
