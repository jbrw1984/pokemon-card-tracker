import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CardRater.css';

function CardRater() {

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
                />
            </Form.Group>
            <Button className="card-rater-btn" variant="dark" type="submit" value="Submit">
                ENTER RATING
            </Button>
        </Form>
    );
  }
  
  export default CardRater;
