import millify from "millify";
import React from "react";

// import {ReactComponent as CryptoLogo} from iconUrl;



const Crypto = ({name, symbol, price, id, iconUrl, color, ranking, marketCap  }) => {
  
  
  return (
    <div className="col d-flex align-items-start" key={id}>
      <span
        className="bi text-muted flex-shrink-0 me-3"
        width="1.75em"
        height="1.75em"
      >
        
        <img src={iconUrl} alt="icon image"  width="1.75em" height="1.75em"/>
      </span>
      <div>
        <p className="fw-bold mb-2 fs-6">{name +' (' + symbol + ')'}</p>
        <p className="mb-0">Price: { millify(price, {precision: 5}) }</p>
        <p className="mb-0">Market Cap: { millify(marketCap) }</p>
        <p className="mb-0">Ranking: { millify(ranking) }</p>
      </div>
    </div>
  );
};

export default Crypto;
