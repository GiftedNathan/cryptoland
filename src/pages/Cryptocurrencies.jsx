import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Crypto from '../components/Crypto';

const Cryptocurrencies = () => {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
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

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setCoins(response.data.data["coins"]);

      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);




  return (


    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Cryptocurrencies</h2>

      <div className="container-fluid d-flex justify-content-center">
        <form className="form col-md-8 mt-5 text-center d-flex justify-content-center">
          <input onChange={(e) => setSearch(e.target.value)} className="form-control form-control-lg " type="text" placeholder="Search Crypto" aria-label=".form-control-lg example" />
        </form>

      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">

        {/* <Crypto /> */}
        {
          coins.map((coin) => {
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