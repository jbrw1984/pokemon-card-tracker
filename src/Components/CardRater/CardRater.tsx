import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CardRater.css';

function CardRater() {

    return (
        <Form className="cardRaterForm">
            <Form.Group className="cardRaterGroup" controlId="cardRating" >
                <Form.Label className="cardRaterLabel" htmlFor="">Rate the Card</Form.Label>
                <Form.Text className="cardRaterText text-dark">The condition of the card on a scale of 1-10, with 10 being best.</Form.Text>
                <Form.Range 
                    className="cardRaterSlider"
                    id="cardRating"

                    min={1}
                    max={10}
                    step={1}
                />
            </Form.Group>
            <Button className="cardRaterButton" variant="dark" type="submit" value="Submit">
                ENTER RATING
            </Button>
        </Form>
    );
  }
  
  export default CardRater;
