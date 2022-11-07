import React, { useState, useEffect } from "react";
import { Card, Container, Button, ListGroup, Badge } from "react-bootstrap";

import axios from "axios";
import millify from "millify";

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
        // console.log(response.data.data['coins']);

        setStatistics(response.data.data["stats"]);
        setCoins(response.data.data["coins"]);
        
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);



  return (
    <div className="container pt-5 pb-5">
      <div className="jumbotron ">
        <h1 className="display-1">Hello, world!</h1>
        <p className="lead">
          This is a one stop home for all information about crytocurencies.{" "}
        </p>
        <hr className="my-4" />
        <p>
          Information about cryptcurency prices, market trends, news, exchanges
          and many more.
        </p>
      </div>

      <div className="row bg-light mt-5 py-5 px-3">
        <h1 className="display-6 lead">Cryptocurrency statistics</h1>

        <div className="row align-items-md-stretch mt-3">
          
          <div className="col-md-4 mt-3 ">
            <div className="h-100 p-3  border rounded-3">
              <h3 className="display-7 lead">Total coins</h3>
              <p className="fw-bold mb-0 fs-4">{millify(statistics.totalCoins, {precision: 2}) }</p>
            </div>
          </div>
          <div className="col-md-4 mt-3 ">
            <div className="h-100 p-3  border rounded-3">
              <h3 className="display-7 lead">Total exchages</h3>
              <p className="fw-bold mb-0 fs-4">{millify(statistics.totalExchanges)}</p>
            </div>
          </div>
          <div className="col-md-4 mt-3 ">
            <div className="h-100 p-3  border rounded-3">
              <h3 className="display-7 lead">Total 24h volume</h3>
              <p className="fw-bold mb-0 fs-4">{millify(statistics.total24hVolume, {precision: 3})}</p>
            </div>
          </div>
          <div className="col-md-4 mt-3 ">
            <div className="h-100 p-3  border rounded-3">
              <h3 className="display-7 lead">Total markets</h3>
              <p className="fw-bold mb-0 fs-4">{millify(statistics.totalMarkets, {precision: 2})}</p>
            </div>
          </div>
          <div className="col-md-4 mt-3 ">
            <div className="h-100 p-3  border rounded-3">
              <h3 className="display-7 lead">Total market cap</h3>
              <p className="fw-bold mb-0 fs-4">{millify(statistics.totalMarketCap)}</p>
            </div>
          </div>
        </div>

      </div>

      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Top Cryptocurrencies</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <span
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              ico
            </span>
            <div>
              <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <span
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              ic
            </span>
            <div>
              <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <span
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              ic
            </span>
            <div>
              <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <span
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              ic
            </span>
            <div>
              <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <span
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              ic
            </span>
            <div>
              <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
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
