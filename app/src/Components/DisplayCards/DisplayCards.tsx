import { useState, useEffect, useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";
import './DisplayCards.css';
import pikachuFaceplantImg from './pikachu_faceplant.png'
import ReactPaginate from "react-paginate";
import { PokemonCard } from "../../../../api/src/interfaces/cards.interface";


interface Props {
  search: string,
  sortBy: string,
  order: string,
  minPrice: number,
  maxPrice: number
}

function DisplayCards ({ search, sortBy, order, minPrice, maxPrice }: Props) {
  const [pageNumber, setPageNumber] = useState(0);
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  // 12 Cards per page
  const CARD_LIMIT: number = 12;
  const SEARCH_DELAY: number = 300;

  // State variables to see if search value changes (useful when user changes a filter past page 1)
  const [prevSearch, setPrevSearch] = useState<string | "">("");
  const [prevSortBy, setPrevSortBy] = useState<string | "">("");
  const [prevOrder, setPrevOrder] = useState<string | "">("");
  const [prevMin, setPrevMin] = useState<number | "">(0);
  const [prevMax, setPrevMax] = useState<number | "">(Number.MAX_SAFE_INTEGER);

  useEffect(() => {
    // Bring up loading symbol
    setIsLoading(true);

    // Check if filters Changed
    const filtersHaveChanged = search !== prevSearch || sortBy !== prevSortBy || order !== prevOrder || minPrice !== prevMin || maxPrice !== prevMax;
    // If they have set page back to 1.
    if (filtersHaveChanged) {
      setPageNumber(0);
      // Force ReactPaginate to display the first page
      // This ensures the correct active page is displayed after filter changes
      if (paginationComponentRef.current) {
        paginationComponentRef.current.state.selected = 0;
      }
    }

    // Fetch cards after specified delay to prevent spamming the API
    const fetchCurrentCards = setTimeout(async () => {
      try {
        // Fetch the cards from the API
        const result = await fetch(
          `http://localhost:3000/cards/?page=${pageNumber + 1}&limit=${CARD_LIMIT}&name=${search}&sort=${sortBy}&order=${order}&min=${minPrice}&max=${maxPrice}`
        );
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
  }, [pageNumber, search, sortBy, order, minPrice, maxPrice, prevSearch, prevSortBy, prevOrder, prevMin, prevMax]);

  useEffect(() => {
    // Update previous filter values
    setPrevSearch(search);
    setPrevSortBy(sortBy);
    setPrevOrder(order);
    setPrevMin(minPrice);
    setPrevMax(maxPrice);
  }, [search, sortBy, order, minPrice, maxPrice]);

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

  // reference the pagination component
  const paginationComponentRef = useRef<any>(null);
  
  return (
    <div className="page-container">
      <div className="pagination-container">
        <h4>Page {pageNumber + 1} of {totalPages}</h4>
        <ReactPaginate 
          ref={paginationComponentRef}
          pageCount={totalPages}
          previousLabel={"<"}
          nextLabel={">"}
          onPageChange={changePage}
          containerClassName={"pagination-btn"}
          pageClassName={"page-num-btn"}
          breakClassName={"break-btn"}
        />
      </div>
      {isLoading && 
        <div className="pokemon-spinner-container">
          <div className="pokemon-spinner"></div>
        </div>
      }
      
      {!isLoading && (!cards || cards.length === 0) && 
        <div>
          <h1>No cards found</h1>
          <img src={pikachuFaceplantImg} alt="Pikachu Faceplant"  />
        </div>
        
      }

      {!isLoading && (
        <div className="card-container">
          {displaySetOfCards}
        </div>
      )}
    </div>
  );
}

export default DisplayCards;