import Navbar from "./Components/Navbar";
import OrderTickets from "./Components/OrderTickets";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Category from "./Components/Category";
import axios from "axios";
import Apis from "./Literals/Apis";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    try {
      const response = await axios.get(Apis.Movies);
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Navbar />
      {/* Retrieve Images from DB */}
      <Carousel autoPlay={true}>
        <div>
          <img src="assets/1.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/1.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
      <OrderTickets />

      <Category headline={"Now in theaters"} items={movies} />
    </div>
  );
}

export default App;
