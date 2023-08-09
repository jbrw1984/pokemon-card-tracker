import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import './DisplayCards.css';
import ReactPaginate from "react-paginate";
import { PokemonCard } from "../../../../api/src/interfaces/cards.interface";
import { set } from "mongoose";

interface Props {
  search?: string,
  sortBy?: string,
  order?: string
}

function DisplayCards ({ search, sortBy, order }: Props) {
  const [pageNumber, setPageNumber] = useState(0);
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  
  // 12 Cards per page
  const CARD_LIMIT: number = 12;
  const SEARCH_DELAY: number = 300;

  useEffect(() => {

    // Bring up loading symbol
    setIsLoading(true);

    // Fetch cards after specified delay to prevent spamming the API
    const fetchCurrentCards = setTimeout(async () => {
      try {
        // Fetch the cards from the API
        const result = await fetch(`http://localhost:3000/cards/?page=${pageNumber + 1}&limit=${CARD_LIMIT}&name=${search}&sort=${sortBy}&order=${order}`);
        const data = await result.json();
        setCards(data.data);
        setTotalPages(data.totalPages);
        console.log(search);

        // Remove loading symbol
        setIsLoading(false);
      } 
      catch (error) {
        console.error(error);
      }
    }, SEARCH_DELAY)


    return () => clearTimeout(fetchCurrentCards)
  }, [pageNumber, search, sortBy, order]);

  // Map all of the current cards
  const displaySetOfCards = cards && cards.map((card) => {
    return (
      <ProductCard 
        pokemonCard={card}
      />
    );
  });

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };


  
  return (

    <div className="page-container">
      <div className="pagination-container">
        <h4>Page {pageNumber + 1} of {totalPages}</h4>
        <ReactPaginate 
          pageCount={totalPages}
          previousLabel={"<"}
          nextLabel={">"}
          onPageChange={changePage}
          containerClassName={"pagination-btn"}
          pageClassName={"page-num-btn"}
          breakClassName={"break-btn"}
        />
      </div>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (!cards || cards.length === 0) && <h1>No cards found</h1>}
      <div className="card-container">
        {displaySetOfCards}
      </div>
    </div>
  );

  
}

export default DisplayCards;