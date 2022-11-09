import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Button, ListGroup, Badge } from "react-bootstrap";

import axios from "axios";
import millify from "millify";

import Crypto from "../components/Crypto";
import Statistics from "../components/Statistics";

// const axios = require("axios").default;

const Home = () => {
  const [statistics, setStatistics] = useState([]);
  const noOfStatistics = Object.keys(statistics).length; // getting the number of items in the object

  const [coins, setCoins] = useState([]);

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
        // console.log(response.data.data["stats"]);
        // console.log(response.data.data['coins'][1]);

        setStatistics(response.data.data["stats"]);
        setCoins(response.data.data["coins"]);
        // console.log(coins);
        
      })
      .catch(function (error) {
        console.error(error);
      });
      
  }, []);



  return (
    <div className="container pt-5 pb-5">
      <div className="jumbotron ">
        <h1 className="display-1">Hello, Billionaires!</h1>
        <p className="lead">
          Welcome to the one stop home for all information about crytocurencies.{" "}
        </p>
        <hr className="my-4" />
        <p>
          Top cryptcurencies, Cryptcurency prices, Market trends, Crypto news, Exchanges
          and many more.
        </p>
      </div>

      <div className="row bg-light mt-5 py-5 px-3">
        <h1 className="display-6 lead">Cryptocurrency statistics</h1>

        <div className="row align-items-md-stretch mt-3">
          
          <Statistics item={'Total coins'} figue={statistics.totalCoins}  />
          <Statistics item={'Total exchages'} figue={statistics.totalExchanges} />
          <Statistics item={'Total 24h volume'} figue={statistics.total24hVolume}  />
          <Statistics item={'Total markets'} figue={statistics.totalMarkets}  />
          <Statistics item={'Total market cap'} figue={statistics.totalMarketCap}  />

        </div>

      </div>

      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Top Cryptocurrencies</h2>

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
                  color={coin.color}

                />
              </Link>
              

            );
          })
        }


        </div>
      </div>

      {/* <ListGroup as="ol" className="d-flex flex-wrap " numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start w-25 m-5"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start w-25 m-5"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start w-25 m-5"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
      </ListGroup> */}
    </div>
  );
};

export default Home;
