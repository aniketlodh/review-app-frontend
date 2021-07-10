import React from 'react'
import './ReviewTableContent.css'
function ReviewTableContent({review}) {
    return (
        <div className="ReviewTableContent">
            <div className="review-content">
                <h4>{review.title}</h4>
                <p>{review.description}</p>
                <p>{review.details}</p>
                <p>{review.rating} stars</p>
                <hr/>
            </div>
        </div>
    )
}

export default ReviewTableContent