import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import cardInfo from "../ProductCard/cardInfo";
import './DisplayCards.css';
import ReactPaginate from "react-paginate";
//import { CardsRoute } from '../../../../api/src/routes/cards.route'; 
//import { App } from '../../../../api/src/app';
// Global variables 
/*
const cardsRoute = new CardsRoute();
const app = new App([cardsRoute]);

const result = await app.getServer()).get(`${cardsRoute.path}?page=2`;
*/
function DisplayCards () {
  const [pageNumber, setPageNumber] = useState(0);
  const [cards, setCards] = useState();
  
  const limit: number = 12;
  const pagesVisited: number = pageNumber * limit;

  useEffect(() => {
    fetch(`http://localhost:3000/cards/?page=${pageNumber}&limit=${limit}`)
    .then(res => res.json())
    .then(data => setCards(data));
    if (cards) {
      console.log(cards);
    }
    
      
  }, [pageNumber]);

  const displaySetOfCards = cardInfo
    .slice(pagesVisited, pagesVisited + limit)
    .map((card) => {
      return (
        <ProductCard 
          name={card.name}
          image={card.image}
          salePrice={card.salePrice}
          marketPrice={card.marketPrice}
          description={card.description}
        />
      );
    });

  const pageCount: number = Math.ceil(cardInfo.length / limit);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <div className="page-container">
      <div className="pagination-container">
        <h4>Page {pageNumber + 1} of {pageCount}</h4>
        <ReactPaginate 
          pageCount={pageCount}
          previousLabel={"<"}
          nextLabel={">"}
          onPageChange={changePage}
          containerClassName={"pagination-btn"}
          pageClassName={"page-num-btn"}
          breakClassName={"break-btn"}
        />
      </div>
      <div className="card-container">
        {displaySetOfCards}
      </div>
    </div>
  );
}

export default DisplayCards;