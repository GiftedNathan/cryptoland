import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Crypto from '../components/Crypto';

import { useDispatch, useSelector } from "react-redux";
import fetchCoins from '../app/cryptoSlice'

const Cryptocurrencies = () => {

  const coins = useSelector( (state) => state.cryptos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( fetchCoins() );
  }, []);
  
  
  console.log(fetchCoins());
  // console.log(search);

  return (

    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Cryptocurrencies</h2>

      <div className="container-fluid d-flex justify-content-center">
        <form className="form col-md-8 mt-5 text-center d-flex justify-content-center">
          <input onChange={(e) => setSearch(e.target.value)} className="form-control form-control-lg " type="text" placeholder="Search Crypto" aria-label=".form-control-lg example" />
        </form>

      </div>
      <div className="container d-flex justify-content-center lead fs-5 fw-b">
        { coins.isLoading ===  true ? ' Hold on while i load your requested information' : '' }
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">

        {/* <Crypto /> */}
        {
          
          coins.cryptoData.filter((coin) => {
            return search.toLowerCase() === "" 
              ? coin 
              : coin.name.toLowerCase().includes(search);
          })
          .map((coin) => {
            return(
              <Link  to={`/${coin.uuid}`} key={coin.uuid}>
                <Crypto 
                  id={coin.uuid} 
                  name={coin.name} 
                  symbol={coin.symbol}
                  price={coin.price}
                  marketCap={coin.marketCap}
                  ranking={coin.rank}
                  iconUrl={coin.iconUrl}
                  color={coin.color}
                />
              </Link>
              

            );
          })
        }


      </div>
    </div>

  )
}

export default Cryptocurrencies