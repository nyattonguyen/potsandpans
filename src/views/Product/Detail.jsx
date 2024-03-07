import React, { useEffect, useState } from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { NavLink, useParams } from "react-router-dom";
import "./Detail.css";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/Slices/CartItem";
import data from "../../Mock/exportproduct.json";
function Detail() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const [product, setProduct] = useState({
    quantity: 1,
  });
  const [listItemSame, setListItemSame] = useState([]);
  useEffect(() => {
    const productsArray = Array.from(data.products);

    const item = productsArray.find((element) => element.id === id);

    setProduct(item);

    const listSame = productsArray.filter(
      (element) => element.productType === item.productType
    );
    const first12Items = listSame.slice(0, 12);
    setListItemSame(first12Items);
  }, [id]);

  console.log("day ", listItemSame);
  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };
  return (
    <div style={{ padding: "60px" }}>
      <center>
        <Row className="w-full">
          <Col
            className="col-6"
            style={{
              display: "flex",
              flex: 1,
            }}
          >
            <Carousel
              data-bs-theme="dark"
              style={{ width: "660px", height: "600px" }}
            >
              <Carousel.Item>
                <img
                  className="Image--fadeIn lazyautosizes Image--lazyLoaded"
                  data-widths="[200,400,600,700,800,900,1000,1200,1400,1600]"
                  data-sizes="auto"
                  data-expand="-100"
                  alt="Seasoned Cast Iron 12-Inch Skillet"
                  data-max-width="2048"
                  data-max-height="2048"
                  data-original-src="//www.potsandpans.com/cdn/shop/products/mkl6n1abfqr0t5oxs25i.jpg?v=1627322988"
                  data-srcset="//www.potsandpans.com/cdn/shop/products/mkl6n1abfqr0t5oxs25i_200x.jpg?v=1627322988 200w, //www.potsandpans.com/cdn/shop/products/mkl6n1abfqr0t5oxs25i_400x.jpg?v=1627322988 400w, //www.potsandpans.com/cdn/shop/products/mkl6n1abfqr0t5oxs25i_600x.jpg?v=1627322988 600w, //www.potsandpans.com/cdn/shop/products/mkl6n1abfqr0t5oxs25i_700x.jpg?v=1627322988 700w, //www.potsandpans.com/cdn/shop/products/mkl6n1abfqr0t5oxs25i_800x.jpg?v=1627322988 800w, //www.potsandpans.com/cdn/shop/products/mkl6n1abfqr0t5oxs25i_900x.jpg?v=1627322988 900w, //www.potsandpans.com/cdn/shop/products/mkl6n1abfqr0t5oxs25i_1000x.jpg?v=1627322988 1000w, //www.potsandpans.com/cdn/shop/products/mkl6n1abfqr0t5oxs25i_1200x.jpg?v=1627322988 1200w, //www.potsandpans.com/cdn/shop/products/mkl6n1abfqr0t5oxs25i_1400x.jpg?v=1627322988 1400w, //www.potsandpans.com/cdn/shop/products/mkl6n1abfqr0t5oxs25i_1600x.jpg?v=1627322988 1600w"
                  sizes="710px"
                  srcSet={product.imageURL}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{
                    width: "70%",
                    marginBottom: "30px",
                  }}
                  src="https://cdn.accentuate.io/53227323469/1596130252177/AC_AYA_Skillet_Red_eBiz-Glam_JPG.jpg?v=0"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{
                    width: "70%",
                    marginBottom: "30px",
                  }}
                  src="https://cdn.accentuate.io/53227323469/1596130252177/AC_AYA_Skillet_Red_eBiz-Glam_JPG.jpg?v=0"
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="" style={{ textAlign: "left", padding: 20 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 40,
              }}
            >
              <div className="productMeta">
                <div className="ProductMeta__Vendor">
                  <NavLink
                    style={{
                      color: "#1d423c",
                      fontSize: "18px",
                      fontWeight: 700,
                      marginBottom: "10px",
                      textTransform: "uppercase",
                    }}
                  >
                    {product.productType}
                  </NavLink>
                  <h1
                    style={{
                      fontFamily: "Freight, serif",
                      fontSize: "28px",
                      fontWeight: 400,
                      color: "#16151",
                      transition: "color .2s ease-in-out",
                      textTransform: "uppercase",
                    }}
                  >
                    {product.name}
                  </h1>
                  <div
                    className="product-price-with-rating"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "calc(16px + 8 * (100vw / 1920))",
                      color: "#1d423c",
                      borderBottom: "1px solid #c4c4c4",
                    }}
                  >
                    <div className="ProductMeta__PriceList Heading">
                      <span>${product.price}</span>
                    </div>
                    <div
                      className="ProductMeta__PriceList Ratting"
                      style={{ display: "flex" }}
                    >
                      <div className="ProductMeta__PriceList Content">
                        <IoIosStar
                          style={{
                            color: "#FF6600",
                            fontSize: "calc(16px + 8 * (100vw / 1920))",
                          }}
                        />
                        <IoIosStar
                          style={{
                            color: "#FF6600",
                            fontSize: "calc(16px + 8 * (100vw / 1920))",
                          }}
                        />
                        <IoIosStar
                          style={{
                            color: "#FF6600",
                            fontSize: "calc(16px + 8 * (100vw / 1920))",
                          }}
                        />
                        <IoIosStar
                          style={{
                            color: "#FF6600",
                            fontSize: "calc(16px + 8 * (100vw / 1920))",
                          }}
                        />
                        <IoIosStarHalf
                          style={{
                            color: "#FF6600",
                            fontSize: "calc(16px + 8 * (100vw / 1920))",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          color: "#324A70 !important",
                          fontSize: "18px",
                          marginTop: "5px",
                          marginLeft: "10px",
                          marginBottom: "15px",
                        }}
                      >
                        (17)
                      </div>
                    </div>
                  </div>
                  <div className="ProductForm__Variants">
                    <div
                      className="ProductForm__Option ProductForm__Option--labelled"
                      style={{
                        display: "flex",
                        borderBottom: "1px solid #c4c4c4",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "24px",
                          fontWeight: 400,
                          margin: "10px 5px 10px",
                          // borderBottom: '1px solid #c4c4c4'
                        }}
                      >
                        Size:
                      </span>
                      <div
                        className="HorizontalList__Item"
                        style={{
                          display: "block",
                          margin: "10px 5px 10px",
                          border: "1px solid #161515",
                          padding: "9px 15px 5px",
                          fontSize: "18px",
                          marginLeft: "20px",
                        }}
                      >
                        12.25"
                      </div>
                      <div
                        className="HorizontalList__Item"
                        style={{
                          margin: "10px 5px 10px",
                          border: "1px solid #c4c4c4",
                          padding: "9px 20px 5px",
                          fontSize: "18px",
                          marginLeft: "20px",
                        }}
                      >
                        10"
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <button
                        className="button-custom"
                        style={{
                          backgroundColor: "#7a99a3",
                          width: "400px",
                          height: "46px",
                          textAlign: "center",
                          fontSize: "18px",
                          color: "#fff",
                          textTransform: "uppercase",
                          fontWeight: 500,
                          border: "none",
                          marginTop: "15px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        onClick={handleAddToCart}
                      >
                        Add to cart - ${product.price}
                      </button>
                    </div>
                    <div
                      className="under_bottom_message message-delivery"
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        marginTop: "30px",
                      }}
                    >
                      Your order will ship within 24 business hours! Estimated
                      delivery 3 to 5 business days!
                    </div>
                  </div>
                  <ul style={{ marginTop: 30 }}>
                    <li className="item-desc-prod">
                      SUPERIOR HEAT RETENTION: Durable cast iron skillet is
                      designed for even heat and retention when cooking,
                      braising, searing, sauteing, and grilling
                    </li>
                    <li className="item-desc-prod">
                      READY TO COOK: Preseasoned cast iron skillet is ready to
                      cook, braise, grill, and fry right out of the box
                    </li>
                    <li className="item-desc-prod">
                      BUILT-IN POUR SPOUTS: Skillet is equipped with pour spouts
                      for precision pouring of juices and rich homemade gravies
                    </li>
                    <li className="item-desc-prod">
                      {" "}
                      READY TO ASSIST: Versatile cast iron skillet is equipped
                      with a helper handle for a balanced and secure grip when
                      moving between cooking stations
                    </li>
                    <li className="item-desc-prod">
                      INDUCTION COMPATIBLE: Cast iron skillet is safe for use on
                      all cooktops
                    </li>
                  </ul>
                </div>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                      Get pantry perfect and organize your dried goods, food
                      items, baking ingredients, snacks, leftovers and more with
                      this LocknLock 30-piece Food Storage Container Set. This
                      massive set of large, medium, and small food storage
                      containers with lids provides endless storage options and
                      a lightweight design makes it easy to move containers on
                      higher pantry shelves and cabinets. LocknLock's unique
                      4-hinge locking system has been durability tested to last
                      up to 3 million uses, and the enhanced silicone seals are
                      airtight to keep foods fresher and leakproof to prevent
                      messy drips and sloppy spills. BPA-free construction
                      provides a healthy and versatile storage solution for the
                      pantry, cupboard, refrigerator, freezer or anywhere your
                      foods need to stay fresh. Plus, LocknLock containers are
                      microwave safe for convenient reheating and dishwasher
                      safe for easy cleanup (lids not intended for microwave
                      use).
                      <h4>Sku: {product.sku}</h4>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Materials</Accordion.Header>
                    <Accordion.Body>
                      <div className="d-flex">
                        <span style={{ fontWeight: 500 }}>Lid Material:</span>{" "}
                        <span> Plastic</span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Use and care</Accordion.Header>
                    <Accordion.Body>
                      <div className="d-flex">
                        <span style={{ fontWeight: 500 }}>
                          Dishwasher Safe:
                        </span>{" "}
                        <span> Yes</span>
                      </div>
                      <div className="d-flex">
                        <span style={{ fontWeight: 500 }}>Microwave Safe:</span>{" "}
                        <span> True</span>
                      </div>
                      <div className="d-flex">
                        <span style={{ fontWeight: 500 }}>
                          Oven-safe Temperature:
                        </span>{" "}
                        <span> No</span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Warranty</Accordion.Header>
                    <Accordion.Body>
                      <span>Limited Lifetime Guarantee</span>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </Col>
        </Row>
        <div style={{ width: "100%", height: "auto" }}>
          <center style={{ marginTop: 40 }}>
            <h2 style={{ fontSize: 45 }}>You may also like</h2>
          </center>
          <Carousel>
            {listItemSame.map((item, index) => {
              const slideIndex = Math.floor(index / 4); // Calculate slide index
              return (
                <Carousel.Item key={slideIndex}>
                  <Row md={4} style={{ marginTop: "50px" }}>
                    {listItemSame
                      .slice(slideIndex * 4, (slideIndex + 1) * 4)
                      .map((subItem, subIndex) => (
                        <Col key={subIndex} style={{ cursor: "pointer" }}>
                          <center>
                            <img
                              src={subItem.imageURL} // Replace with your image URL
                              alt={"item" + index} // Dynamically set alt text
                              style={{ width: "158px", height: "158px" }}
                            />
                            <p style={{ fontWeight: 400 }}>{subItem.name}</p>
                            <h4>{subItem.price}</h4>
                          </center>
                        </Col>
                      ))}
                  </Row>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </center>
    </div>
  );
}

export default Detail;
