import React,{useContext} from 'react'
import {UserContext} from '../../globalContext/Context';
import lady from '../../Img/SignUp.png';
import '../../App.css'


const Login = () => {
   
const{setEmails,
    setPasswords,
    submits}= useContext(UserContext)

    return (
        <div className='login'>
            <h4>Login</h4>

            <form onSubmit={submits} className='form-login'>
                
                <label htmlFor='login-email'>Email</label>
                <input id='login-email' 
                        type='email'
                        onChange={(e)=>setEmails(e.target.value)}
                        placeholder="enter your email" 
                         
                        />
                <label htmlFor='login-psw'>Password</label>
                <input id='login-psw' 
                        type='password'
                        onChange={(e)=>setPasswords(e.target.value)}
                        placeholder="enter your password"     
                        />
                
               

               <input type='submit' value='Login'/>
                
            </form>
            <div className='login-img'>
            <img src={lady} alt="lady and laptop"/>
            </div>
            
        </div>
    )
}

export default Login
