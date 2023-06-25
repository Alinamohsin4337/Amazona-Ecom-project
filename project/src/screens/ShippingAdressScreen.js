import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { Store } from "../Store";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: {
        fullName,
        address,
        city,
        postelCode,
        country,
      },
    });
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify({
        fullName,
        address,
        city,
        postelCode,
        country,
      })
    );
    navigate("/payment");
  };
  const [fullName, setFullName] = useState(shippingAddress.fullName || "");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postelCode, setPostelCode] = useState(
    shippingAddress.postelCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");
  useEffect(() => {
    if (!userInfo) {
      navigate("/signin?redirect=/shipping");
    }
  }, [navigate, userInfo]);
  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container small-container">
        <h1 className="my-3">Shipping Address</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            ></Form.Control>{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="postelcode">
            <Form.Label>Postel Code</Form.Label>
            <Form.Control
              value={postelCode}
              onChange={(e) => setPostelCode(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Postel Code</Form.Label>
            <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <div className="mb-3">
            <Button type="submit">Continue</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
