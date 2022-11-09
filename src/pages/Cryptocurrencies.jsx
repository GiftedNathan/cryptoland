import React from 'react'

import Crypto from '../components/Crypto'

const Cryptocurrencies = () => {
  return (
    

    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Cryptocurrencies</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        
        <Crypto />
        {/* {
          coins.map((coin) => {
            return(

              <Link  to={`/cryptocurencies/${coin.uuid}`} key={coin.uuid}>
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
        } */}
        
        
      </div>
    </div>

  )
}

export default Cryptocurrencies