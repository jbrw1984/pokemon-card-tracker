//import React from 'react';
import { Route, Routes} from "react-router-dom"; 
//import logo from './logo.svg';
import './App.css';
import Home from './Pages/HomePage/Home'; 
import Details from './Pages/DetailsPage/Details';
//import TopNav from './Components/NavBar/Nav';
//import ProductCard from './Components/ProductCard/ProductCard';
//import Footer from './Components/Footer/Footer';
//import cardInfo from './Components/ProductCard/cardInfo';

function App() {
  return (

      // <nav>
      //   <ul>
      //     <li><Link to="/">Home</Link></li>
      //     <li><Link to="/details">Details</Link></li>
      //   </ul>
      // </nav>

      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/details" element={<Details />} />
      </Routes>
   

    // <div className="App">
    //   <TopNav />

    //   <div className="product-cards">
    //     {cardInfo.map(cardInfo => (
    //       <ProductCard 
    //         name={cardInfo.name}
    //         image={cardInfo.image}
    //         description={cardInfo.description}
    //       />
    //     ))}
    //   </div>
    //   <Footer />
    // </div>
  );
}

export default App;
