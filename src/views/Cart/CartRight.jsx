import React, { useEffect, useMemo, useState } from "react";
import { Col, Offcanvas, Row } from "react-bootstrap";
import "./CartRight.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromCart,
  updateItemCart,
} from "../../Redux/Slices/CartItem";
import { Link, NavLink } from "react-router-dom";

function CartRight({ open, close }) {
  const [listItem, setListItem] = useState([]);
  // useSelector((state) => state.itemCart);
  const itemCart = useSelector((state) => state.itemCart);
  console.log("eror", itemCart);
  const dispatch = useDispatch();

  const imageNames = [
    "america.jpg",
    "dinersclub.jpg",
    "discover.jpg",
    "gpay.jpg",
    "Master.jpg",
    "stripe.jpg",
    "venmo.jpg",
    "visa.jpg",
  ];

  const images = imageNames.map((name) => ({
    name,
    url: `${process.env.PUBLIC_URL}/image/${name}`,
  }));

  const calculateTotalPrice = (itemCart) => {
    return itemCart.reduce((acc, product) => {
      const price = parseFloat(product.price);
      const quantity = product.quantity;
      const productTotal = price * quantity;
      return acc + productTotal;
    }, 0);
  };

  const totalPrice = useMemo(() => {
    if (itemCart.length > 0) {
      return calculateTotalPrice(itemCart);
    }
    return 0; // Trả về 0 nếu không có sản phẩm trong giỏ hàng
  }, [itemCart]);

  const handleQuantityChange = (id, changeValue) => {
    const newQuantity = Math.max(
      0,
      itemCart.find((item) => item.id === id).quantity + changeValue
    );
    dispatch(updateItemCart({ id, quantity: newQuantity }));
  };

  const handleRemoveItem = (itemId) => {
    const newStore = itemCart.filter((item) => item.id !== itemId);
    setListItem(newStore);
    dispatch(removeItemFromCart({ id: itemId }));
  };

  const handleAdd = (id) => {
    handleQuantityChange(id, 1);
  };

  const handleMinus = (id) => {
    handleQuantityChange(id, -1);
  };

  useEffect(() => {
    setListItem(itemCart);
  }, [open]);

  return (
    <Offcanvas show={open} onHide={close} placement="end">
      <div className="cart-container " style={{ height: "100%" }}>
        <div className="header-cart ">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ textAlign: "center" }}>
              <h2
                className="title-custom"
                style={{ fontWeight: 400, marginTop: 4 }}
              >
                Cart
              </h2>
            </Offcanvas.Title>
          </Offcanvas.Header>
        </div>
        <Offcanvas.Body style={{ height: "60%" }}>
          {/* check item cart empty  */}
          {itemCart.length > 0 ? (
            itemCart.map((item, index) => (
              <div key={item.id} border="light" style={{ width: "80%" }}>
                <Row>
                  <Col xs={4}>
                    <img
                      width={90}
                      height={90}
                      src={item.imageURL}
                      alt="itemprod"
                    />
                  </Col>
                  <Col xs={8}>
                    <h4 style={{ fontSize: 16 }}>{item.name}</h4>
                    <span style={{ marginTop: 10 }}>${item.price}</span>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 20,
                      }}
                    >
                      <div
                        className="group-btn-exe d-flex justify-content-between"
                        style={{ width: "auto" }}
                      >
                        <span
                          style={{
                            width: 28,
                            textAlign: "center",
                            cursor: "pointer",
                          }}
                          className="btn-minus"
                          onClick={() => handleMinus(item.id)}
                        >
                          -
                        </span>
                        <span>{item.quantity}</span>
                        <span
                          style={{
                            width: 28,
                            textAlign: "center",
                            cursor: "pointer",
                          }}
                          className="btn-plus"
                          onClick={() => handleAdd(item.id)}
                        >
                          +
                        </span>
                      </div>
                      <span
                        style={{
                          textDecoration: "underline",
                          fontSize: 14,
                          cursor: "pointer",
                        }}
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            ))
          ) : (
            <div
              style={{
                position: "absolute",
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <span style={{ fontSize: 24 }}>Your cart is empty</span>
            </div>
          )}
        </Offcanvas.Body>
        {itemCart.length > 0 && (
          <div
            className=""
            style={{
              position: "relative",
              display: "block",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="d-flex justify-content-center footer-card-right">
              <div className="d-flex justify-content-center footer-card-right">
                <Link to="/account/confirm">
                  <button
                    className="button-custom fz-18"
                    type="button"
                    style={{ width: "100%", marginTop: 34, height: 44 }}
                  >
                    Checkout 。${totalPrice}
                  </button>
                </Link>
              </div>
            </div>
            <div className="d-block " style={{ marginTop: 30 }}>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  listStyleType: "none",
                  paddingLeft: 0,
                }}
              >
                {images.map((item) => (
                  <li style={{ justifyContent: "center" }}>
                    <img
                      alt={item.name}
                      src={item.url}
                      width={36}
                      height={22}
                      style={{ borderRadius: 4, padding: 2 }}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ marginTop: 30 }}>
              <div
                className="d-flex"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <span>Monthly payments available with </span>
                <img
                  src="https://cdn-assets.affirm.com/images/all_black_logo-white_bg.jpg"
                  alt="arfim"
                  style={{
                    height: "15px",
                    lineHeight: 1,
                    marginLeft: 4,
                    marginBottom: 5,
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Offcanvas>
  );
}

export default CartRight;
