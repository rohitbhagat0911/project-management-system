import React, { useState }  from 'react'
import './Login.css'
import Axios from 'axios'

const Registrattion = () => {

     const{ usernameReg, setUsernameReg } = useState("");
     const{ passwordReg, setPasswordReg} = useState("");

    // const register = () => {
    //     Axios.post('http://localhost:5000/register', {username: usernameReg, password: passwordReg})
    //     .then((response) => {
    //         console.log(response);
    //     });
    // };

    const register = () => {
      console.log(passwordReg)
    }

  return (
    <div>
        
       <div className='login-par login-pos'>
            Registration
          <form>
          <label htmlfor="number">Regno: </label>
            <input type='text' id='number' onChange = {(e) => {setUsernameReg(e.target.value);}}/>
            
            <label htmlfor="password">Regno: </label>
            <input type='text' id='password' onChange = {(e) => {setPasswordReg(e.target.value);}}/>

            <button onClick={register}>Submit</button>
          </form>
            
       </div>
    </div>
  )
}

export default Registrattion