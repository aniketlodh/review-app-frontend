import React, { useState } from 'react'
import {BrowserRouter,Link,useHistory} from 'react-router-dom'
import "./Login.css"
import firebase from './firebase'
import { useAuth } from './AuthContext';
function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const {login} =useAuth();
    const history= useHistory()
    async function handleSubmit(e){
        e.preventDefault();
        try{
            await login(email,password);
            history.push('/review')
        }catch(err){
            alert(err.message)
        }
        
    }
    
    return (
        <div className="Login">
            <form className="form"  onSubmit={handleSubmit}>
                <h2>Welcome to Review App</h2>
                <p>Email Address</p>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                <p>Password</p>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button type="submit" id="submit">Submit</button>
                <p><Link to="/register">Sign Up</Link></p> 
            </form>                       
        </div>
    )
}
export default Login
