import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
//import cardInfo from "../ProductCard/cardInfo";
import './DisplayCards.css';
import ReactPaginate from "react-paginate";
import { CardsRoute } from '../../../../api/src/routes/cards.route'; 
import { App } from '../../../../api/src/app';
// Global variables 
/*
const cardsRoute = new CardsRoute();
const app = new App([cardsRoute]);

const result = await app.getServer()).get(`${cardsRoute.path}?page=2`;
*/
function DisplayCards () {
  const [pageNumber, setPageNumber] = useState(0);
  
  const cardsPerPage: number = 12;
  const pagesVisited: number = pageNumber * cardsPerPage;

  const displaySetOfCards = cardInfo
    .slice(pagesVisited, pagesVisited + cardsPerPage)
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

  const pageCount: number = Math.ceil(cardInfo.length / cardsPerPage);

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