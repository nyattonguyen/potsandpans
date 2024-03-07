import React, { useEffect, useState } from "react";
import { Col, Offcanvas, Row } from "react-bootstrap";
import "./CartRight.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromCart,
  updateItemCart,
} from "../../Redux/Slices/CartItem";

// import ItemCart from './ItemCart'
function CartRight({ open, close }) {
  const [listItem, setListItem] = useState([]);

  const itemCart = useSelector((state) => state.itemCart);
  const dispatch = useDispatch();
  console.log(itemCart);
  useEffect(() => {
    setListItem(itemCart);
  }, [open]);

  const handleQuantityChange = (id, changeValue) => {
    const newQuantity = Math.max(
      0,
      itemCart.find((item) => item.id === id).quantity + changeValue
    ); // Ensure valid quantity
    dispatch(updateItemCart({ id, quantity: newQuantity })); // Dispatch action to update quantity
  };

  const handleRemoveItem = (itemId) => {
    const newStore = listItem.filter((item) => item.id !== itemId); // Efficient filtering
    setListItem(newStore);
    dispatch(removeItemFromCart({ id: itemId })); // Update localStorage
  };

  const handleAdd = (id) => {
    handleQuantityChange(id, 1);
  };

  const handleMinus = (id) => {
    handleQuantityChange(id, -1);
  };

  console.log(listItem);
  return (
    <Offcanvas show={open} onHide={close} placement="end">
      <div className="cart-container">
        <div className="header-cart">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ textAlign: "center" }}>
              <h2 style={{ fontWeight: 400 }}>Cart</h2>
            </Offcanvas.Title>
          </Offcanvas.Header>
        </div>
        <Offcanvas.Body>
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
      </div>
    </Offcanvas>
  );
}

export default CartRight;
