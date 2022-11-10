import React, { useEffect, useState } from "react";
import axios from "axios";
import { render } from 'react-dom';

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
        console.log(response.data.data.coin);
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
          <img src={coin.iconUrl} alt="crypto icon" style={{width: 80, height: 80 }} />
        <span className="fs-4">{coin.name +' (' + coin.symbol + ')'}</span>
        </a>
      </header>

      <main>
        {/* <h1>{coin.name}</h1> */}
        <div className="col-md-8">
          
<div dangerouslySetInnerHTML={{ __html: coin.description }} />
        </div>

        

        <hr className="col-3 col-md-2 mb-5" />

        <div className="row g-5">
          <div className="col-md-6">
            <h2>Starter projects</h2>
            <p>
              Ready to beyond the starter template? Check out these open source
              projects that you can quickly duplicate to a new GitHub
              repository.
            </p>
            <ul className="icon-list ps-0">
              <li className="d-flex align-items-start mb-1">
                <a
                  href="https://github.com/twbs/bootstrap-npm-starter"
                  rel="noopener"
                  target="_blank"
                >
                  Bootstrap npm starter
                </a>
              </li>
              <li className="text-muted d-flex align-items-start mb-1">
                Bootstrap Parcel starter (coming soon!)
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <h2>Guides</h2>
            <p>
              Read more detailed instructions and documentation on using or
              contributing to Bootstrap.
            </p>
            <ul className="icon-list ps-0">
              <li className="d-flex align-items-start mb-1">
                <a href="/docs/5.2/getting-started/introduction/">
                  Bootstrap quick start guide
                </a>
              </li>
              <li className="d-flex align-items-start mb-1">
                <a href="/docs/5.2/getting-started/webpack/">
                  Bootstrap Webpack guide
                </a>
              </li>
              <li className="d-flex align-items-start mb-1">
                <a href="/docs/5.2/getting-started/parcel/">
                  Bootstrap Parcel guide
                </a>
              </li>
              <li className="d-flex align-items-start mb-1">
                <a href="/docs/5.2/getting-started/vite/">
                  Bootstrap Vite guide
                </a>
              </li>
              <li className="d-flex align-items-start mb-1">
                <a href="/docs/5.2/getting-started/contribute/">
                  Contributing to Bootstrap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="pt-5 my-5 text-muted border-top">
        Created by the Bootstrap team &middot; &copy; 2022
      </footer>
    </div>
  );
};

export default Cryptocurrency;
