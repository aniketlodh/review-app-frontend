import React, { useState } from 'react'
import "./ReviewForm.css"
import { useAuth } from './AuthContext';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
function ReviewForm() {
    const [name,setName]=useState('');
    const [title,setTitle]=useState('');
    const [description,setDesc]=useState('');
    const [details,setDetails]=useState('')
    const [rating,setRating]=useState('');
    const history= useHistory()
    

    const onNameChange=(e)=>{
        setName(e);
    }
    const onTitleChange=(e)=>{
        setTitle(e);
    }
    const onDesChange=(e)=>{
        setDesc(e);
    }
    const onDetailsChange=(e)=>{
        setDetails(e);
    }
    const onRatingChange=(e)=>{
        setRating(e);
    }
    const submitForm= async (e)=>{
        e.preventDefault();
        console.log(description,details);
        axios.post('https://thereviewingapp.herokuapp.com/reviews',{title,description,details,rating})
        .then(res=>{
            history.push('/')
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="ReviewForm">
            
            <form action="" onSubmit={submitForm}>
                <div className="form-group">
                    <label for="review">Review Title</label>
                    <input type="text" className="form-control" id="review" name="title" placeholder="Review Title" required value={title} onChange={(e)=>onTitleChange(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="reviewdesc">Review Description</label>
                    <input type="text" className="form-control" id="reviewdesc" name="description" placeholder="Review Description" autocomplete="off" required value={description} onChange={(e)=>onDesChange(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="reviewDetails">Review Details</label>
                    <input type="text" className="form-control" id="reviewDetails" name="details" placeholder="Review Details" autocomplete="off" required value={details} onChange={(e)=>onDetailsChange(e.target.value)}/>
                </div>
                <div className="form-group rating" value={rating} onChange={(e)=>onRatingChange(e.target.value)}>
                    <input type="radio" name="star" value="5" id="star1"/><label for="star1"></label>
                    <input type="radio" name="star" value="4" id="star2"/><label for="star2"></label>
                    <input type="radio" name="star" value="3" id="star3"/><label for="star3"></label>
                    <input type="radio" name="star" value="2" id="star4"/><label for="star4"></label>
                    <input type="radio" name="star" value="1" id="star5"/><label for="star5"></label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>                 
            </form>
        </div>
    )
}

export default ReviewForm
