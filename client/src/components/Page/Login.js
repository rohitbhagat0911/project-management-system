import React, { useState, useEffect, useRef } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import ProjectModal from './Login/ProjectModal';
import axios from 'axios'
import './Login.css'
const Login = () => {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRemeberme] = useState(false);


  const [loginStatus, setLoginStatus] = useState('');
  const [data, setData] = useState([]);


  const authentication = async (e) => {
   e.preventDefault()
        axios.post("http://localhost:5000/login", {username : username, password: password}).then((response) => {
        if (response.data.message) {
          // alert("Invalid reg or password")
          setLoginStatus('false')
        } else {
          setLoginStatus('true');
          window.sessionStorage.clear();
          window.sessionStorage.setItem('currentUserReg', response.data[0].regno)
                  window.sessionStorage.setItem('currentUser', response.data[0].username)
                  window.sessionStorage.setItem('currentUserStream', response.data[0].stream)
                  window.sessionStorage.setItem('currentUserYear', response.data[0].year)
                  window.sessionStorage.setItem('userLevel', response.data[0].user_level)
                  
                 window.sessionStorage.setItem('loginStatus', 'true')
                 window.location.reload(); 
           
        }
        console.log(response);
          
        });
      };


  return (<div>

    {
      (window.sessionStorage.getItem("projectAccess") == "notEligible")? <ProjectModal /> : ""
    } 
    {
      (window.sessionStorage.getItem("specificPage") == "notEligible")? <ProjectModal /> : ""
    }
    
    {
      (window.sessionStorage.getItem("ideaAccess") == "notEligible")? <ProjectModal /> : ""
    }
    
    {
      (window.sessionStorage.getItem("adminAccess") == "notEligible")? <ProjectModal /> : ""
    }

      <div className="space-p">
     
      <div className="login-pos">
      { loginStatus == 'false' && 
  <div className="alert alert-danger alert-pos" role="alert">
    Invalid Password or Registration No.
  </div>
}
        <div className="login-par">
        
         <div className="card-upper"> <i></i>
         <h3 className='login-title'>Login</h3>
         
       <div className="conatinerr">
       <form onSubmit={authentication}> 
    
    <div className="group">      
 <input className="login-input" type="text" id='login-name' onChange={(e) =>{setUsername(e.target.value);}} required/>
 <span className="highlight"></span>
 <span className="bar"></span>
 <label className='login-label' htmlFor='login-name'>Registration No.</label>
</div>
 
<div className="group">      
 <input className="login-input" type="password" id='login-email' onChange={(e) =>{setPassword(e.target.value);}} required />
 <span className="highlight"></span>
 <span className="bar"></span>
 <label className='login-label' htmlFor='login-name'>Password</label>

</div>

{/* <input type="password" ref={pass} />

  */}

{/* <input className="remember-me" type="checkbox" />
Remember me */}
{/* <div>      
 <input onChange={storageType} className="remember-me" type="checkbox" id='remember' />
 <label className='remember-txt' htmlFor='remember'>Remember me</label>

</div> */}

<div className="login-container">
  {/* <button className='login-button' id="button"></button> */}

  <input className='login-button' type="submit" value={'SUBMIT'} />
  {/* <button onClick={authentication} className='login-button'></button> */}

</div>

  
</form>
    
       </div>
       
         </div>
         
         
         </div>
         

{window.sessionStorage.getItem('loginStatus') == 'true'? <Navigate to="/project" replace={true} />: "" }

 
         </div>
         
        </div>
       
  
  </div>);
  
};



export default Login;
