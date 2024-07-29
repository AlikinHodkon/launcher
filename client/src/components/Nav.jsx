import React from "react";
import '../styles/Nav.css';
import { useDispatch, useSelector } from "react-redux";
import { selectGoods } from "../reducers/goodsReducer";
import { logout, selectAuth } from "../reducers/authReducer";

const Nav = function(){
    const amount = useSelector(selectGoods);
    const auth = useSelector(selectAuth);
    const dispatch = useDispatch();
    return(
        <nav>
            <p className="logo">Game<span>Space</span></p>
            <menu>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/library">Library</a></li>
                    <li><a href="/report">Report</a></li>
                    <li><a href="/cart">Cart: {amount.length}</a></li>
                </ul>
            </menu>
            <div className={`flex mr-auto ${auth.isAuth ? "hidden" : ""}`}>
                <button><a href="/login">Login</a></button>
                <button><a href="/registration">Registration</a></button>
            </div>
            <div className={`flex mr-auto ${auth.isAuth ? "" : "hidden"}`}>
                <p className="text-white text-[16px] mr-2">{auth.email}</p>
                <button onClick={() => {dispatch(logout())}}>Logout</button>
            </div>
        </nav>
    );
}

export default Nav;