import './Details.css';
import TopNav from '../../Components/NavBar/Nav';
import Footer from '../../Components/Footer/Footer';
import CardRater from '../../Components/CardRater/CardRater';
import PriceHistoryComponent from '../../Components/PriceHistory/PriceHistory';
import CardDescription from '../../Components/CardDescription/CardDescription'; 
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
        const pokemonCardFetchedData = await result.json(); 
       
        setCard(pokemonCardFetchedData.data); 
        setPriceHistory(pokemonCardFetchedData.data.priceHistoryEntries); 
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

      <CardDescription cardInfo={card as PokemonCard}/>

      <div className="info-flexbox">
        <PriceHistoryComponent priceHistoryArray={Array.isArray(priceHistory) ? priceHistory : []}/>
        <CardRater />
      </div>
      
      <Footer />
      
    </div>
  );
}
  
  export default Details;
