import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";

function CategoryPage() {
  return (
    <div style={{ padding: "60px" }}>
      <center>
        <h2
          style={{
            fontWeight: 400,
            lineHeight: 1.18,
            marginBottom: 50,
          }}
        >
          Shop by Category
        </h2>
      </center>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <Row className="w-full justify-content-center">
            <Col className="mb-4">
              <center>
                <img
                  style={{
                    height: "435px",
                    width: "400px",
                    marginBottom: "30px",
                  }}
                  src="https://cdn.accentuate.io/53227323469/1596130252177/AC_AYA_Skillet_Red_eBiz-Glam_JPG.jpg?v=0"
                  alt="First slide"
                />
                <h3 style={{ fontWeight: 400 }}>Cookware</h3>
              </center>
            </Col>
            <Col className="mb-4">
              <center>
                <img
                  style={{
                    height: "435px",
                    width: "400px",
                    marginBottom: "30px",
                  }}
                  src="https://cdn.accentuate.io/53227323469/1596130739313/Square-47192_AYC-Bakeware-Lifestyle_Copper_Glam.jpg?v=1697828105307"
                  alt="First slide"
                />
                <h3 style={{ fontWeight: 400 }}>Bakeware</h3>
              </center>
            </Col>
            <Col className="mb-4">
              <center>
                <img
                  style={{
                    height: "435px",
                    width: "400px",
                    marginBottom: "30px",
                  }}
                  src="https://cdn.accentuate.io/53227323469/1596130284945/Square-RR_RWH_Cucina_Serveware_Glam.jpg?v=1697828162173"
                  alt="First slide"
                />
                <h3 style={{ fontWeight: 400 }}>Dinnerware</h3>
              </center>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="w-full">
            <Col className="mb-4">
              <center>
                <img
                  style={{
                    height: "435px",
                    width: "400px",
                    marginBottom: "30px",
                  }}
                  src="https://cdn.accentuate.io/53227323469/1596130302676/Square-HPT818CS_LNL_LL1_14pcset_Refrigerator-Glam-R1-rgb.jpg?v=1697828240818"
                  alt="First slide"
                />
                <h3 style={{ fontWeight: 400 }}>Food Strorage</h3>
              </center>
            </Col>
            <Col className="mb-4">
              <center>
                <img
                  style={{
                    height: "435px",
                    width: "400px",
                    marginBottom: "30px",
                  }}
                  src="https://cdn.accentuate.io/53227323469/1596130318155/Square-BJR-6580_Bonjour-Catalog-Cover-Glam.tif-crop.jpg?v=1697828341011"
                  alt="First slide"
                />
                <h3 style={{ fontWeight: 400 }}>Beverageware</h3>
              </center>
            </Col>
            <Col className="mb-4">
              <center>
                <img
                  style={{
                    height: "435px",
                    width: "400px",
                    marginBottom: "30px",
                  }}
                  src="https://cdn.accentuate.io/53227323469/1596130336635/Square-RR_Tools_Ceramics_Collection.jpg?v=1697828323042"
                  alt="First slide"
                />
                <h3 style={{ fontWeight: 400 }}>Tools & Accessories</h3>
              </center>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      <div style={{ marginTop: "30px" }}>
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
                src="https://cdn.accentuate.io/53227323469/1596130500046/Square-KA_KKF_fromSet_SS_Lifestyle.jpg?v=1697828658024"
                alt="abc"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Col>
          <Col
            className="col-12 col-md-6"
            style={{
              textAlign: "left",
              padding: "100px",
              "@media (max-width: 767px)": {
                padding: "45px",
              },
            }}
          >
            <h2>Kitchen Essentials</h2>
            <p
              style={{
                fontSize: "18px",
                maxWidth: "400px",
              }}
            >
              From super-slick nonstick to durable stainless steel and the best
              in kitchen utensils, bakeware, food storage, and more, we’ve
              curated a wide variety of top-quality products to help every cook
              create delicious meals to share with family and friends. Whether
              you’re looking for value-driven sets, gifts for a special
              occasion, or a high-performance item for your signature recipe, we
              welcome you to the home of great kitchenware.
            </p>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <center>
          <h2>Explore Cookware</h2>
        </center>
        <Row style={{ gap: "15px", marginTop: "70px" }}>
          <Col style={{ cursor: "pointer", marginRight: "15px" }}>
            <center>
              <img
                src="https://cdn.accentuate.io/53227323469/1596129854036/Square-84815_KA_KKH_10pcSet_BlueVelvet_MainWithShadow.jpg?v=1697829526483"
                alt="item1"
                style={{ width: "158px", height: "158px" }}
              />
              <h5 style={{ fontWeight: 400 }}>Cookware Sets</h5>
            </center>
          </Col>
          <br />
          <Col style={{ cursor: "pointer", marginRight: "15px" }}>
            <center>
              <img
                src="https://cdn.accentuate.io/53227323469/1596129890988/1_90574942-8cb5-49de-89d2-44717f744bec.jpg?v=1697829743607"
                alt="item1"
                style={{ width: "158px", height: "158px" }}
              />
              <h5 style={{ fontWeight: 400 }}>Frying Pans & Sautés</h5>
            </center>
          </Col>
          <br />
          <Col style={{ cursor: "pointer", marginRight: "15px" }}>
            <center>
              <img
                src="https://cdn.accentuate.io/53227323469/1596129985355/wsu8c5vhhpdgpa5t9yft.jpg?v=1697829855079"
                alt="item1"
                style={{ width: "158px", height: "158px" }}
              />
              <h5 style={{ fontWeight: 400 }}>Saucepans & Stockpots</h5>
            </center>
          </Col>
          <br />
          <Col style={{ cursor: "pointer", marginRight: "15px" }}>
            <center>
              <img
                src="https://cdn.accentuate.io/53227323469/1596129995736/1_0c56c0f8-2305-47a0-90f8-bcef6bd2a4fa.jpg?v=1697829964413"
                alt="item1"
                style={{ width: "158px", height: "158px" }}
              />
              <h5 style={{ fontWeight: 400 }}>Stir Frys & Woks</h5>
            </center>
          </Col>
          <br />
          <Col style={{ cursor: "pointer", marginRight: "15px" }}>
            <center>
              <img
                src="https://cdn.accentuate.io/53227323469/1596130057812/kyeyxsvz0tmiqgu9lys4.jpg?v=1697830054434"
                alt="item1"
                style={{ width: "158px", height: "158px" }}
              />
              <h5 style={{ fontWeight: 400 }}>Grill Pans & Griddles</h5>
            </center>
          </Col>
          <br />
          <Col style={{ cursor: "pointer" }}>
            <center>
              <img
                src="https://cdn.accentuate.io/53227323469/1596130180363/prd56ssog2wwy2g5erbh.jpg?v=1697830116186"
                alt="item1"
                style={{ width: "158px", height: "158px" }}
              />
              <h5 style={{ fontWeight: 400 }}>Roasters</h5>
            </center>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: "100px", marginBottom: "50px" }}>
        <center>
          <h2>Get Baking</h2>
        </center>
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
      </div>
    </div>
  );
}

export default CategoryPage;
