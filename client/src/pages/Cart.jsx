import React, { useState } from 'react'
import GoodInCart from '../components/GoodInCart';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount } from '../reducers/goodsReducer';
import { removeFromCard } from '../reducers/goodsReducer';

export default function Cart() {
    const value = useSelector(selectCount);
    const dispatch = useDispatch();
    const [goods, setGoods] = useState(localStorage.getItem("goods") === null ? [] : JSON.parse(localStorage.getItem('goods')));
    function changeGoods(game){
        dispatch(removeFromCard(game)); 
        setGoods(JSON.parse(localStorage.getItem('goods')));
    } 
    return (
        <div className='w-1/2 flex flex-col items-center text-white'>
            <h1 className='text-[64px]'>Goods</h1>
            {goods.map(good => <GoodInCart game={good} changeGoods={changeGoods} key={Date.now()+good.id} />)}
            <p className='text-[32px] ml-auto'>Total price: {value}</p>
        </div>
    )
}
