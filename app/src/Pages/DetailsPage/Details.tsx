import './Details.css';
import TopNav from '../../Components/NavBar/Nav';
import Footer from '../../Components/Footer/Footer';
import CardRater from '../../Components/CardRater/CardRater';
import PriceHistoryComponent from '../../Components/PriceHistory/PriceHistory';
import CardDescription from '../../Components/CardDescription/CardDescription'; 
import cardInfo from '../../Components/ProductCard/cardInfo';
import BackToResult from '../../Components/BackToResult/BackToResult';
import { useParams } from 'react-router-dom';
import { PokemonCard } from '../../../../api/src/interfaces/cards.interface';
import { useEffect, useState } from 'react';
import { PriceHistory } from "../../../../api/src/interfaces/priceHistory.interface";



function Details() {
  const params = useParams(); 
  const [card, setCard] = useState<PokemonCard>(); 
  const [priceHistory, setPriceHistory ] = useState<PriceHistory>(); 

  useEffect(() => {
    const fetchCurrentCard = async() => {
      try{
        const result = await fetch(`http://localhost:3000/cards/${params.id}?include=price-history`)
        // debugger; 
        const pokemonCardFetchedData = await result.json(); 
        // console.log("data: " + JSON.stringify(pokemonCardFetchedData))
        // debugger; 
        // Must use separate state variable for price history
        setCard(pokemonCardFetchedData.data); 
        setPriceHistory(pokemonCardFetchedData.data.priceHistoryEntries); 
        // console.log("card (inside fetchCurrentCard): " + JSON.stringify(card)) 
        // console.log("Using Data object instead of state: " + JSON.stringify(pokemonCardFetchedData.data.priceHistoryEntries))
        // debugger; 
      }
      catch(error) {
        console.log(error); 
      }
    };
    fetchCurrentCard(); 
    // debugger; 
  }, [])

  // console.log("card (outside fetchCurrentCard): " + JSON.stringify(card))
  // debugger;
  // console.log("price history (outside fetchCurrentCard): " + JSON.stringify(priceHistory))
  // debugger;
  // console.log("card name: " + JSON.stringify(card?.name))
  // debugger



  return (
    <div className="App">
      <TopNav />

      <BackToResult /> 

      <CardDescription cardInfo={cardInfo[0]}/>

      <div className="info-flexbox">
        <PriceHistoryComponent priceHistoryArray={Array.isArray(priceHistory) ? priceHistory : []}/>
        <CardRater />
      </div>
      
      <Footer />
      
    </div>
  );
}
  
  export default Details;
