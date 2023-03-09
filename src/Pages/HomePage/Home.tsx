import React from 'react';
import {Route, Routes} from "react-router-dom"; 
import logo from './logo.svg';
import './Home.css';
import TopNav from '../../Components/NavBar/Nav';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Footer from '../../Components/Footer/Footer';
import cardInfo from '../../Components/ProductCard/cardInfo';

function Home() {
    return (
      <div className="App">
        <TopNav />

        <div className="product-cards">
          {cardInfo.map(cardInfo => (
            <ProductCard 
              name={cardInfo.name}
              image={cardInfo.image}
              salePrice={cardInfo.salePrice}
              marketPrice={cardInfo.marketPrice}
              description={cardInfo.description}
            />
          ))}
        </div>

        <Footer />
        
      </div>
    );
  }
  
  export default Home;



