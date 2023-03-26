import './Details.css';
import TopNav from '../../Components/NavBar/Nav';
import Footer from '../../Components/Footer/Footer';
import CardRater from '../../Components/CardRater/CardRater';
import PriceHistory from '../../Components/PriceHistory/PriceHistory';
import CardDescription from '../../Components/CardDescription/CardDescription'; 
import cardInfo from '../../Components/ProductCard/cardInfo';
import BackToResult from '../../Components/BackToResult/BackToResult';

function Details() {
    return (
      <div className="App">
        <TopNav />

        <BackToResult /> 

        <CardDescription cardInfo={cardInfo[1]}/>

        <div className="info-flexbox">
          <PriceHistory cardInfo={cardInfo[0]}/>
          <CardRater />
        </div>
        
        <Footer />
        
      </div>
    );
  }
  
  export default Details;
