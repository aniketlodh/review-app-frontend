import React from 'react'
import ReviewTableContent from './ReviewTableContent'
import './ReviewTable.css'
function ReviewTable({reviews}) {
    return (
        <div className="ReviewTable">
            <h2>Our Reviews</h2>
            <div className="table">
                {reviews.map((review)=>{
                    return(
                        <div>
                            <ReviewTableContent  review={review}/>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default ReviewTable
