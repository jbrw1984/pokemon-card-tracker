import React, { FC, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
// import {PokemonCard, priceHistoryData} from '../ProductCard/cardInfo'; 
import { PokemonCard } from "../../../../api/src/interfaces/cards.interface";
import './CardDescription.css';
import '../ProductCard/Cardback.jpg'

interface CardDescriptionProps {
    cardInfo: PokemonCard; 
}

const CardDescription: FC<CardDescriptionProps> = ({ cardInfo}): JSX.Element => {
    const [priceText, setPriceText] = useState('');
    
    // Import correct price history interface/dto
    const [priceHistoryObject, setPriceHistoryObject] = useState<CreatePriceHistoryDto>()

    const handleChange = (event: any) => {
        setPriceText(event.target.value);
      };

    const handleSubmit = () => {
        setPriceHistoryObject(
            {
                // Nothing passed into date obj, defualts to current date
                date: new Date(), 
                quantity: 1, 
                price: priceText
            }
        )

        // Fetch/post request with newly created price hsitory object...
    }

    const DEFAULT_NAME : string = 'Pokemon'
    const DEFAULT_IMAGE : string = './Cardback.jpg'
    const DEFAULT_SALE_PRICE : number = NaN
    const DEFAULT_MARKET_PRICE : number = NaN
    const DEFAULT_RATING: number = NaN
    const DEFAULT_DESCRIPTION : string = 'Pokemon'

    return (
        <Card className="card-desc-comp">
            <Card.Img className="card-desc-img" src={cardInfo && cardInfo.image ? cardInfo.image : DEFAULT_IMAGE}></Card.Img>
            <Card.Body className="card-desc-body">
                <Card.Title className="card-desc-name">{cardInfo && cardInfo.name ? cardInfo.name : DEFAULT_NAME}</Card.Title>
                <Card.Subtitle className="card-desc-sale-price">${cardInfo && cardInfo.salePrice ? cardInfo.salePrice : DEFAULT_SALE_PRICE}</Card.Subtitle>

                <Card.Text className="card-desc-price-rtn">
                    Market Price: 
                    <span className="card-desc-market-price">
                        ${cardInfo && cardInfo.marketPrice ? cardInfo.marketPrice : DEFAULT_MARKET_PRICE}
                    </span>  |  Card Rating: 
                    <span className="card-desc-rating">
                        {cardInfo && cardInfo.rating ? cardInfo.rating : DEFAULT_RATING}
                    </span>
                </Card.Text>

                <Card.Text className="card-desc-info">
                    {cardInfo && cardInfo.description ? cardInfo.description : DEFAULT_DESCRIPTION}
                    {/* Attack 1:[L] Energize Attach a L Energy card from your discard pile to this Pokemon.
                    <ul>
                        <li>Card Number / Rarity:049/203 / Common</li>
                        <li>Card Type / HP / Stage:Lightning / 60 / Basic</li>
                        <li>Attack 2:[2L] Electro Ball (30)</li>
                        <li>Weakness / Resistance / Retreat Cost:Fx2 / None / 1</li>
                    </ul> */}
                </Card.Text>

                <Form>
                    <Form.Label className="card-desc-form-label">Edit Card Price</Form.Label>
                    <InputGroup className="price-input-group">
                        <Form.Control className="price-text-input" type="number" placeholder="$1.00" value={priceText} min={0}></Form.Control>
                        <Button className="button-addon1" id="button-addon1" variant="dark" onClick={handleSubmit} type="submit" value="Submit">SUBMIT PRICE</Button>
                    </InputGroup>
                </Form>
                
            </Card.Body>
        </Card>
    )
}

export default CardDescription; 