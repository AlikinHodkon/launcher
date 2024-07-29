import { configureStore } from "@reduxjs/toolkit";
import { goodsReducer } from "./reducers/goodsReducer";
import { authReducer } from "./reducers/authReducer";
export default configureStore({
    reducer: {
        goods: goodsReducer,
        auth: authReducer
    },
})