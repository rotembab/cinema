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
  const [news, setNews] = useState([]);
  const fetchMovies = async () => {
    try {
      const response = await axios.get(Apis.Movies);
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchNews = async () => {
    try {
      const response = await axios.get(Apis.News);
      setNews(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMovies();
    fetchNews();
  }, []);

  return (
    <div>
      <Navbar />
      {/* Retrieve Images from DB */}
      <Carousel className="bg-black" autoPlay={true}>
        {news.map((item, key) => (
          <div>
            <img key={key} src={item.imgSrc} />
            <p className="legend">{item.heading}</p>
          </div>
        ))}
      </Carousel>
      <OrderTickets />

      <Category headline={"Now in theaters"} items={movies} />
    </div>
  );
}

export default App;
