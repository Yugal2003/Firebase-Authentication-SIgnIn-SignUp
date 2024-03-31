import { useState } from 'react';
import './App.css';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


function App() {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  const auth = getAuth();

  async function signUp(){
    try {
      const dataSignUp = await createUserWithEmailAndPassword(auth,email,password);
      alert("User Sign Up")
    } 
    catch (error) {
      alert("User Already Present")
    }
  }

  async function signIn(){
    try {
      const dataSignIn = await signInWithEmailAndPassword(auth,email,password);
      alert("User Login Successfully")
    } catch (error) {
      alert("Sign Up First")
    }
  }

  return (
    <>
    <h1 className='h1tag'>Firebase Authentication</h1>
    <div className='main'>
      <div className='signup'>
          <h2>User Sign Up</h2>
          <div className='email_password'>
              <input placeholder='Enter email' type='email' onChange={(e) => setEmail(e.target.value)}/><br></br>
              <input placeholder='Enter password' type='text' onChange={(e) => setPassword(e.target.value)}/><br></br>
              <button type='submit' onClick={signUp}>Sign Up</button>
          </div>
      </div>

      <div className='signin'>
          <h2>User Sign In</h2>
          <div className='email_password'>
              <input placeholder='Enter email' type='email' onChange={(e) => setEmail(e.target.value)}/><br></br>
              <input placeholder='Enter password' type='text' onChange={(e) => setPassword(e.target.value)}/><br></br>
              <button type='submit' onClick={signIn}>Sign In</button>
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
