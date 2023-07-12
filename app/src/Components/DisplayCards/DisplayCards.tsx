import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import './DisplayCards.css';
import ReactPaginate from "react-paginate";
import { PokemonCard } from "../../../../api/src/interfaces/cards.interface";

function DisplayCards () {
  const [pageNumber, setPageNumber] = useState(0);
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [allCards, setAllCards] = useState<PokemonCard[]>([]);
  
  // 12 Cards per page
  const limit: number = 12;

  // Get allCards and save the total number of cards (this determines number of pages)
  useEffect(() => {
    const fetchAllCards = () => {
      try {
        fetch(`http://localhost:3000/cards/?page=1&limit=100000000000000000000`)
        .then(res => res.json())
        .then(data => setAllCards(data.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllCards();
  }, [])
  const numOfCards: number = allCards.length;
  
  // Update the cards each time the user changes the page
  useEffect(() => {
    const fetchCurrentCards = () => {
      try {
        fetch(`http://localhost:3000/cards/?page=${pageNumber + 1}&limit=${limit}`)
        .then(res => res.json())
        .then(data => setCards(data.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchCurrentCards();
  }, [pageNumber]);

  // Map all of the current cards
  const displaySetOfCards = cards
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

  const pageCount: number = Math.ceil(numOfCards / limit);

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