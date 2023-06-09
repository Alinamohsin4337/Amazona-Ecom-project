import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { Store } from "../Store";
const Product = (props) => {
  const { product } = props;
  const { state, dispatch: cxtDispatch } = useContext(Store);
  const addToCartHandler = () => {
    cxtDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity: 1 },
    });
  };

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <Card.Text>${product.price}</Card.Text>

        <Button onClick={addToCartHandler}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
