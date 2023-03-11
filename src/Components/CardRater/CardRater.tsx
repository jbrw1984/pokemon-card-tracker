import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CardRater.css';

function CardRater() {

    return (
        <Form>
            <Form.Group controlId="cardRating">
                <Form.Label htmlFor="">Rate the Card</Form.Label>
                <Form.Text>The condition of the card on a scale of 1-10, with 10 being best.</Form.Text>
                <Form.Range 
                    id="cardRating"

                    min={1}
                    max={10}
                    step={1}
                    
                />
            </Form.Group>
            <Button variant="dark" type="submit" value="Submit">
                ENTER RATING
            </Button>

        </Form>
    );
  }
  
  export default CardRater;
