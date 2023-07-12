import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import cardInfo from "../ProductCard/cardInfo";
import './DisplayCards.css';
import ReactPaginate from "react-paginate";

function DisplayCards () {
  const [pageNumber, setPageNumber] = useState(0);
  const [cards, setCards] = useState();
  
  const limit: number = 12;
  const pagesVisited: number = pageNumber * limit;

  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/cards/?page=${pageNumber + 1}&limit=${limit}`)
    const data = await res.json();
    setCards(data);
    console.log(cards);
  }

  useEffect(() => {
    fetchData();
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