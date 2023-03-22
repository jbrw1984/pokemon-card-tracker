import ProductCard from "../ProductCard/ProductCard";
import cardInfo from "../ProductCard/cardInfo";
import './DisplayCards.css';
import ReactPaginate from "react-paginate";

function DisplayCards () {

  const cardsPerPage: number = 12;

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