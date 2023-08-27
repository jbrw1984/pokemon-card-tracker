import React, { FC } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CardRater.css';
import { CardRating } from "../../../../api/src/interfaces/cardRating.interface";
import { PokemonCard } from '../../../../api/src/interfaces/cards.interface';

interface CardRatingProps {
    cardInfo: PokemonCard; 
    onNewCardRatingSubmission: (cardRatingPostData: CardRating) => void
}


const sliderTrackColor : NodeListOf<Element> = document.querySelectorAll('input[type="range"]::-webkit-slider-runnable-track'); 
const slider : any = document.getElementById("myinput"); 

const CardRater: FC<CardRatingProps> = ({ cardInfo, onNewCardRatingSubmission}): JSX.Element => {

    const [sliderValue, setSliderValue] = useState<number>(0);
    
    const min : number = 1; 
    const max : number = 10; 

    const updateSliderColor = (event : any) : void => {

        console.log("True slider value: " + event.target.value)
        setSliderValue(event.target.value); 

        const progress : string = (sliderValue-min)/(max-min)*100 + '%'; 
        event.target.style.background = `linear-gradient(90deg, #FCCD29 0% ${progress}%, #94938d ${progress}% 100%)`; 

    }
    
    let progressUpdate : string = (sliderValue-min)/(max-min)*100 + '%';
    const styleInput = {
        background: `linear-gradient(90deg, #FCCD29 0% ${progressUpdate}, #94938d ${progressUpdate} 100%)`,
    }


    /**
     * Function for handling slider form submission. 
     * Will create new card rating object, post it to API, 
     * and update current card rating average. 
     * 
     * @param e event from slider form submission
     */
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log("Button Clicked")
        console.log("Card ID: " + cardInfo._id)

        try {
            // Make new CardRating object
            const cardRatingPostData: CardRating = {
                pokemonCardId: String(cardInfo._id), 
                date: new Date(), 
                rating: Number(sliderValue)
            }

            // Fetch and do post request with newly created card rating object...
            const response = await fetch(`http://localhost:3000/cards/${cardInfo._id}/card-rating`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(cardRatingPostData),
            })

            if(!response.ok) {
                throw new Error('BAD RESPONSE: Failed to save card rating'); 
            }
        
            const cardRatingPostResponse = await response.json(); 
            console.log("Server response (newly posted Price History): " + JSON.stringify(cardRatingPostResponse)); 

            // Call function once new price history submission is posted
            onNewCardRatingSubmission(cardRatingPostData)

            // Reset Price History to initial state
            setSliderValue(0); 

        }
        catch(error) {
            throw new Error('OUTSIDE ERRORS: Failed to save card rating')
        }

    }


    // Only allows card rating entry to be submitted if sliderValue is greater than 0
    let isSubmitDisabled = sliderValue > 0 ? false : true
    // console.log("isSubmitDisabled" + isSubmitDisabled)

    return (
        <Form className="card-rater-form">
            <Form.Group className="card-rater-group" controlId="cardRating" >
                <Form.Label className="card-rater-label" htmlFor="">Rate the Card</Form.Label>
                <Form.Text className="card-rater-text text-dark">The condition of the card on a scale of 1-10, with 10 being best.</Form.Text>

                <Form.Range 
                    className="card-rater-slider"
                    id="cardRating"
                    min={1}
                    max={10}
                    step={1}
                    defaultValue={4}
                    value={sliderValue}
                    onChange={updateSliderColor}
                    style={styleInput}
                    required
                />
            </Form.Group>

            <div className="slider-labels-flexbox">
                <p className="lower-bound">1</p>
                <p className="upper-bound">10</p>
            </div>  
            <Button 
                className="card-rater-btn" 
                variant="dark" 
                type="submit" 
                value="Submit"
                disabled={isSubmitDisabled}
                onClick={handleSubmit}
            >
                ENTER RATING
            </Button>
        </Form>
    );
  }
  
  export default CardRater;

