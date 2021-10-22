import { configureStore } from "@reduxjs/toolkit";

import restMiddleware from "./middleware/restMiddleware";

import userSlice from './userSlice';

const reducer = { userSlice };
const middleware = [ restMiddleware ];

export default function createStore () {
    return configureStore( { reducer, middleware });
}