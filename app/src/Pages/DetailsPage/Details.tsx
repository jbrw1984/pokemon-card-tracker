import './Details.css';
import TopNav from '../../Components/NavBar/Nav';
import Footer from '../../Components/Footer/Footer';
import CardRater from '../../Components/CardRater/CardRater';
import PriceHistoryComponent from '../../Components/PriceHistory/PriceHistory';
import CardDescription from '../../Components/CardDescription/CardDescription'; 
import BackToResult from '../../Components/BackToResult/BackToResult';
import { useLocation, useParams } from 'react-router-dom';
import { PokemonCard } from '../../../../api/src/interfaces/cards.interface';
import { useEffect, useState } from 'react';
import { PriceHistory } from "../../../../api/src/interfaces/priceHistory.interface";
import { CardRating } from "../../../../api/src/interfaces/cardRating.interface";




function Details() {
  const location = useLocation();
  const receivedStatePokemonCard = location.state;

  // Grabs the args/params passed in through useNavigate's URL
  const params = useParams(); 

  const EMPTY_CARD_RATING_MSG : string = 'No card ratings made yet'; 

  /*
  'card' state variable is optional because we are already using the 
  receivedStatePokemonCard from the ProductCard component. 
  */
  const [card, setCard] = useState<PokemonCard>(); 
  const [priceHistory, setPriceHistory ] = useState<PriceHistory[]>([]); 
  const [cardRating, setCardRating] = useState<CardRating[]>([]); 

  /**
   * Could not make cardRatingAverage as a state variable because 
   * it would need a default value. If you used a default value of 0, 
   * then anytime you clicked to view a card's details, the card
   * rating would display as 0. 
   */  
  let cardRatingAverage : number | string; 

  if(cardRating.length <= 0) {
    cardRatingAverage = EMPTY_CARD_RATING_MSG; 
  }
  else {
    cardRatingAverage = cardRating.reduce((accumulator, currentCardRatingObj) => {
      return accumulator + currentCardRatingObj.rating
    }, 0) / cardRating.length; 
  }


  /*
  Function to be called when new price history is posted. 
  Appends new price history entry to the price history array. 
  Then, React will automatically re-render the PriceHistoryComponent
  to include the new price history entry.
  */
  const handleNewPriceHistorySubmission = (newPriceHistorySubmission: PriceHistory) => {
    console.log("price history state before adding stuff in: ", priceHistory); 
    setPriceHistory(priceHistory => [newPriceHistorySubmission, ...priceHistory])
    console.log("price history state after adding stuff in: ", priceHistory); 
  }

  /*
  Function to be called when new card rating is posted. 
  Appends new card rating entry to the card rating array. 
  Then, React will automatically re-render the CardDescription component
  to include the newly computed averages of all the card ratings.
  */
  const handleNewCardRatingSubmission = (newCardRatingSubmission: CardRating) => {
    console.log("card rating state before adding stuff in: ", cardRating); 
    setCardRating(cardRating => [newCardRatingSubmission, ...cardRating]); 
    console.log("card rating state after adding stuff in: ", cardRating); 

    /*
    Compute the new average of the card ratings, including the newly posted card rating
    in your calculations. 
    Use reduce() iterator to get the sum of all the card ratings. Then divide by total 
    number of ratings
    */
    if(cardRating.length <= 0) {
      cardRatingAverage = EMPTY_CARD_RATING_MSG; 
    }
    else {
      cardRatingAverage = cardRating.reduce((accumulator, currentCardRatingObj) => {
        return accumulator + currentCardRatingObj.rating
      }, 0) / cardRating.length; 
    }
    // cardRatingAverage = cardRating.reduce((accumulator, currentCardRatingObj) => {
    //   return accumulator + currentCardRatingObj.rating
    // }, 0) / cardRating.length

    // // setCardRatingAverage(cardRatingAvg); 

  }

  useEffect(() => {
    const fetchCurrentCard = async() => {
      try{
        // Must include both card rating and price history
        const result = await fetch(`http://localhost:3000/cards/${params.id}?include=price-history;card-rating`)
        const pokemonCardFetchedData = await result.json(); 
       
        setCard(pokemonCardFetchedData.data); 
        setPriceHistory(pokemonCardFetchedData.data.priceHistoryEntries); 
        setCardRating(pokemonCardFetchedData.data.cardRatingEntries); 
      }
      catch(error) {
        console.log(error); 
      }
    };
    fetchCurrentCard(); 

  }, [])


  return (
    <div className="App">
      <TopNav />

      <BackToResult /> 
      
      {/** The ProductCard.tsx component used the useNavigate hook to navigate to this Details component
       * It also passed in the corresponding Pokemon Card info as an object in the state. Now, we can pass 
       * in that state Pokemon Card into the CardDescription component as a prop. 
       * Optionally: can also pass in this component's state variable 'card', which is obtained
       * along with the price history from the fetch statement. 
      */}
      <CardDescription 
        cardInfo={receivedStatePokemonCard as PokemonCard} 
        cardRatingAverageProp={cardRatingAverage}
        onNewPriceHistorySubmission={handleNewPriceHistorySubmission}
      />

      <div className="info-flexbox">
        <PriceHistoryComponent priceHistoryArray={Array.isArray(priceHistory) ? priceHistory : []}/>

        <CardRater 
          cardInfo={receivedStatePokemonCard as PokemonCard}
          onNewCardRatingSubmission={handleNewCardRatingSubmission}
        />
        {/* <CardRater/> */}
      </div>
      
      <Footer />
      
    </div>
  );
}
  
  export default Details;
