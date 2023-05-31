import React, { useState } from 'react'
import './Login.css'
import {auth} from "./firebase";
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch() ;
  // register function
  // const register =()=>  {};

  // login function
  const loginToApp =(e)=>  {
    e.preventDefault();
  };

  const register=()=>{ 
      if(!name)
      {
        return alert("Please enter a full name");
      }

      auth.createUserWithEmailAndPassword(email,password)
      .then((userAuth) =>{
        userAuth.user
        .updateProfile({
            displayName: name,
             photoURL: profilePic,
        })

        .then(()=>{
            dispatch(
              login({
              email:userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePic,

            }));
        });

      }).catch((error) => alert(error));
  };
 

  return (
    <div className='login'>
         
         <img src="https://www.technipages.com/wp-content/uploads/2020/09/LinkedIn-Does-Not-Load-Images-fix.jpg" alt="" />

         <form >
            <input type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name (required if registering)"  />
            <input type="text"  value={profilePic} onChange={(e) => setProfilePic(e.target.value)}  placeholder="Profile Picture URL (Optional)"  />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"  />
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password"  />
            <button type='submit' onClick={loginToApp} >Sign In</button>
         </form> 
         <p>Not a Member?{" "}
          <span className='login__register' onClick={register}>Register Now </span>
         </p>
    </div>
  );
}

export default Login