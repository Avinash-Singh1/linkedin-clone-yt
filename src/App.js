import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';


import {useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
 
  const dispatch = useDispatch();


  useEffect(()=> {
    auth.onAuthStateChanged((userAuth )=>{

      if(userAuth){
        //user is logged in 
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL, 
          })
        );
      }
      else{
        //user logged out 
        dispatch(logout());
      }
    });
  })
  return (
    <div className="App">

     <Header />
    
      {!user ? (
      <Login /> 
      ) : (

          <div className="app__body">
          <SideBar />
          < Feed/>
         </div>
      )}
    </div>
  );
}

export default App;
