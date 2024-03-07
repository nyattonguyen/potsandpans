import React from "react";
import { Button, Carousel, Col, NavLink, Row } from "react-bootstrap";
import data from "../../Mock/exportproduct.json";

function Kitchenaid() {
  const selectedProducts = {};
  const result = [];

  data.products.forEach((item) => {
    if (!selectedProducts[item.productType] && result.length < 12) {
      selectedProducts[item.productType] = true;
      result.push(item);
    }
  });
  const thumbUrl =
    "https://i.vimeocdn.com/video/1248236584-41a6a8954d55ea181a0deda53cd6d34b9b4bd5300ab737f5b49ccedffae43bfc-d?mw=1400&mh=787&q=70";
  return (
    <div
      className="container"
      style={{
        position: "relative",
        minHeight: "130vh",
        height: "auto",
        marginBottom: 200,
      }}
    >
      <div
        style={{
          width: "100%",
          position: "relative",
          top: 100,
          minHeight: "500px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(https://i.shgcdn.com/6a6dbbe2-af9d-42f1-a0dc-881b82a620f9/-/format/auto/-/preview/3000x3000/-/quality/lighter/)`,
        }}
      >
        <Row className="mt-10">
          <Col>
            <div
              style={{
                marginLeft: 60,
                marginTop: 30,
                marginBottom: 15,
                background: "white",
                width: "550px",
                height: "250px",
              }}
            >
              <div
                style={{ paddingTop: 35, paddingLeft: 20, paddingBottom: 10 }}
              >
                <img
                  src="https://i.shgcdn.com/d00651c5-f0b0-4143-88ff-a4b24565672b/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                  alt="logo"
                />
                <p
                  style={{
                    width: "99%",
                    marginTop: 10,
                    lineHeight: 1.2,
                    textAlign: "left",
                    whiteSpace: "pre-line",
                    overflowWrap: "break-word",
                  }}
                >
                  From seared filets to sautéed vegetables fresh from the
                  garden, KitchenAid cookware provides optimal heat performance
                  to explore new everyday possibilities.
                </p>
                <center style={{ marginTop: 15 }}>
                  <Button
                    style={{
                      borderRadius: 0,
                      border: "none",
                      backgroundColor: "#7a99a3",
                      fontWeight: "bold",
                      fontSize: 18,
                    }}
                    variant="primary"
                    value=""
                  >
                    Shop Now
                  </Button>
                </center>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </div>
      <div
        style={{
          backgroundImage: `url(https://i.vimeocdn.com/video/1248236584-41a6a89…-d?mw=1920&mh=1080&q=70)`,
          height: "80%",
          width: "100%",
          position: "relative",
          display: "flex",
          marginTop: 156,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <video style={{ width: "80%", height: "60%" }} controls>
          <source
            src="https://player.vimeo.com/external/1248236584.hd.mp4?s=54511cd33c2fcf3b3174bf19f1f4ce0cf69fd5a1&profile_id=175"
            type="video/mp4"
          />
        </video>
      </div>
      <div style={{ marginTop: 40 }}>
        <Carousel>
          {result
            .reduce((chunks, item, index) => {
              if (index % 3 === 0) {
                chunks.push(result.slice(index, index + 3));
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
                            width: "83%",
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
      </div>
      <div>
        <Row
          style={{ display: "flex", alignItems: "center" }}
          className="flex-column-reverse flex-md-row"
        >
          <Col
            className="col-12 col-md-6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%" }}>
              <img
                src="https://i.shgcdn.com/fb2fe9c0-e8f2-4593-a193-91863d544ff3/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt="abc"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Col>
          <Col
            className="col-12 col-md-6"
            style={{
              textAlign: "center",
              "@media (max-width: 767px)": {
                padding: "45px",
              },
            }}
          >
            <h5>DELIVERS QUICK HEATING PERFORMANCE</h5>
            <h2>Hard-Anodized</h2>
            <p
              style={{
                fontSize: "18px",
                width: "100%",
                lineHeight: 1.2,
              }}
            >
              Thick, forged aluminum bases and thinner side walls provide quick
              heating without the extra weight.
            </p>
            <Button
              variant="outline-dark"
              style={{
                fontWeight: 400,
                fontSize: 20,
                borderRadius: 0,
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 10,
              }}
            >
              Shop Hard-Anodized
            </Button>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: 30 }}>
        <Row
          style={{ display: "flex", alignItems: "center" }}
          className="flex-column-reverse flex-md-row"
        >
          <Col
            className="col-12 col-md-6"
            style={{
              textAlign: "center",
              "@media (max-width: 767px)": {
                padding: "45px",
              },
            }}
          >
            <h5>ACHIEVES QUICK, EVEN HEATING</h5>
            <h2>Stainless Steel</h2>
            <p
              style={{
                fontSize: "18px",
                width: "100%",
                lineHeight: 1.2,
              }}
            >
              Stainless steel bases feature a layer of heat conductive aluminum
              that spreads heat quickly and evenly to grill, boil, and simmer
              with ease.
            </p>
            <Button
              variant="outline-dark"
              style={{
                fontWeight: 400,
                fontSize: 20,
                borderRadius: 0,
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 10,
              }}
            >
              Shop Stainless Steel
            </Button>
          </Col>
          <Col
            className="col-12 col-md-6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%" }}>
              <img
                src="https://i.shgcdn.com/58e34cbe-8d20-45ee-84b2-786e0bf1ed46/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt="abc"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: 30 }}>
        <Row
          style={{ display: "flex", alignItems: "center" }}
          className="flex-column-reverse flex-md-row"
        >
          <Col
            className="col-12 col-md-6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%" }}>
              <img
                src="https://i.shgcdn.com/c722f685-7252-4d30-a58e-58bc5c656d3e/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt="abc"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Col>
          <Col
            className="col-12 col-md-6"
            style={{
              textAlign: "center",
              "@media (max-width: 767px)": {
                padding: "45px",
              },
            }}
          >
            <h5>OPTIMIZED FOR HEAT DISTRIBUTION</h5>
            <h2>Stainless Steel 3-Ply Base</h2>
            <p
              style={{
                fontSize: "18px",
                width: "100%",
                lineHeight: 1.2,
              }}
            >
              Heavy-gauge stainless steel cookware features triple-layer bases
              with extra thick, heat-conducting aluminum between two layers of
              stainless steel, for edge-to-edge even heat distribution.
            </p>
            <Button
              variant="outline-dark"
              style={{
                fontWeight: 400,
                fontSize: 20,
                borderRadius: 0,
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 10,
              }}
            >
              Shop Stainless Steel 3-Ply Base
            </Button>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: 30 }}>
        <Row
          style={{ display: "flex", alignItems: "center" }}
          className="flex-column-reverse flex-md-row"
        >
          <Col
            className="col-12 col-md-6"
            style={{
              textAlign: "center",
              "@media (max-width: 767px)": {
                padding: "45px",
              },
            }}
          >
            <h5>EXCEPTIONAL BASE-TO-RIM HEAT CONDUCTION</h5>
            <h2>Stainless Steel 5-Ply Clad</h2>
            <p
              style={{
                fontSize: "18px",
                width: "100%",
                lineHeight: 1.2,
              }}
            >
              Three layers of extra thick, heat-conducting aluminum between two
              layers of stainless steel hold optimum heat throughout the
              cookware for endless possibilities.
            </p>
            <Button
              variant="outline-dark"
              style={{
                fontWeight: 400,
                fontSize: 20,
                borderRadius: 0,
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 10,
              }}
            >
              Shop Stainless Steel 5-Ply Clad
            </Button>
          </Col>
          <Col
            className="col-12 col-md-6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%" }}>
              <img
                src="https://i.shgcdn.com/15f13040-f2fe-4dcd-9fb7-e63bc314749e/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt="abc"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: 30 }}>
        <Row
          style={{ display: "flex", alignItems: "center" }}
          className="flex-column-reverse flex-md-row"
        >
          <Col
            className="col-12 col-md-6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%" }}>
              <img
                src="https://i.shgcdn.com/15f13040-f2fe-4dcd-9fb7-e63bc314749e/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt="abc"
                style={{ width: "100%", height: "100%" }}
              />
              <div style={{ marginTop: 10, textAlign: "center" }}>
                <h3>Roasters</h3>
                <p>
                  Achieves even heating in the oven and on the stovetop to
                  elevate everyday meals
                </p>
              </div>
            </div>
          </Col>
          <Col
            className="col-12 col-md-6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%" }}>
              <img
                src="https://i.shgcdn.com/00b1908b-5337-42fb-8811-01bc7a24171b/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt="abc"
                style={{ width: "100%", height: "100%" }}
              />
              <div style={{ marginTop: 10, textAlign: "center" }}>
                <h3>Teakettles</h3>
                <p>
                  Bring creativity to a boil with a thick, aluminum layer base
                  that spreads and holds heat.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <center>
        <Button
          variant="outline-dark"
          style={{
            fontWeight: 400,
            fontSize: 20,
            borderRadius: 0,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 10,
          }}
        >
          <NavLink href="/kitchenaid">SHOP ALL KITCHENAID</NavLink>
        </Button>
      </center>
    </div>
  );
}

export default Kitchenaid;
