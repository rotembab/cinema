import Navbar from "./Components/Navbar";
import OrderTickets from "./Components/OrderTickets";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function App() {
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
    </div>
  );
}

export default App;
