import React, { useContext } from "react";
import axios from "axios";
import { Store } from "../Store";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import MessageBox from "../components/MessageBox";
import Card from "react-bootstrap/esm/Card";

const CartScreen = () => {
  const navigate = useNavigate();
  const { state, dispatch: cxtDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${item._id}`
    );
    if (data.countInStock < quantity) {
      window.alert("Sorry,Product is out of Stock");
      return;
    }
    cxtDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  const removeItemHandler = async (item) => {
    cxtDispatch({
      type: "CART_REMOVE_ITEM",
      payload: item,
    });
  };
  const checkoutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };

  return (
    <div>
      <Helmet>
        <title>Shopping Cart </title>
      </Helmet>
      <h1>Shopping Cart </h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is Empty.<Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems?.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        className="img-fluid rounded img-thumbnail"
                        src={item.image}
                        alt={item.image}
                      />
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </Col>
                    <Col md={3}>
                      <Button
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                        variant="light"
                        disabled={item.quantity === 1}
                      >
                        <i className="fas fa-minus-circle"></i>
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        variant="light"
                        disabled={item.quantity === item.countInStock}
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    </Col>
                    <Col md={3}>{item.price}</Col>
                    <Col md={2}>
                      <Button
                        onClick={() => removeItemHandler(item)}
                        variant="light"
                        disabled={item.quantity === 0}
                      >
                        {" "}
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h5>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}
                    {""}
                    items) {""} : RS {""}
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                      type="button"
                    >
                      Proceed To CheckOut
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CartScreen;
