import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

function BrandPage() {
  let isMobile = window.innerWidth <= 767;
  const [imageStyle, setImageStyle] = useState({
    width: "70%",
    objectFit: "cover",
  });
  useEffect(() => {
    if (isMobile) {
      setImageStyle({
        ...imageStyle,
        width: "50%",
        objectFit: "cover",
        height: "40%",
      });
    }
  }, [isMobile]);
  return (
    <div style={{ padding: "60px" }}>
      <center>
        <h1
          style={{
            fontWeight: 400,
            lineHeight: 1.18,
            marginBottom: 50,
          }}
        >
          Explore Our Brands
        </h1>
      </center>

      <Row className="w-full justify-content-center flex-column flex-md-row mt-4">
        <Col className="mb-4 d-flex justify-content-center">
          <img
            style={imageStyle}
            src="https://www.potsandpans.com/cdn/shop/files/KitchenAid-Brand-Logo-01_400x.jpg?v=1614358625%20400w%22"
            alt="First slide"
          />
        </Col>
        <Col className="mb-4 d-flex justify-content-center">
          <img
            style={imageStyle}
            src="https://www.potsandpans.com/cdn/shop/files/Ayesha_Curry_Logo_400x.png?v=1614350257%20400w"
            alt="First slide"
          />
        </Col>
        <Col className="mb-4 d-flex justify-content-center">
          <img
            style={imageStyle}
            src="https://www.potsandpans.com/cdn/shop/files/Copy_of_anolon_logo_aubergine_400x.png?v=1666639190%20400w"
            alt="First slide"
          />
        </Col>
      </Row>
      <Row className="w-full justify-content-center flex-column flex-md-row">
        <Col className="mb-4 d-flex justify-content-center">
          <img
            style={imageStyle}
            src="https://www.potsandpans.com/cdn/shop/files/Untitled_design_-_2021-08-19T170903.994_400x.png?v=1629418161%20400w"
            alt="First slide"
          />
        </Col>
        <Col className="mb-4 d-flex justify-content-center">
          <img
            style={imageStyle}
            src="https://www.potsandpans.com/cdn/shop/files/Untitled_design_17_0db48f0d-aeb8-4f0e-8ae7-ea8bb396c1aa_400x.png?v=1666639781%20400w"
            alt="First slide"
          />
        </Col>
        <Col className="mb-4 d-flex justify-content-center">
          <img
            style={imageStyle}
            src="https://www.potsandpans.com/cdn/shop/files/Farberware_Logo_OLD_400x.png?v=1614351339%20400w"
            alt="First slide"
          />
        </Col>
      </Row>
      <Row className="w-full justify-content-center flex-column flex-md-row">
        <Col className="mb-4 d-flex justify-content-center">
          <img
            style={imageStyle}
            src="https://www.potsandpans.com/cdn/shop/files/BonJour_Logo_copy_400x.png?v=1614350257%20400w"
            alt="First slide"
          />
        </Col>
        <Col className="mb-4 d-flex justify-content-center">
          <img
            style={imageStyle}
            src="https://www.potsandpans.com/cdn/shop/files/Untitled_design_17_0db48f0d-aeb8-4f0e-8ae7-ea8bb396c1aa_400x.png?v=1666639781%20400w"
            alt="First slide"
          />
        </Col>
        <Col className="mb-4 d-flex justify-content-center">
          <img
            style={imageStyle}
            src="https://www.potsandpans.com/cdn/shop/files/Ruffoni_Logo_PNP-01_400x.png?v=1614353392%20400w"
            alt="First slide"
          />
        </Col>
      </Row>

      <center>
        <h1
          style={{
            fontWeight: 400,
            lineHeight: 1.18,
            marginBottom: 50,
          }}
        >
          About Us
        </h1>
        <h5 style={{ fontWeight: 400, marginBottom: "30px" }}>
          It’s all in the name. For over 20 years, PotsandPans.com has been
          keeping home cooks in the know with the latest cooking innovations and
          inspirations from the most trusted kitchenware brands.
        </h5>
        <h5 style={{ fontWeight: 400, marginBottom: "30px" }}>
          From super-slick nonstick and ultra-durable hard-anodized aluminum, to
          gleaming stainless steel and the best in kitchen utensils, bakeware,
          food storage, and more, we’ve curated a wide variety of top-quality
          products to help every cook create delicious meals to share with
          family and friends.
        </h5>
        <h5 style={{ fontWeight: 400, marginBottom: "30px" }}>
          Whether you’re looking for value-driven cookware sets, gifts for a
          special occasion, or a high-performance item for your signature
          recipe, we welcome you to the home of great cookware, bakeware, and
          kitchenware. Equip your kitchen with the best from PotsandPans.com.
        </h5>
      </center>
    </div>
  );
}

export default BrandPage;
