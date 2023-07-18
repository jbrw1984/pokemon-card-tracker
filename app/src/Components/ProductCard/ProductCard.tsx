import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from "react-router-dom";
import './ProductCard.css';
import './274465 1.png'

function ProductCard(props: any) {

  const navigate = useNavigate(); 
  function handleClick(path: string) {
    navigate(path); 
  }

  const DEFAULT_NAME : string = 'Pokemon'
  const DEFAULT_IMAGE : string = './274465 1.png'
  const DEFAULT_SALE_PRICE : number = NaN
  const DEFAULT_MARKET_PRICE : number = NaN
  const DEFAULT_DESCRIPTION : string = 'Pokemon'

  return (
    <Card className="card-component">
      <Card.Img src={props.pokemonCard && props.pokemonCard.image ? props.pokemonCard.image : DEFAULT_IMAGE} className="card-img" />
      <Card.Body className="card-body">
        <Card.Text className="card-title">Pokemon Go</Card.Text>

        <Card.Title className="card-name">
          {props.pokemonCard && props.pokemonCard.name ? props.pokemonCard.name : DEFAULT_NAME}
        </Card.Title>

        <Card.Title className="sale-price">
          ${props.pokemonCard && props.pokemonCard.salePrice ? props.pokemonCard.salePrice : DEFAULT_SALE_PRICE}
        </Card.Title>

        <Card.Text 
          className="mkt-price">Market Price: 
          <span className="mkt-price-num">
            ${props.pokemonCard && props.pokemonCard.marketPrice ? props.pokemonCard.marketPrice : DEFAULT_MARKET_PRICE}
          </span>
        </Card.Text>

        <Card.Text className="card-desc">
          {props.pokemonCard && props.pokemonCard.description ? props.pokemonCard.description : DEFAULT_DESCRIPTION}
        </Card.Text>

        <Button 
          variant="dark" 
          className="card-btn"
          onClick={() => handleClick(`/details/${props.pokemonCard.id}`)}
        >
          <div className="btn-link">VIEW MORE DETAILS</div>
        </Button>

      </Card.Body>
    </Card>
  );
}

export default ProductCard;