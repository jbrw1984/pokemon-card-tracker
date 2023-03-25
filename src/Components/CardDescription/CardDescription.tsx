import React, { FC, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import {PokemonCard, priceHistoryData} from '../ProductCard/cardInfo'; 
import './CardDescription.css';

interface CardDescriptionProps {
    cardInfo: PokemonCard; 
}

const CardDescription: FC<CardDescriptionProps> = ({ cardInfo}): JSX.Element => {
    return (
        <Card className="cardDescComponent">
            <Card.Img className="cardDescImage" src={cardInfo.image}></Card.Img>
            <Card.Body className="cardDescBody">
                <Card.Title>{cardInfo.name}</Card.Title>
                <Card.Subtitle>{cardInfo.salePrice}</Card.Subtitle>
                <Card.Text>Market Price: ${cardInfo.marketPrice} | Card Rating: {cardInfo.rating}</Card.Text>
                <Card.Text>
                    Attack 1:[L] Energize Attach a L Energy card from your discard pile to this Pokemon.
                    <ul>
                        <li>Card Number / Rarity:049/203 / Common</li>
                        <li>Card Type / HP / Stage:Lightning / 60 / Basic</li>
                        <li>Attack 2:[2L] Electro Ball (30)</li>
                        <li>Weakness / Resistance / Retreat Cost:Fx2 / None / 1</li>
                    </ul>
                </Card.Text>

                <Form>
                    <Form.Label>Edit Card Price</Form.Label>
                    <InputGroup>
                        <Form.Control type="number" placeholder="$1.00" min={1} max={10}></Form.Control>
                        <Button id="button-addon1" variant="dark" type="submit" value="Submit">SUBMIT PRICE</Button>
                    </InputGroup>
                </Form>
                
            </Card.Body>
        </Card>
    )
}

export default CardDescription; 