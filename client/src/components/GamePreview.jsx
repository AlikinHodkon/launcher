import React from "react";
import '../styles/GamePreview.css';
import { useDispatch } from "react-redux";
import { addToCard } from "../reducers/goodsReducer";

const GamePreview = function(props){
    const dispatch = useDispatch();
    return(
        <div className="game">
            <h3>{props.game.title}</h3>
            <p>{props.game.description}</p>
            <div className="picture">
             <img src={props.game.img} alt="No" />
            </div>
            <div className="flex justify-center">
                <p>{props.game.price}$</p>
                <button onClick={() => {dispatch(addToCard(props.game))}} className="text-[#4452FE] text-center ml-5">Add to cart</button>
            </div>
        </div>
    );
}

export default GamePreview;