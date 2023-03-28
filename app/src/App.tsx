import { Route, Routes} from "react-router-dom";
import './App.css';
import Home from './Pages/HomePage/Home'; 
import Details from './Pages/DetailsPage/Details';

function App() {
  return (

      // <nav>
      //   <ul>
      //     <li><Link to="/">Home</Link></li>
      //     <li><Link to="/details">Details</Link></li>
      //   </ul>
      // </nav>

      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/details" element={<Details />} />
      </Routes>
   

    // <div className="App">
    //   <TopNav />

    //   <div className="product-cards">
    //     {cardInfo.map(cardInfo => (
    //       <ProductCard 
    //         name={cardInfo.name}
    //         image={cardInfo.image}
    //         description={cardInfo.description}
    //       />
    //     ))}
    //   </div>
    //   <Footer />
    // </div>
  );
}

export default App;
