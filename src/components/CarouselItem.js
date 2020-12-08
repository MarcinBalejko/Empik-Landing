import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

import PropTypes from "prop-types";

const CarouselItem = ({ product }) => {
  return (
    <Card className="my-3 mx-2  p-3 rounded">
      <Card.Img src={product.image} variant="top" />

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

CarouselItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CarouselItem;
