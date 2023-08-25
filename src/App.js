import Navbar from "./Components/Navbar";
import OrderTickets from "./Components/OrderTickets";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Category from "./Components/Category";

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

      <Category
        headline={"Now in theaters"}
        items={[
          {
            name: "Blue Beetle",
            src: "",
            alt: "Blue beetle",
            href: "/Movies/123",
          },
        ]}
      />
    </div>
  );
}

export default App;
