import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './ProductCard.css';

function ProductCard(props: any) {
  return (
    <Card className="card-component">
      <Card.Img src={props.image} className="card-img" />
      <Card.Body className="card-body">
        <Card.Text>Pokemon Go</Card.Text>
        <Card.Title>{props.name}</Card.Title>
        <Card.Title className="sale-price">${props.salePrice}</Card.Title>
        <Card.Text>Market Price: <span className="mkt-price-num">${props.marketPrice}</span></Card.Text>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="dark" className="card-btn"><Link to="/details">VIEW MORE DETAILS</Link></Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;