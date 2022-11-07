import React from 'react'

import Crypto from '../components/Crypto'

const Cryptocurrencies = () => {
  return (
    

    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Cryptocurrencies</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        
        <Crypto />
        
        <div className="col d-flex align-items-start">
          <span className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">ico</span>
          <div>
            <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <span className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">ic</span>
          <div>
            <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        
      </div>
    </div>

  )
}

export default Cryptocurrencies