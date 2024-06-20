import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import {login,signup} from '../../firebase'
import netflixSpinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [email,setEmail]=useState()
  const [name,setName]=useState('')
  const [password,setPassword]=useState('');
  const [loading,setLoading]=useState(false)

  const userAuth=async(event)=>{
    event.preventDefault();
    setLoading(true)
    if(signState==='Sign In'){
      //call login function
      await login(email,password)
    }else{
      await signup(name,email,password)
    }
    setLoading(false)
  }
  return (
    loading? <div className="login-spinner">
<img src={netflixSpinner} alt=""  />
    </div>:
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          ) : (
            <></>
          )}

          <input type="email" placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type="password" placeholder="Your Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <button onClick={userAuth} type="submit">{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need help</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix? <span onClick={()=>{setSignState('Sign Up')}}>Sign up Now</span>{" "}
            </p>
          ) : (
            <p>
              Already Have an Account? <span onClick={()=>{setSignState('Sign In')}}>Sign In Now</span>{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
