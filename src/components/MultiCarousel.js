import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Container } from "react-bootstrap";
import CarouselItem from "./CarouselItem";

const MultiCarousel = ({ setProducts, products, close }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Button
        variant="dark"
        className="btn-block carousel-close-btn"
        type="button"
        onClick={() => {
          setProducts([]);
          close();
        }}
      >
        <i className="far fa-times-circle "></i>
      </Button>
      <Container className="multi-carousel">
        <Carousel responsive={responsive}>
          {products.map((product) => (
            <CarouselItem key={product._id} product={product} />
          ))}
        </Carousel>
      </Container>
    </>
  );
};

MultiCarousel.propTypes = {
  close: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired,
};

export default MultiCarousel;
