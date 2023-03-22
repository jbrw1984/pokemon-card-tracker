import ProductCard from "../ProductCard/ProductCard";
import cardInfo from "../ProductCard/cardInfo";
import './DisplayCards.css';

function DisplayCards () {
  return (
    <div className="card-container">
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
  );
}


export default DisplayCards;