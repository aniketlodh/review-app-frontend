import React from 'react'
import firebase from './firebase'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import ReviewTable from './ReviewTable'
import { useAuth } from './AuthContext';
import {Link,useHistory} from 'react-router-dom'
import './Home.css'
function Home() {
    const [review,setReview]=useState([]);
    const {currentUser,logout}=useAuth();
    const history=useHistory();
    useEffect(()=>{
        const fetchReviews= async ()=> {
            const review=await axios("https://thereviewingapp.herokuapp.com/reviews")
            setReview(review.data);
            
        }
        fetchReviews();
    },[])

    async function handlelogout(){
        try{
            await logout();
        }catch(err){
            alert(err.message)
        }
        

    }
    return (
        <div className="Home">
            <h1>Welcome</h1>
            <h3>Login to Review Us</h3>
            {currentUser
                ?<><Link to="/review"><button>Leave a review </button></Link>
                <button onClick={handlelogout}>Logout</button></>
                :<><Link to="/login"><button>Login </button></Link>
                <Link to="/register"><button>Register </button></Link></>
            }
            
            <ReviewTable reviews={review}/>
        </div>
    )
}

export default Home
