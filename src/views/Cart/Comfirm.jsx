import React, { useEffect, useMemo, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Comfirm.css";
import { CiSearch } from "react-icons/ci";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
function Comfirm() {
  const states = [
    "State",
    "Alabama",
    "Georgia",
    "Maine",
    "Nevada",
    "Oregon",
    "Virginia",
    "Alaska",
    "Hawaii",
    "Maryland",
    "New Hampshire",
    "Pennsylvania",
    "Washington",
    "Arizona",
    "Idaho",
    "Massachusetts",
    "New Jersey",
    "Rhode Island",
    "Washington, D.C.",
    "Arkansas",
    "Illinois",
    "Michigan",
    "New Mexico",
    "South Carolina",
    "West Virginia",
    "California",
    "Indiana",
    "Minnesota",
    "New York",
    "South Dakota",
    "Wisconsin",
    "Colorado",
    "Iowa",
    "Missouri",
    "North Carolina",
    "Tennessee",
    "Wyoming",
    "Connecticut",
    "Kansas",
    "Mississippi",
    "North Dakota",
    "Texas",
    "Delaware",
    "Kentucky",
    "Montana",
    "Ohio",
    "Utah",
    "Florida",
    "Louisiana",
    "Nebraska",
    "Oklahoma",
    "Vermont",
  ];
  const [text, setText] = useState("+1");
  const [checked, setChecked] = useState(false);
  const [listItem, setListItem] = useState([]);

  const { isTablet, isMobile } = useSelector((state) => state.widthDevice);

  const itemCart = useSelector((state) => state.itemCart);

  console.log("day ne", itemCart);
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const dataMock = [
    {
      id: "6627210362957",
      sku: 1000,
      variantId: "",
      productType: "Cookware Sets",
      name: "Stainless Steel 10-Piece Cookware Set",
      price: "169.99",
      quantity: 2,
      imageURL:
        "https://www.potsandpans.com/cdn/shop/products/l9it20dx8k2ux2wz4way_grande.jpg?v=1632779223",
      brand: "PotsandPans",
      currentCategory: "Cookware Sets",
      productOptions: {
        Title: "Default Title",
      },
    },
    {
      id: "4782414266445",
      sku: 1001,
      variantId: "",
      productType: "Cookware Sets",
      name: "Stainless Steel 3-Ply Base 11-Piece Cookware Set",
      price: "279.99",
      imageURL:
        "https://www.potsandpans.com/cdn/shop/products/gy1rpnpfbe1oemttvp38_grande.jpg?v=1597431885",
      brand: "PotsandPans",
      quantity: 2,
      currentCategory: "Cookware Sets",
      productOptions: {
        Title: "Default Title",
      },
    },
  ];
  const [isShow, setIsShow] = useState(false);

  const calculateTotalPrice = (itemCart) => {
    return itemCart.reduce((acc, product) => {
      const price = parseFloat(product.price);
      const quantity = product.quantity;
      const productTotal = price * quantity;
      return acc + productTotal;
    }, 0);
  };
  console.log("day ", isShow);
  const totalPrice = useMemo(() => {
    if (itemCart.length > 0) {
      return calculateTotalPrice(itemCart);
    }
    return 0; // Trả về 0 nếu không có sản phẩm trong giỏ hàng
  }, [itemCart.length]);

  useEffect(() => {
    const footer = document.getElementById("footer-main");
    footer.style.display = "none";
    setListItem(itemCart);
  }, []);
  return (
    <div
      style={{
        position: "relative",
        zIndex: 10000,
        background: "#f8f9fa",
        top: "-200px",
      }}
    >
      <Row xs={12}>
        <Col xs={isTablet || isMobile ? 12 : 6} className="col-item-1">
          <Row
            style={{
              width: isTablet || isMobile ? "90%" : "72%",
              float: "right",
              marginRight: isTablet || isMobile ? "22px" : "16px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="header-cart-checkout">
              <img
                style={{ width: isTablet ? "38%" : "56%", height: "56%" }}
                src="https://www.potsandpans.com/cdn/shop/files/Pots_and_Pans_Logo_Black-01_350x.png?v=1614351360"
                alt="logo"
              />
            </div>
            {isMobile || isTablet ? (
              <div
                style={{
                  marginTop: "20px",
                  background: "#f5f5f5",
                  width: "100%",
                  height: "auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 62,
                  }}
                >
                  {isShow ? (
                    <div onClick={(e) => setIsShow(false)}>
                      <PiShoppingCartSimpleLight size={24} />
                      <span style={{ marginLeft: 6, marginRight: 4 }}>
                        Hide order summary
                      </span>
                      <IoIosArrowUp />
                    </div>
                  ) : (
                    <div onClick={(e) => setIsShow(true)}>
                      <PiShoppingCartSimpleLight size={24} />
                      <span style={{ marginLeft: 6, marginRight: 4 }}>
                        Show order summary
                      </span>
                      <IoChevronDownSharp />
                    </div>
                  )}
                  <div>
                    <span className="fz-13" style={{ fontWeight: "bold" }}>
                      ${totalPrice}
                    </span>
                  </div>
                </div>
                {isShow ? (
                  <div style={{ padding: "auto", width: "90%" }}>
                    {itemCart.map((item, index) => (
                      <Row xs={12} style={{ marginTop: 15, marginBottom: 15 }}>
                        <Col xs={3}>
                          <div className="d-flex">
                            <img
                              src={item.imageURL}
                              style={{
                                height: 64,
                                width: 64,
                              }}
                              className="img-confirm"
                              alt={item.name}
                            />
                            <div
                              style={{
                                border: "none",
                                borderRadius: "50%",
                                width: 20,
                                height: 20,
                                backgroundColor: "#666666",
                                color: "white",
                                textAlign: "center",
                                marginLeft: "-11px",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  bottom: "2px",
                                  position: "relative",
                                }}
                              >
                                {item.quantity}
                              </span>
                            </div>
                          </div>
                        </Col>
                        <Col
                          style={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "left",
                            height: "64px",
                            position: "relative",
                          }}
                        >
                          <span className="fz-13">{item.name}</span>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "right",
                            height: "64px",
                            alignItems: "center",
                            display: "flex",
                            position: "absolute",
                            right: "-20px",
                          }}
                        >
                          <span className="fz-13">${item.price}</span>
                        </Col>
                      </Row>
                    ))}

                    <Form.Group
                      style={{
                        display: "flex",
                        marginTop: 20,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Form.Control
                        type="text"
                        style={{ height: 50 }}
                        className="input-confirm mt-a8"
                        placeholder="Discount code or gift card"
                      />
                      <div style={{ width: 20 }}></div>
                      <Button
                        className="fz-13"
                        style={{
                          background: "#ededed",
                          border: "none",
                          marginTop: "-4px",
                          color: "black",
                          height: "48px",
                        }}
                      >
                        Apply
                      </Button>
                    </Form.Group>
                    <Row
                      style={{
                        display: "flex",
                        marginTop: 20,
                        width: "100%",
                        justifyContent: "space-around",
                      }}
                      className="fz-12"
                    >
                      <Col style={{ marginLeft: "8px" }}>
                        <span>Subtotal</span>
                      </Col>
                      <Col
                        style={{
                          textAlign: "right",
                          fontWeight: "bold",
                          position: "absolute",
                        }}
                      >
                        <span>${totalPrice}</span>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        display: "flex",
                        marginTop: 20,
                        width: "100%",
                        justifyContent: "space-around",
                      }}
                      className="fz-12"
                    >
                      <Col style={{ marginLeft: "8px" }}>
                        <span>Shipping</span>
                      </Col>
                      <Col style={{ textAlign: "right", position: "absolute" }}>
                        <span>Calculated at next step</span>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        display: "flex",
                        marginTop: 20,
                        width: "100%",
                        marginBottom: "15px",
                        justifyContent: "space-around",
                      }}
                      className="fz-13"
                    >
                      <Col
                        className="total-confirm"
                        style={{ marginLeft: "8px" }}
                      >
                        <span>Total</span>
                      </Col>
                      <Col
                        style={{
                          textAlign: "right",
                          display: "flex",
                          justifyContent: "end",
                          alignItems: "center",
                          position: "absolute",
                        }}
                      >
                        <span>USD</span>
                        <div style={{ width: 4 }}></div>{" "}
                        <span className="total-confirm">${totalPrice}</span>
                      </Col>
                    </Row>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
            <div style={{ marginTop: 10, marginBottom: 10 }}>
              <ul
                style={{
                  display: "flex",
                  listStyleType: "none",
                  paddingLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <li className="item-status-cart" style={{ fontSize: "12px" }}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/"
                  >
                    Cart
                    <MdOutlineKeyboardArrowRight
                      style={{ marginLeft: 12, marginRight: 12 }}
                    />
                  </Link>
                </li>
                <li
                  className="item-status-cart main"
                  style={{ fontSize: "12px" }}
                >
                  Information
                  <MdOutlineKeyboardArrowRight
                    style={{ marginLeft: 12, marginRight: 12 }}
                  />
                </li>
                <li className="item-status-cart" style={{ fontSize: "12px" }}>
                  Shipping
                  <MdOutlineKeyboardArrowRight
                    style={{ marginLeft: 12, marginRight: 12 }}
                  />
                </li>
                <li className="item-status-cart" style={{ fontSize: "12px" }}>
                  Payment
                </li>
              </ul>
            </div>
            <div>
              <center>
                <span className="title-ex">Express checkout</span>
              </center>
              <div
                className="d-flex"
                style={{ justifyContent: "space-around", width: "100%" }}
              >
                <div className="btn-confirm btn-paypal btn-payment container-custom ">
                  <img
                    style={{ width: "75px" }}
                    src={`${process.env.PUBLIC_URL}/image/paypallogo.png`}
                    alt="paypal"
                  />
                </div>
                <div className="btn-confirm btn-stripe btn-payment container-custom ">
                  <img
                    style={{ width: "75px" }}
                    src={`${process.env.PUBLIC_URL}/image/stripelogo.png`}
                    alt="stripe"
                  />
                </div>
              </div>
              <div
                className="d-flex"
                style={{
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  paddingBottom: 26,
                }}
              >
                <div className="line-space"></div>
                <span className="text-main">OR</span>
                <div className="line-space"></div>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h2 className="title-confirm">Contacts</h2>
                    <p className="login-confirm">login</p>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    className="input-confirm mt-a8 fz-12"
                    placeholder="Email or mobile phone number"
                  />
                  <Form.Group
                    className="mb-3 mt-3  "
                    controlId="formBasicCheckbox"
                  >
                    <Form.Check
                      type="checkbox"
                      className="input-confirm mt-1"
                      label=" 
Email me with shipping updates, news, and offers"
                    />
                  </Form.Group>
                  <Form.Label
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h2 className="title-confirm mt-a18">Shipping address </h2>
                  </Form.Label>
                  <Form.Select className="fz-11">
                    <option className="input-confirm fz-11">
                      United States
                    </option>
                  </Form.Select>
                </Form.Group>
                <Form.Group style={{ display: "flex" }}>
                  <Form.Control
                    type="text"
                    className="input-confirm fz-12"
                    placeholder="First name"
                  />
                  <div style={{ width: 20 }}></div>
                  <Form.Control
                    type="text"
                    className="input-confirm fz-12"
                    placeholder="Last name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="input-confirm fz-12 mt-3"
                    placeholder="Address (Please note we do not ship to PO or APO boxes)"
                  />
                  <CiSearch className="icon-search-confirm" />
                </Form.Group>
                <Form.Group style={{ display: "flex", marginTop: 20 }}>
                  <Form.Control
                    type="text"
                    className="input-confirm fz-12 w-full"
                    placeholder="City"
                  />
                  <div style={{ width: 20 }}></div>

                  <Form.Select
                    type="text"
                    className="input-confirm fz-12"
                    placeholder="State"
                  >
                    {states.map((item) => (
                      <option className="input-confirm fz-11">{item}</option>
                    ))}
                  </Form.Select>
                  <div style={{ width: 20 }}></div>
                  <Form.Control
                    type="text"
                    className="input-confirm fz-12"
                    placeholder="ZIP Code"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="input-confirm fz-12 mt-3"
                    placeholder="Phone"
                  />
                  <AiOutlineQuestionCircle className="icon-search-confirm" />
                </Form.Group>
                <Form.Group
                  className="mb-3 mt-3  "
                  controlId="formBasicCheckbox"
                >
                  <Form.Check
                    type="checkbox"
                    className="input-confirm mt-1"
                    onClick={(e) => setChecked(!checked)}
                    label="
Text me with news and offers"
                  />
                </Form.Group>
                {checked && (
                  <div style={{ marginTop: "-26px" }}>
                    <Form.Group className="w-70" style={{ marginLeft: 30 }}>
                      <Form.Control
                        type="number"
                        className="input-confirm fz-12 pl-40"
                        placeholder=""
                        onChange={(e) => handleChangeText(e)}
                        value={text}
                      />
                      <MdOutlinePhoneIphone className="icon-search-confirm-left" />
                    </Form.Group>
                    <div
                      className="desc-confirm w-90  "
                      style={{ marginLeft: 30 }}
                    >
                      By signing up via text, you agree to receive recurring
                      automated marketing messages, including cart reminders, at
                      the phone number provided. Consent is not a condition of
                      purchase. Reply STOP to unsubscribe. Reply HELP for help.
                      Message frequency varies. Msg & data rates may apply. View
                      our
                      <p
                        className="desc-confirm"
                        style={{ textDecoration: "underline" }}
                      >
                        Privacy Policy
                      </p>{" "}
                      <p className="desc-confirm">and</p>{" "}
                      <p
                        className="desc-confirm"
                        style={{ textDecoration: "underline" }}
                      >
                        Terms of Service.
                      </p>
                    </div>
                  </div>
                )}
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                >
                  <Col>
                    <Link style={{ color: "black" }} to="/">
                      <MdChevronLeft />
                      <span className="fz-13">Return to cart</span>
                    </Link>
                  </Col>
                  <Col>
                    <button
                      className="btn-black fz-13"
                      style={{ fontWeight: "bold" }}
                    >
                      Continue to shipping
                    </button>
                  </Col>
                </Row>
                <div className="d-flex footer-confim w-full h-auto">
                  <span className="fz-12 text-decorate mt-30 mr-10">
                    Refund policy
                  </span>
                  <span className="fz-12 text-decorate mt-30 mr-10">
                    Privacy policy
                  </span>
                  <span className="fz-12 text-decorate mt-30">
                    Term of service
                  </span>
                </div>
              </Form>
            </div>
          </Row>
        </Col>
        {isTablet ||
          (isMobile ? (
            ""
          ) : (
            <Col xs={6} className="col-item-2">
              <div style={{ padding: 38, width: "70%" }}>
                {itemCart.map((item, index) => (
                  <Row xs={12} style={{ marginTop: 15 }} key={index}>
                    <Col xs={3}>
                      <div className="d-flex">
                        <img
                          src={item.imageURL}
                          style={{
                            height: 64,
                            width: 64,
                          }}
                          className="img-confirm"
                          alt={item.name}
                        />
                        <div
                          style={{
                            border: "none",
                            borderRadius: "50%",
                            width: 20,
                            height: 20,
                            backgroundColor: "#666666",
                            color: "white",
                            textAlign: "center",
                            marginLeft: "-11px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <span
                            style={{
                              fontSize: 11,
                              bottom: "2px",
                              position: "relative",
                            }}
                          >
                            {item.quantity}
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "left",
                        height: "64px",
                        position: "relative",
                      }}
                    >
                      <span className="fz-13">{item.name}</span>
                    </Col>
                    <Col
                      xs={3}
                      style={{
                        textAlign: "right",
                        height: "64px",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <span className="fz-13">${item.price}</span>
                    </Col>
                  </Row>
                ))}

                <Form.Group
                  style={{
                    display: "flex",
                    marginTop: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Form.Control
                    type="text"
                    style={{ height: 50 }}
                    className="input-confirm mt-a8"
                    placeholder="Discount code or gift card"
                  />
                  <div style={{ width: 20 }}></div>
                  <Button
                    className="fz-13"
                    style={{
                      background: "#ededed",
                      border: "none",
                      marginTop: "-4px",
                      color: "black",
                      height: "48px",
                    }}
                  >
                    Apply
                  </Button>
                </Form.Group>
                <Row
                  style={{
                    display: "flex",
                    marginTop: 20,
                    width: "100%",
                    justifyContent: "space-around",
                  }}
                  className="fz-12"
                >
                  <Col style={{ marginLeft: "8px" }}>
                    <span>Subtotal</span>
                  </Col>
                  <Col style={{ textAlign: "right", fontWeight: "bold" }}>
                    <span>${totalPrice}</span>
                  </Col>
                </Row>
                <Row
                  style={{
                    display: "flex",
                    marginTop: 20,
                    width: "100%",
                    justifyContent: "space-around",
                  }}
                  className="fz-12"
                >
                  <Col style={{ marginLeft: "8px" }}>
                    <span>Shipping</span>
                  </Col>
                  <Col style={{ textAlign: "right" }}>
                    <span>Calculated at next step</span>
                  </Col>
                </Row>
                <Row
                  style={{
                    display: "flex",
                    marginTop: 20,
                    width: "100%",
                    justifyContent: "space-around",
                  }}
                  className="fz-13"
                >
                  <Col className="total-confirm" style={{ marginLeft: "8px" }}>
                    <span>Total</span>
                  </Col>
                  <Col
                    style={{
                      textAlign: "right",
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                    }}
                  >
                    <span>USD</span>
                    <div style={{ width: 4 }}></div>{" "}
                    <span className="total-confirm">${totalPrice}</span>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default Comfirm;
