import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import cardInfo from "../ProductCard/cardInfo";
import './DisplayCards.css';
import ReactPaginate from "react-paginate";

function DisplayCards () {
  const [cards, setCards] = useState(cardInfo);
  const [pageNumber, setPageNumber] = useState(0);
  

  const cardsPerPage: number = 12;
  const pagesVisited: number = pageNumber * cardsPerPage;

  const displaySetOfCards = cards
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

  const pageCount: number = Math.ceil(cards.length / cardsPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <div className="page-container">
      <ReactPaginate 
        pageCount={pageCount}
        previousLabel={"<"}
        nextLabel={">"}
        onPageChange={changePage}
        containerClassName={"pagination-btn"}
        pageClassName={"page-num-btn"}
        breakClassName={"break-btn"}
      />
      <div className="card-container">
        {displaySetOfCards}
      </div>
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
  );
}


export default DisplayCards;