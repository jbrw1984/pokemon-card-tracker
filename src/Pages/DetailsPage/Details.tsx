//import React from 'react';
//import {Route, Routes} from "react-router-dom"; 
import './Details.css';
import TopNav from '../../Components/NavBar/Nav';
// import ProductCard from '../../Components/ProductCard/ProductCard';
import Footer from '../../Components/Footer/Footer';
//import cardInfo from '../../Components/ProductCard/cardInfo';
import CardRater from '../../Components/CardRater/CardRater';

function Details() {
    return (
      <div className="App">
        <TopNav />
        <h1>THE DETAILS PAGE</h1>

        <CardRater />

        {/* <div className="product-cards">
          {cardInfo.map(cardInfo => (
            <ProductCard 
              name={cardInfo.name}
              image={cardInfo.image}
              description={cardInfo.description}
            />
          ))}
        </div> */}

        <Footer />
        
      </div>
    );
  }
  
  export default Details;
