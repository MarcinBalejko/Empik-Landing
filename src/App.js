import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MultiCarousel from "./components/MultiCarousel";
import ProductScreen from "./screens/ProductScreen";
import Map from "./components/Map";

const App = () => {
  const [openCarousel, setOpenCarousel] = useState(false);
  const [carouselProd, setCarouselProd] = useState([]);

  const toggleCarousel = () => setOpenCarousel(!openCarousel);

  return (
    <Router>
      <Header />
      <Map open={setOpenCarousel} setProducts={setCarouselProd} />
      <main>
        <Container>
          <Route exact path="/product/:id" component={ProductScreen} />
        </Container>
      </main>
      {openCarousel && (
        <MultiCarousel
          products={carouselProd}
          close={toggleCarousel}
          setProducts={setCarouselProd}
        />
      )}
      <Footer />
    </Router>
  );
};

export default App;
