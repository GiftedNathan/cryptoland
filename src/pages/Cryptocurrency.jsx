import React, { useEffect, useState } from "react";
import axios from "axios";
import millify from "millify";
import { render } from 'react-dom';
import {Badge} from 'react-bootstrap';

import { useParams } from "react-router-dom";

const Cryptocurrency = () => {
  const coinId = useParams().cryptoID;

  const [coin, setCoin] = useState([]);

  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
    headers: {
      "X-RapidAPI-Key": "cefbab10f2msh7a1be607a45cd2cp186b69jsn5983f1e48100",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.data.coin);
        setCoin(response.data.data.coin);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="col-lg-8 mx-auto p-4 py-md-5">
      <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <img src={coin.iconUrl} alt="crypto icon" style={{width: 80, height: 80, marginRight: 10+'px', }} />
          <span className="fs-4" style={{color: coin.color, }}>{coin.name +' (' + coin.symbol + ')'}</span>
        </a>
      </header>

      <main>
        <div className="col-md-8">
          {/* passing the string with html tags  */}
          <div dangerouslySetInnerHTML={{ __html: coin.description }} />
        </div>

        

        <hr className="col-3 col-md-2 mb-5" />

        <div className="row g-5">
          <div className="col-md-6">
            <h2>{coin.name +' '} Stats</h2>
            <p>
              Latest statistics as at today
            </p>
            <ul className="icon-list ps-0">
              
              <li className=" d-flex align-items-start mb-1">
                Rank : <Badge style={{backgroundColor: coin.color, marginLeft: 5, }}>{ ' ' + coin.rank}</Badge> 
              </li>
              <li className=" d-flex align-items-start mb-1">
                Current price : ${ millify(coin.price, {precision: 12}) }
                
              </li>
              
              <li className=" d-flex align-items-start mb-1">
                BTC price : ${  millify(coin.btcPrice, {precision: 12}) }
              </li>
              <li className=" d-flex align-items-start mb-1">
                
              </li>
              
              
            </ul>
          </div>

          <div className="col-md-6">
            <h2>{coin.name +' '} Market info</h2>
            <p>
              See more detailed information about {coin.name +' (' + coin.symbol + ')'} in the market today.
            </p>
            <ul className="icon-list ps-0">
              <li className=" d-flex align-items-start mb-1">
                Market cap : ${ millify(coin.marketCap, {precision: 5}) }
              </li>
              <li className=" d-flex align-items-start mb-1">
                Number of exchanges : {coin.numberOfExchanges}
              </li>
              <li className=" d-flex align-items-start mb-1">
                Number of markets : {coin.numberOfMarkets}
              </li>
              <li className=" d-flex align-items-start mb-1">
                Web site : <a href={coin.websiteUrl} target="_blank" rel="noopener noreferrer">{coin.websiteUrl}</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Cryptocurrency;
