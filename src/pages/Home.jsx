import React from 'react'
import { Card, Container, Button, ListGroup, Badge } from 'react-bootstrap'


const Home = () => {
  return (
    <div className='container pt-5 pb-5' >

      <div className="jumbotron ">
        <h1 className="display-1">Hello, world!</h1>
        <p className="lead">This is a one stop home for all information about crytocurencies. </p>
        <hr className="my-4" />
        <p>Information about cryptcurency prices, market trends, news, exchanges and many more.</p>
      </div>

      <div className="row bg-light mt-5 py-5 px-3">
        <h1 className="display-6 lead">Cryptocurrency statistics</h1>
     
        <div class="row align-items-md-stretch mt-3">
          
          <div className="col-md-4 mt-3 ">
            <div className="h-100 p-3  border rounded-3">
              <h3>Special title</h3>
              <p>43,232 </p>            
            </div>
          </div>
          
          <div className="col-md-4 mt-3 ">
            <div className="h-100 p-3  border rounded-3">
              <h3>Special title</h3>
              <p>43,232 </p>            
            </div>
          </div>
        </div>
        
        <h3 className="display-7 lead mt-5">More statistics</h3>
      </div>


      <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Top Cryptocurrencies</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
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
        <div className="col d-flex align-items-start">
          <span className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">ic</span>
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
        <div className="col d-flex align-items-start">
          <span className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">ic</span>
          <div>
            <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
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
  )
}

export default Home