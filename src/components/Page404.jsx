import React, { useEffect, useState } from "react";
import { Button, Carousel, Col, Form, InputGroup, Row } from "react-bootstrap";
import data from "../Mock/exportproduct.json";

function Page404() {
  const selectedProducts = {};
  const result = [];

  data.products.forEach((item) => {
    if (!selectedProducts[item.productType] && result.length < 12) {
      selectedProducts[item.productType] = true;
      result.push(item);
    }
  });

  return (
    <div
      className="text-center "
      style={{
        margin: 20,
        top: "100px",
        position: "relative",
        height: "auto",
        minHeight: "98vh",
      }}
    >
      <h1>
        <strong>Whoops! That page is missing...</strong>
      </h1>
      <h3 style={{ marginTop: 30 }}>
        But we did find a few items you might like instead. Search for what
        you're looking for below or{" "}
        <a
          href="/"
          color="#161515"
          style={{
            color: "#161515",
            margin: 10,
            textDecoration: "underline",
            textDecorationThickness: "2px",
            textDecorationOffset: "3px",
          }}
        >
          return home
        </a>
        .
      </h3>

      <div style={{ marginTop: 40, marginBottom: 40 }}>
        <InputGroup
          className="mb-3 "
          style={{
            width: "80%",
            margin: "auto",
          }}
        >
          <Form.Control
            placeholder="Search"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            style={{ background: "gray", color: "white" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fontWeight={500}
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </Button>
        </InputGroup>
      </div>
      <h3>Best-selling products we think you'll enjoy</h3>
      <div className="" style={{ marginTop: 40 }}>
        <Carousel>
          {result
            .reduce((chunks, item, index) => {
              if (index % 4 === 0) {
                chunks.push(result.slice(index, index + 4));
              }
              return chunks;
            }, [])
            .map((chunk, index) => (
              <Carousel.Item key={index}>
                <Row className="w-full justify-content-center">
                  {chunk.map((product, idx) => (
                    <Col key={idx} className="mb-4">
                      <center>
                        <img
                          style={{
                            width: "40%",
                            marginBottom: "30px",
                          }}
                          src={product.imageURL}
                          alt={product.name}
                        />
                        <h3 style={{ fontWeight: 400 }}>
                          {product.productType}
                        </h3>
                        <div className="d-flex justify-content-center">
                          <h5>{product.price}</h5>{" "}
                          {product.comparePrice != "0.00" ? (
                            <p
                              style={{
                                marginLeft: 16,
                                textDecoration: "line-through",
                                textDecorationColor: "gray",
                              }}
                            >
                              {product.comparePrice}
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </center>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
        </Carousel>
        <center>
          <Button
            variant="outline-dark"
            style={{
              fontWeight: 400,
              fontSize: 20,
              borderRadius: 0,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            SHOP BEST SELLERS
          </Button>
        </center>
      </div>
    </div>
  );
}

export default Page404;
