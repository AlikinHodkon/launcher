import React from "react";
import "../styles/Report.css"

const Report = function(){
    return(
        <div className="formWrapper">
            <form>
                <h1>Report Form</h1>
                <label>Name</label> 
                <input type="text" placeholder="Name" id="nameReport" />
                <label>Choose problem</label> 
                <select>
                    <option value="errorGame">Games aren't working</option>
                    <option value="errorLinks">Links are not working</option>
                    <option value="errorPay">Can't support game developers</option>
                </select>
                <label>Tell us about your problem</label>
                <textarea placeholder="Describe your problem" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}

export default Report;