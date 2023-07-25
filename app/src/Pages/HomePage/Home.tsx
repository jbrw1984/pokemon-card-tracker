import './Home.css';
import TopNav from '../../Components/NavBar/Nav';
import Footer from '../../Components/Footer/Footer';
import DisplayCards from '../../Components/DisplayCards/DisplayCards';
import { useState } from 'react';

function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <TopNav />

      <DisplayCards />

      <Footer />
      
    </div>
  );
}
  
export default Home;



