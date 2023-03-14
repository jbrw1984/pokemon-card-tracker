import React from 'react';
import {Route, Routes} from "react-router-dom"; 
import './Details.css';
import TopNav from '../../Components/NavBar/Nav';
// import ProductCard from '../../Components/ProductCard/ProductCard';
import Footer from '../../Components/Footer/Footer';
import cardInfo from '../../Components/ProductCard/cardInfo';
import CardRater from '../../Components/CardRater/CardRater';
import PriceHistory from '../../Components/PriceHistory/PriceHistory';

function Details() {
    return (
      <div className="App">
        <TopNav />
        <h1>THE DETAILS PAGE</h1>

        <div className="InfoRow">
          <CardRater />
          <PriceHistory />
        </div>
        
        <Footer />
        
      </div>
    );
  }
  
  export default Details;
