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


function findAverageCardRating(cardRatingArray: CardRating[]) : number | string {
  return cardRatingArray.reduce((accumulator, currentCardRatingObj) => {
    return accumulator + currentCardRatingObj.rating
  }, 0) / cardRatingArray.length; 
}

function findAverageCardPrice(priceHistoryArray: PriceHistory[]) : number {
  return priceHistoryArray.reduce((accumulator, currentPriceHistory) => {
    return accumulator + currentPriceHistory.price
  }, 0) / priceHistoryArray.length; 
}


function Details() {
  // Dummy values to be passed as props. 
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [order, setOrder] =  useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const location = useLocation();
  const receivedStatePokemonCard = location.state;

  // Grabs the args/params passed in through useNavigate's URL
  const params = useParams(); 

  const EMPTY_CARD_RATING_MSG : string = 'No card ratings'; 

  /*
  'card' state variable is optional because we are already using the 
  receivedStatePokemonCard from the ProductCard component. 
  */
  const [card, setCard] = useState<PokemonCard>(); 
  const [priceHistory, setPriceHistory ] = useState<PriceHistory[]>([]); 
  const [cardRating, setCardRating] = useState<CardRating[]>([]); 
  const [salePrice, setSalePrice] = useState<number>();
  const [marketPrice, setMarketPrice] = useState<number>();

  /**
   * Could not make cardRatingAverage as a state variable because 
   * it would need a default value. If you used a default value of 0, 
   * then anytime you clicked to view a card's details, the card
   * rating would display as 0. 
   * NOTE: if there are no card ratings, will instead display 
   *       message saying no card ratings have been given. 
   */  
  let cardRatingAverage : number | string = cardRating.length <= 0 ? EMPTY_CARD_RATING_MSG : findAverageCardRating(cardRating);


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
    setSalePrice(newPriceHistorySubmission.price); 
    let avgPrice: number = findAverageCardPrice([newPriceHistorySubmission, ...priceHistory]);
    setMarketPrice(avgPrice);
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

    /**
     * Compute the new average of the card ratings, including the newly posted card rating
     * in your calculations. 
     * Use reduce() iterator to get the sum of all the card ratings. Then divide by total 
     * number of ratings.
     */
    cardRatingAverage = cardRating.length <= 0 ? EMPTY_CARD_RATING_MSG : findAverageCardRating(cardRating);

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
        setSalePrice(pokemonCardFetchedData.data.salePrice);
        setMarketPrice(pokemonCardFetchedData.data.marketPrice);
      }
      catch(error) {
        console.log(error); 
      }
    };
    fetchCurrentCard(); 

  }, [])


  return (
    <div className="App">
      <TopNav 
        onSearchChange={setSearch} 
        onSortClick={setSortBy} 
        onOrderClick={setOrder}
        onMinChange={setMinPrice}
        onMaxChange={setMaxPrice}
      />

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
        salePrice={salePrice}
        marketPrice={marketPrice}
      />

      <div className="info-flexbox">
        <PriceHistoryComponent priceHistoryArray={Array.isArray(priceHistory) ? priceHistory : []}/>

        <CardRater 
          cardInfo={receivedStatePokemonCard as PokemonCard}
          onNewCardRatingSubmission={handleNewCardRatingSubmission}
        />
      </div>
      
      <Footer />
      
    </div>
  );
}
  
  export default Details;
