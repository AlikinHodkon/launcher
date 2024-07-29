import React from "react";
import GamePreview from "../components/GamePreview";
import "../styles/Shop.css";

const Shop = function(){
    const games =([
        {id: 1, title: 'TowerDefence', description: 'A little bit about the good', img: "/images/1.jpg", price: 25},
        {id: 2, title: 'Infernal Crusade', description: 'A little bit about the good', img: '/images/1.jpg', price: 80},
        {id: 3, title: 'Magicka', description: 'A little bit about the good', img: '/images/1.jpg', price: 15},
        {id: 4, title: 'Serious John', description: 'A little bit about the good', img: '/images/1.jpg', price: 45},
        {id: 5, title: 'Tail of Marx', description: 'A little bit about the good', img: '/images/1.jpg', price: 50},
        {id: 6, title: 'Serious John', description: 'A little bit about the good', img: '/images/1.jpg', price: 30},
    ])
    return (
        <div>
            <h1 className="shopTitle text-[64px]">All games</h1>
            <div className="gameList">
                {games.map(game => <GamePreview  game = {game} key = {game.id} />)}
            </div>
        </div>
    );
}

export default Shop;