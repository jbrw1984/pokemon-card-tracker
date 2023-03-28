import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CardRater.css';
const sliderTrackColor : NodeListOf<Element> = document.querySelectorAll('input[type="range"]::-webkit-slider-runnable-track'); 
const slider : any = document.getElementById("myinput"); 


export function CardRater() {
    const inputRef : any = React.createRef()

    const [sliderValue, setSliderValue] = useState<number>(0);
    
    const min : number = 1; 
    const max : number = 10; 

    const updateSliderColor = (event : any) : void => {
        setSliderValue(event.target.value); 
        console.log(sliderValue); 

        const progress : string = (sliderValue-min)/(max-min)*100 + '%'; 

        const newBackgroundStyle = `linear-gradient(90deg, #FCCD29 0% ${progress}%, #94938d ${progress}% 100%)`
        inputRef.current.style.background = newBackgroundStyle
    }
    
    let progressUpdate : string = (sliderValue-min)/(max-min)*100 + '%';
    const styleInput = {
        background: `linear-gradient(90deg, #FCCD29 0% ${progressUpdate}, #94938d ${progressUpdate} 100%)`,
    }


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
                />
            </Form.Group>

            <div className="slider-labels-flexbox">
                <p className="lower-bound">1</p>
                <p className="upper-bound">10</p>
            </div>  
            <Button className="card-rater-btn" variant="dark" type="submit" value="Submit">
                ENTER RATING
            </Button>
        </Form>
    );
  }
  
  export default CardRater;

