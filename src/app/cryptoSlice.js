import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
    method: "GET",
    // url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
    },
    headers: {
        "X-RapidAPI-Key": "cefbab10f2msh7a1be607a45cd2cp186b69jsn5983f1e48100",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
};

export const getCryptocurrencies = createAsyncThunk(
    'cryptocurrencies/getCryptocurrencies',
    async (options, thunkAPI) => {
        try {
          const response = await axios.get('https://coinranking1.p.rapidapi.com/coins', options);
          console.log(response.data);
          return response.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
      }
);
getCryptocurrencies();

export const cryptocurrenciessSlice  = createSlice ({
    name: 'crytocurrencies',
    initialState: {
        cryptoData: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCryptocurrencies.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(getCryptocurrencies.fulfilled, (state, action) => {
            state.cryptoData = action.payload;
            state.isLoading = false;
            state.hasError = false;
        })
        .addCase(getCryptocurrencies.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = false;
        })
    }
});

// selectors
// export const selectCryptoData = state => state.cryptocurrencies.cryptoData;
// export const selectLoadingState = state => state.cryptocurrencies.isLoading;
// export const selectErrorState = state => state.getCryptocurrencies.hasError;

export default cryptocurrenciessSlice.reducer;