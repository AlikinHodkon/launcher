import React from "react";
import '../styles/Home.css';

const Home = function(){
    return(
        <header>
            <h1 className="mainTitle">Work at the speed<br />
            of thought</h1>
            <p className="text">Most calendars are designed for teams. Slate is designed for<br /> 
            freelancers who want a simple way to plan their schedule.</p>
            <div className="buttons">
                <button id="butPlay">Try For Free</button>
                <button id="butLearn">Learn more</button>
            </div>
        </header>
    );
}

export default Home;