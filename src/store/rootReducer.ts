import {combineReducers} from "redux";
import { userReducer } from "./user/userReducer";
import { categoriesReducer } from "./categories/categoriesReducer";
import { shoppingCartReducer } from "./shoppingCart/shoppingCartReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    shoppingCart: shoppingCartReducer
})