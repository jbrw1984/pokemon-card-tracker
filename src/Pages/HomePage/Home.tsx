import './Home.css';
import TopNav from '../../Components/NavBar/Nav';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Footer from '../../Components/Footer/Footer';
import cardInfo from '../../Components/ProductCard/cardInfo';
import DisplayCards from '../../Components/DisplayCards/DisplayCards';

function Home() {
    return (
      <div className="App">
        <TopNav />

        <DisplayCards />

        <Footer />
        
      </div>
    );
  }
  
  export default Home;



