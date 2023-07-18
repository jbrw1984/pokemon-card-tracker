import React, { FC, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
// import {PokemonCard, priceHistoryData} from '../ProductCard/cardInfo'; 
import { PokemonCard } from "../../../../api/src/interfaces/cards.interface";
import './CardDescription.css';

interface CardDescriptionProps {
    cardInfo: PokemonCard; 
}

const CardDescription: FC<CardDescriptionProps> = ({ cardInfo}): JSX.Element => {
    return (
        <Card className="card-desc-comp">
            <Card.Img className="card-desc-img" src={cardInfo.image}></Card.Img>
            <Card.Body className="card-desc-body">
                <Card.Title className="card-desc-name">{cardInfo.name}</Card.Title>
                <Card.Subtitle className="card-desc-sale-price">${cardInfo.salePrice}</Card.Subtitle>

                <Card.Text className="card-desc-price-rtn">
                    Market Price: <span className="card-desc-market-price">${cardInfo.marketPrice}</span>  |  Card Rating: <span className="card-desc-rating">{cardInfo.rating}</span>
                </Card.Text>

                <Card.Text className="card-desc-info">
                    {cardInfo.description}
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
                        <Form.Control className="price-text-input" type="number" placeholder="$1.00" min={0}></Form.Control>
                        <Button className="button-addon1" id="button-addon1" variant="dark" type="submit" value="Submit">SUBMIT PRICE</Button>
                    </InputGroup>
                </Form>
                
            </Card.Body>
        </Card>
    )
}

export default CardDescription; 