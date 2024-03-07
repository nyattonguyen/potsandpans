import React from "react";
import { Col, Row } from "react-bootstrap";

function Slide4Item() {
  return (
    <Row md={4} style={{ marginTop: "50px" }}>
      <Col style={{ cursor: "pointer" }}>
        <center>
          <img
            src="https://cdn.accentuate.io/53227323469/1596131332341/zzzoctmpayzzis8qjfyq.jpg?v=1697828934286"
            alt="item1"
            style={{ width: "158px", height: "158px" }}
          />
          <h5 style={{ fontWeight: 400 }}>Bakeware Sets</h5>
        </center>
      </Col>
      <Col style={{ cursor: "pointer" }}>
        <center>
          <img
            src="https://cdn.accentuate.io/53227323469/1596131345490/47722_AYC_AYG_8in-round-cake-pan-set_Main-with-Shadow_TIF.jpg?v=0"
            alt="item1"
            style={{ width: "158px", height: "158px" }}
          />
          <h5 style={{ fontWeight: 400 }}>Cake Pans</h5>
        </center>
      </Col>
      <Col style={{ cursor: "pointer" }}>
        <center>
          <img
            src="https://cdn.accentuate.io/53227323469/1596131359658/uqzic0wsmlmsn0dxk0sh.jpg?v=1697829253959"
            alt="item1"
            style={{ width: "158px", height: "158px" }}
          />
          <h5 style={{ fontWeight: 400 }}>Loaf & Muffin Pans</h5>
        </center>
      </Col>
      <Col style={{ cursor: "pointer" }}>
        <center>
          <img
            src="https://cdn.accentuate.io/53227323469/1596131378280/w4w11aucjeubi5qbvzjg.jpg?v=1697829357737"
            alt="item1"
            style={{ width: "158px", height: "158px" }}
          />
          <h5 style={{ fontWeight: 400 }}>Baking Sheets</h5>
        </center>
      </Col>
    </Row>
  );
}

export default Slide4Item;
