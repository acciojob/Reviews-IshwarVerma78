import React, { useState } from "react";
import data from "./data.js";
import "../styles/App.css";


function Review(){

    let [index, setIndex] = useState(0);

    function handleNext(){
        data[index+1]!=undefined? setIndex(index+1) : setIndex(index);
    }

    function handlePrev(){
        index>0? setIndex(index-1) : setIndex(index);
    }

    function handleRandom(){
        let randomIndex = Math.floor(Math.random()*(data.length))
        setIndex(randomIndex);
    }


    return(
        <>
            <h1 id="review-heading">Our Reviews</h1>

            <div className="review">
                <img className="person-img" src={data[index].image} alt="" />
                <h2 id={data[index].id} className="author">{data[index].name}</h2>
                <p className="job">{data[index].job}</p>
                <p className="info">{data[index].text}</p>

                <button className="prev-btn" onClick={handlePrev}>Previous</button>
                <button className="next-btn" onClick={handleNext}>Next</button>
                <button className="random-btn" onClick={handleRandom}>surprise me</button>

            </div>
        
            
{/* 
            {
                data.map((o)=>{
                    return <div>
                        <div className="review">
                            <img className="person-info" src={o.image} alt="" />
                            <h2 id={o.id} className="author">{o.name}</h2>
                            <p className="job">{o.job}</p>
                            <p className="info">{o.text}</p>
                        </div>
            
                        <button className="prev-btn">Previous</button>
                        <button className="next-btn">Next</button>
                        <button className="random-btn">surprise me</button>
                    </div>
                })
            } */}



        </>
    )
}

export default Review;