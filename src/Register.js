import React, { useState } from 'react'
import {BrowserRouter,Link,useHistory} from 'react-router-dom'
import Login from './Login'
import "./Register.css"
import { useAuth } from './AuthContext';
function Register() {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const {signUp} =useAuth();
    const history= useHistory()
    async function handleSubmit(e){
        e.preventDefault();
        try{
            await signUp(email,password);
            history.push('/review')
        }catch(err){
            alert(err.message)
        }
        
    }


    return (
        <div className="Register">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Welcome to Review App</h2>
                <p>Name</p>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} />
                <p>Email Address</p>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                <p>Password</p>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button type="submit" id="submit">Submit</button>
                <p>Already a User ? <Link to="/login">Login Here</Link></p>              

            </form>
        </div>
    )
}

export default Register
