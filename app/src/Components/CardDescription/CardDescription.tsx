import { FC, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import { PokemonCard } from "../../../../api/src/interfaces/cards.interface";
import './CardDescription.css';
import '../ProductCard/Cardback.jpg'
import { PriceHistory } from "../../../../api/src/interfaces/priceHistory.interface";

interface CardDescriptionProps {
    cardInfo: PokemonCard; 
    cardRatingAverageProp: number | string; 
    onNewPriceHistorySubmission: (priceHistoryPostData: PriceHistory) => void;
    salePrice: number | undefined;
    marketPrice: number | undefined
}

/**
 * Used this stack-overflow article for how to truncate numbers
 * in JavaScript: https://stackoverflow.com/questions/4912788/truncate-not-round-off-decimal-numbers-in-javascript
 * 
 * @param num Number to truncate
 * @param digits Number of decimal places to truncate to 
 * @returns Truncated number
 */
const truncateDecimals  = (num: number, digits: number) => {
    var numS = num.toString(),
        decPos = numS.indexOf('.'),
        substrLength = decPos === -1 ? numS.length : 1 + decPos + digits,
        trimmedResult = numS.substring(0, substrLength),
        finalResult = isNaN(Number(trimmedResult)) ? 0 : trimmedResult;

    return parseFloat(finalResult.toString());
}


const CardDescription: FC<CardDescriptionProps> = ({ cardInfo, cardRatingAverageProp, onNewPriceHistorySubmission, salePrice, marketPrice}): JSX.Element => {
    const DEFAULT_NAME : string = 'Pokemon'
    const DEFAULT_IMAGE : string = './Cardback.jpg'
    const DEFAULT_SALE_PRICE : number = NaN
    const DEFAULT_MARKET_PRICE : number = NaN
    const DEFAULT_RATING: number = NaN
    const DEFAULT_DESCRIPTION : string = 'Pokemon'

    const [priceText, setPriceText] = useState('');
    console.log("Card ID: " + cardInfo._id)
    
    const handleChange = (event: any) => {
        setPriceText(event.target.value);
        console.log("Price Text changed: " + event.target.value); 
      };

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log("Button Clicked")
        console.log("Card ID: " + cardInfo._id)


        try {
            const priceHistoryPostData: PriceHistory = {
                pokemonCardId: String(cardInfo._id), 
                date: new Date(), 
                quantity: 1, 
                price: Number(priceText)
            }

            // Fetch/post request with newly created price hsitory object...
            const response = await fetch(`http://localhost:3000/cards/${cardInfo._id}/price-history`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(priceHistoryPostData),
            })

            if(!response.ok) {
                throw new Error('BAD RESPONSE: Failed to save price history'); 
            }
        
            const priceHistoryPostResponse = await response.json(); 
            console.log("Server response (newly posted Price History): " + JSON.stringify(priceHistoryPostData)); 

            // Call function once new price history submission is posted
            onNewPriceHistorySubmission(priceHistoryPostData)

            // Reset Price History to initial state
            setPriceText(''); 
        }
        catch(error) {
            throw new Error('OUTSIDE ERRORS: Failed to save price history')
        }
    }

    // Only allows price history entry to be submitted if priceText is not empty
    let isSubmitDisabled = !priceText || Number(priceText) < 0;
    
    // If the cardRatingAverageProp is a number, truncate it so that only 1 decimal displayed
    if (typeof cardRatingAverageProp === 'number') {
        cardRatingAverageProp = truncateDecimals(cardRatingAverageProp, 1)
    }

    return (
        <Card className="card-desc-comp">
            <Card.Img className="card-desc-img" src={cardInfo && cardInfo.image ? cardInfo.image : DEFAULT_IMAGE}></Card.Img>
            <Card.Body className="card-desc-body">
                <Card.Title className="card-desc-name">{cardInfo && cardInfo.name ? cardInfo.name : DEFAULT_NAME}</Card.Title>
                <Card.Subtitle className="card-desc-sale-price">${salePrice ? salePrice.toFixed(2) : DEFAULT_SALE_PRICE}</Card.Subtitle>

                <Card.Text className="card-desc-price-rtn">
                    Market Price: &nbsp; 
                    <span className="card-desc-market-price">
                        ${marketPrice ? marketPrice.toFixed(2) : DEFAULT_MARKET_PRICE}
                    </span> &nbsp; | &nbsp; Card Rating: &nbsp; 
                    <span className="card-desc-rating">
                        {cardRatingAverageProp}
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
                        <Form.Control 
                            className="price-text-input" 
                            type="number" 
                            placeholder="$1.00" 
                            value={priceText} 
                            onChange={handleChange} 
                            min={0}
                            required>
                        </Form.Control>
                        <Button 
                            className="button-addon1" 
                            id="button-addon1" 
                            variant="dark"
                            onClick={handleSubmit} 
                            disabled={isSubmitDisabled}
                            type="submit" 
                            value="Submit">
                            SUBMIT PRICE
                        </Button>
                    </InputGroup>
                </Form>
                
            </Card.Body>
        </Card>
    )
}

export default CardDescription; 