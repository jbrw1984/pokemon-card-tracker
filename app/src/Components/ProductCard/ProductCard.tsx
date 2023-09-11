import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import './ProductCard.css';
import './Cardback.jpg'
import { PokemonCard } from "../../../../api/src/interfaces/cards.interface";


function ProductCard(props: any) {

  const navigate = useNavigate(); 

  function handleClick(currentPokemonCard: PokemonCard) {
    // Pass in current Pokemon card info as state
    navigate(`/details/${currentPokemonCard._id}`, {state: currentPokemonCard}); 
  }

  const DEFAULT_NAME : string = 'Pokemon'
  const DEFAULT_IMAGE : string = './Cardback.jpg'
  const DEFAULT_SALE_PRICE : number = NaN
  const DEFAULT_MARKET_PRICE : number = NaN
  const DEFAULT_DESCRIPTION : string = 'Pokemon'

  return (
    <Card className="card-component">
      <Card.Img src={props.pokemonCard && props.pokemonCard.image ? props.pokemonCard.image : DEFAULT_IMAGE} className="card-img" />
      <Card.Body className="card-body">
        {/* <Card.Text className="card-title">Pokémon Card</Card.Text> */}

        <Card.Title className="card-name">
          {props.pokemonCard && props.pokemonCard.name ? props.pokemonCard.name : DEFAULT_NAME}
        </Card.Title>

        <Card.Title className="sale-price">
          ${props.pokemonCard && props.pokemonCard.salePrice ? props.pokemonCard.salePrice.toFixed(2) : DEFAULT_SALE_PRICE}
        </Card.Title>

        <Card.Text 
          className="mkt-price">Market Price: 
          <span className="mkt-price-num">
            ${props.pokemonCard && props.pokemonCard.marketPrice ? props.pokemonCard.marketPrice.toFixed(2) : DEFAULT_MARKET_PRICE}
          </span>
        </Card.Text>

        <Card.Text className="card-desc">
          {props.pokemonCard && props.pokemonCard.description ? props.pokemonCard.description : DEFAULT_DESCRIPTION}
        </Card.Text>

        <Button 
          variant="dark" 
          className="card-btn"
          // onClick={() => handleClick(`/details/${props.pokemonCard.id}`)}
          // FIND: find way just pass in props.pokemonCard, instead of string of path. 
          // Then, on details page, only need to call endpoint to include price history
          onClick={() => handleClick(props.pokemonCard)}
        >
          <div className="btn-link">VIEW MORE DETAILS</div>
        </Button>

      </Card.Body>
    </Card>
  );
}

export default ProductCard;