import './Home.css';
import TopNav from '../../Components/NavBar/Nav';
import Footer from '../../Components/Footer/Footer';
import DisplayCards from '../../Components/DisplayCards/DisplayCards';
import { useState } from 'react';

function Home() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] =  useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Number.MAX_SAFE_INTEGER);

  return (
    <div className="App">

      <div id="page-container">
        
        <div id="content-wrap">
          <TopNav 
            onSearchChange={setSearch} 
            onSortClick={setSortBy} 
            onOrderClick={setOrder}
            onMinChange={setMinPrice}
            onMaxChange={setMaxPrice}
          />

          <DisplayCards 
            search={search} 
            sortBy={sortBy} 
            order={order}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />

          
        </div>

        <div id="footer-container">
          <Footer />
        </div>
      </div>
      
      
      
    </div>
  );
}
  
export default Home;



