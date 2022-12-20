import { configureStore } from "@reduxjs/toolkit";
import cyptoSlice from './cryptoSlice';

export const store = configureStore ({
    reducer : {
        cryptos: cyptoSlice,
    },
});