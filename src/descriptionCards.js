import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './App.css';

const DescriptionCard = ({ setIsChart, name, description }) => {
  return (
    <>
      <Card className="mb-3 card-wrapper">
        <Row className="g-1">
          <Col lg={2}>
            <div className="image-box">
              <Card.Img
                style={{ objectFit: 'contain' }}
                src="https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_960_720.jpg"
                alt="..."
              />
            </div>
          </Col>
          <Col lg={10}>
            <div className="flex-grow-1">
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {/* <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> --> */}
              </Card.Body>
            </div>
          </Col>
        </Row>
        <a href="#" className="stretched-link" onClick={() => setIsChart(true)}></a>
      </Card>
    </>
  );
};

export default DescriptionCard;
