import { React, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './App.css';

const ScrollingCards = ({ setCategory }) => {
  return (
    <Container fluid className="overflow-hidden">
      <Row className="scrollbar flex-row flex-nowrap g-4 overflow-auto">
        {[
          { color: 'Primary', category: 'server-administration' },
          { color: 'Secondary', category: 'frontend' },
          { color: 'Success', category: 'backend' },
          { color: 'Danger', category: 'video-production' },
          { color: 'Warning', category: 'sales-and-marketing' },
          { color: 'Info', category: 'finance' },
        ].map((variant) => (
          <Col lg="4" key={variant.category} className="text-light wrapper-link">
            <Card style={{ width: '18rem' }} bg={variant.color.toLowerCase()}>
              <Card.Body>
                <Card.Title>Server Adminstration</Card.Title>
                <Card.Subtitle className="mb-2 text-light hidden-text">
                  The dark arts of configuring servers
                </Card.Subtitle>
                <Card.Text>Something mortals can understand.</Card.Text>
                {/* <a href="#" class="card-link stretched-link">Card link</a> */}
              </Card.Body>
            </Card>
            <a
              href="#"
              className="stretched-link"
              onClick={() => setCategory(variant.category)}
            ></a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ScrollingCards;
