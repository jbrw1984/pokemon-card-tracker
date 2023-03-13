import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CardRater.css';

function CardRater() {

    return (
        <Form className="cardRaterForm">
            <Form.Group className="cardRaterGroup" controlId="cardRating" >
                <Col>
                    <Form.Label className="cardRaterLabel" htmlFor="">Rate the Card</Form.Label>
                </Col>
                <Col>
                    <Form.Text className="cardRaterText">The condition of the card on a scale of 1-10, with 10 being best.</Form.Text>
                </Col>
                <Col>
                    <Form.Range 
                        className="cardRaterSlider"
                        id="cardRating"

                        min={1}
                        max={10}
                        step={1}
                        
                    />
                </Col>
            </Form.Group>
            <Button className="cardRaterButton" variant="dark" type="submit" value="Submit">
                ENTER RATING
            </Button>
        </Form>
    );
  }
  
  export default CardRater;
