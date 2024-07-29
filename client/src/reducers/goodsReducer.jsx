import { createAction, createReducer } from "@reduxjs/toolkit";

export const addToCard = createAction('card/add');
export const removeFromCard = createAction('card/remove');

export const goodsReducer = createReducer({value: localStorage.getItem("cart") === null ? 0 : JSON.parse(localStorage.getItem("cart")), goods: localStorage.getItem("goods") === null ? [] : JSON.parse(localStorage.getItem("goods"))}, builder => {
    builder.addCase(addToCard, (state, action) => {
        state.goods = [...state.goods, action.payload];
        state.value += action.payload.price;
        localStorage.setItem('goods', JSON.stringify(state.goods));
        localStorage.setItem('cart', JSON.stringify(state.value));
    }).addCase(removeFromCard, (state, action) => {
        state.goods = state.goods.filter((g) => g.id !== action.payload.id);
        state.value -= action.payload.price;
        localStorage.setItem('goods', JSON.stringify(state.goods));
        localStorage.setItem('cart', JSON.stringify(state.value));
    })
})

export const selectGoods = (state) => state.goods.goods;
export const selectCount = (state) => state.goods.value;