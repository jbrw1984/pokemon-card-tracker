import './Home.css';
import TopNav from '../../Components/NavBar/Nav';
import Footer from '../../Components/Footer/Footer';
import DisplayCards from '../../Components/DisplayCards/DisplayCards';
import { useState } from 'react';

function Home() {
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [order, setOrder] =  useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

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
            minPrice={Number(minPrice)}
            maxPrice={Number(maxPrice)}
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



