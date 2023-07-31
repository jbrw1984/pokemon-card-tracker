import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import './DisplayCards.css';
import ReactPaginate from "react-paginate";
import { PokemonCard } from "../../../../api/src/interfaces/cards.interface";

interface Props {
  search?: string
}

function DisplayCards ({ search }: Props) {
  const [pageNumber, setPageNumber] = useState(0);
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  
  // 12 Cards per page
  const limit: number = 12;
  
  // Update the cards each time the user changes the page
  useEffect(() => {
    const fetchCurrentCards = async() => {
      try {
        const result = await fetch(`http://localhost:3000/cards/?page=${pageNumber + 1}&limit=${limit}&name=${search}`);
        const data = await result.json();
        setCards(data.data);
        setTotalPages(data.totalPages);
        console.log(search);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCurrentCards();
  }, [pageNumber, search]);

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
      <div className="card-container">
        {displaySetOfCards}
      </div>
    </div>
  );
}

export default DisplayCards;