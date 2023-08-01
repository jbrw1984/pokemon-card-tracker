import './Home.css';
import TopNav from '../../Components/NavBar/Nav';
import Footer from '../../Components/Footer/Footer';
import DisplayCards from '../../Components/DisplayCards/DisplayCards';
import { useState } from 'react';

function Home() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] =  useState("");

  return (
    <div className="App">
      <TopNav 
        onChange={setSearch} 
        onSortClick={setSortBy} 
        onOrderClick={setOrder}
      />

      <DisplayCards 
        search={search} 
        sortBy={sortBy} 
        order={order}
      />

      <Footer />
      
    </div>
  );
}
  
export default Home;



