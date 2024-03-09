import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import "./homepage.css";
import Slide3Item from "../../components/Slide/Slide3Item";
import ListItem from "../../components/Recipes/ListItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const brandsData = [
  {
    id: 1,
    name: "Brand 1",
    logo: "https://www.potsandpans.com/cdn/shop/files/ka_refined__C41230_400x.png?v=1630347972",
    products: [
      {
        id: "1a",
        image:
          "https://www.potsandpans.com/cdn/shop/files/Untitled_design_8_1000x.png?v=1625257816",
        description:
          "Cook low and slow in an Ayesha’s 6-quart Dutch Oven featured on the Today Show as a “Consumer Reports Best Buy of the Year” and Oprah's “Favorite Things”.",
      },
      {
        id: "1b",
        image:
          "https://www.potsandpans.com/cdn/shop/products/vu1swf3fz5q5wtefe4su_grande.jpg?v=1628193282",
        description: "Non-stick frying pans",
      },
    ],
  },
  {
    id: 2,
    name: "Brand 2",
    logo: "https://www.potsandpans.com/cdn/shop/files/Ayesha_Curry_Logo_400x_5374a9a4-bfd8-4a85-8851-eb6a9300f2f9_400x.png?v=1628711047",
    products: [
      {
        id: "2a",
        image:
          "https://www.potsandpans.com/cdn/shop/files/PNP_Top_Brands_Rachael_Raye_700_x_700_1000x.jpg?v=1674836038",
        description:
          "Look to the Ayesha Curry Kitchenware Collection for an assortment of cookware, ceramics, bakeware, cutlery and tools that reflect Ayesha’s multicultural background and authentic voice and embody her passion for good food and meals that bring family and friends together. ",
      },
    ],
  },
  {
    id: 3,
    name: "Brand 3",
    logo: "https://www.potsandpans.com/cdn/shop/files/Untitled_design_-_2021-08-19T171323.723_400x.png?v=1629418419",
    products: [
      {
        id: "3a",
        image:
          "https://www.potsandpans.com/cdn/shop/files/Copy_of_anolon_logo_aubergine_400x.png?v=1666639190%20400w",
        description:
          "Rachael Ray continues to wow audiences with her special brand of authenticity, relatability, and fun. Bring on the color and convenience with Rachael Ray cookware, ceramics, bakeware, and clever gadgets designed for stylish simplicity and practicality in the kitchen. ",
      },
    ],
  },
  {
    id: 4,
    name: "Brand 4",
    logo: "https://www.potsandpans.com/cdn/shop/files/LocknLock_Logo_Black_400x_50e1bec2-e25e-484a-a272-e53b31bc769f_400x.png?v=1629418248",
    products: [
      {
        id: "4a",
        image:
          "https://www.potsandpans.com/cdn/shop/files/Farberware_Logo_OLD_400x.png?v=1614351339%20400w",
        description:
          "Get organized with no-mess, stay-fresh containers. From essential food storage to pantry organization to meals on-the-go, LocknLock offers a range of essential container shapes and sizes in plastic and glass for airtight, leakproof, portable food storage. ",
      },
    ],
  },
];

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Gọi ngay khi component mount để lấy kích thước ban đầu

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function HomePage() {
  const [brandIndex, setBrandIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  const { isMobile, isTablet } = useSelector((state) => state.widthDevice);

  const [showVideo, setShowVideo] = useState(false);

  const videoId = "pnPbiAOI_uQ"; // Thay thế bằng ID video YouTube của bạn
  const thumbnailUrl = `https://img.youtube.com/vi/LioJGazTPcE/0.jpg`; // URL thumbnail của video
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`; // URL video với autoplay

  const handleSelect = (selectedIndex, e) => {
    const selectedBrand = brandsData[brandIndex];
    if (
      selectedIndex === brandIndex &&
      productIndex < selectedBrand.products.length - 1
    ) {
      setProductIndex(productIndex + 1);
    } else {
      setBrandIndex(selectedIndex);
      setProductIndex(0);
    }
  };

  const selectedBrand = brandsData[brandIndex];
  const selectedProduct = selectedBrand.products[productIndex];

  // Chia brandsData thành các nhóm, mỗi nhóm chứa tối đa 3 brand

  const { width } = useWindowSize();
  const brandsPerSlide = width < 768 ? 1 : 3;

  const groupedBrands = [];
  for (let i = 0; i < brandsData.length; i += brandsPerSlide) {
    groupedBrands.push(brandsData.slice(i, i + brandsPerSlide));
  }

  return (
    <main>
      <div className="bg-white">
        <div
          className="position-relative"
          style={{ top: isMobile ? "-78px" : "" }}
        >
          <img
            alt="Delicious food"
            className="img-fluid"
            src="https://www.potsandpans.com/cdn/shop/files/KitchenAid_Nitro_Carbon_Steel_Shrimp_Stir_Fry_c60d5b4c-0c23-4add-b370-e0aa403064b2_1500x.jpg?v=1706642981"
            style={{
              objectFit: "cover",
              width: "100%",
              height: isMobile ? "480" : "700px",
            }}
          />

          <div
            className="position-absolute  w-650 r-custom p-3 bg-white shadow-lg"
            style={{
              transform: "translate(-80%, -45%)",
              top: isMobile ? "78%" : "20%",
            }}
          >
            <Card
              style={{ width: "auto", border: "none", alignItems: "center" }}
            >
              <Card.Img
                variant="top"
                style={{ width: "45%" }}
                src="https://www.potsandpans.com/cdn/shop/files/ka_refined__C41230_400x_14935a16-b2d5-48d3-a9ce-64fd00117485_600x.png?v=1635247665"
              />
              <Card.Body>
                <Card.Text style={{ textAlign: "center" }}>
                  Discover the latest cookware innovations from this iconic
                  brand, including new NITRO Carbon Steel collection.
                </Card.Text>
                <center>
                  <Link to="/kitchenaid">
                    <button
                      type="button"
                      className="button-custom"
                      style={{ borderWidth: 0 }}
                    >
                      Learn More
                    </button>
                  </Link>
                </center>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="mt-5 d-flex flex-column align-items-center">
          <h3 className="fw-bold">Featured Brands</h3>
          <div className="d-flex justify-content-center align-items-center mt-2">
            <a href="/">VIEW ALL BRANDS</a>
            <MdOutlineArrowRightAlt />
          </div>
          <Carousel activeIndex={brandIndex} onSelect={handleSelect}>
            {groupedBrands.map((group, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-around">
                  {group.map((brand) => (
                    <div
                      key={brand.id}
                      className="d-flex flex-column align-items-center carousel-brand-container"
                    >
                      <img
                        className="brand-logo"
                        src={brand.logo}
                        alt={`Logo of ${brand.name}`}
                      />
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="product-info">
          <img
            src={selectedProduct?.image}
            alt={`Product of ${selectedBrand?.name}`}
          />
          <div
            style={{ maxWidth: isMobile ? "65%" : "40%", textAlign: "center" }}
          >
            <p>{selectedProduct?.description}</p>
            <button className="shop-now-btn button-custom">Shop Now</button>
          </div>
        </div>
        <div className="youtube-video-container" style={{ margin: "20px 0" }}>
          {!showVideo ? (
            <img
              src={thumbnailUrl}
              width="80%"
              alt="Video Thumbnail"
              style={{ cursor: "pointer" }}
              onClick={() => setShowVideo(true)}
            />
          ) : (
            <iframe
              width="100%"
              height="515"
              src={videoUrl}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
        </div>
        <div className="category-slide">
          <center>
            <h2 style={{ fontSize: "36px" }} className="title-custom">
              Shop by Category
            </h2>
          </center>
          <Slide3Item />
        </div>
        <div style={{ marginTop: isMobile ? "100px" : "" }}>
          <Row
            xs={12}
            className="w-full justify-content-center"
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginRight: "50px",
            }}
          >
            <Col
              xs={isMobile ? 12 : 4}
              md={isMobile ? 12 : 4}
              className="mb-4"
              style={{ position: "relative", top: isMobile ? 120 : 0 }}
            >
              <span>WHAT'S NEW</span>
              <h2>Our Latest Releases</h2>
              <p>
                Check back here for the newest offerings in quality cookware,
                bakeware, food storage, and more.
              </p>
            </Col>
            <Col xs={6} md={4} className="mb-4">
              <div className="d-block">
                <img
                  style={{
                    height: isTablet ? "238px" : "435px",
                    width: isTablet ? "228px" : "400px",
                    marginBottom: "10px",
                    paddingRight: 10,
                  }}
                  src="https://www.potsandpans.com/cdn/shop/files/PNG-48874_KA_KKG_8.5_open_frying_pan_nonstick_enhanced_1_2_750x.png?v=1704736332"
                  alt="Firstimage"
                />
                <span>NITRO Carbon Steel Cookware</span>
              </div>
            </Col>
            <Col xs={6} md={4} className="mb-4">
              <div className="d-block">
                <img
                  style={{
                    height: isTablet ? "238px" : "435px",
                    width: isTablet ? "228px" : "400px",
                    marginBottom: "10px",
                  }}
                  src="https://www.potsandpans.com/cdn/shop/files/Untitled_design_39_750x.png?v=1686945299"
                  alt="Twomage"
                />
                <span style={{}}>Hard Anodized Ceramic Cookware</span>
              </div>
            </Col>
            {isMobile && (
              <Col xs={6} md={4} className="mb-4">
                <div className="d-block">
                  <img
                    style={{
                      height: isTablet ? "238px" : "435px",
                      width: isTablet ? "228px" : "400px",
                      marginBottom: "10px",
                    }}
                    src="https://www.potsandpans.com/cdn/shop/files/Untitled_design_-_2022-06-01T195517.496_750x.png?v=1654138541"
                    alt="Twomage"
                  />
                  <span style={{}}>Hard Anodized Ceramic Cookware</span>
                </div>
              </Col>
            )}
          </Row>
          {/* <Row
            xs={12}
            className="w-full justify-content-center"
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginRight: "50px",
            }}
          >
            <Col
              xs={isMobile ? 3 : 4}
              className="mb-4"
              style={{ position: "relative", top: 120 }}
            >
              <span>WHAT'S NEW</span>
              <h2>Our Latest Releases</h2>
              <p>
                Check back here for the newest offerings in quality cookware,
                bakeware, food storage, and more.
              </p>
            </Col>
            <Col xs={isMobile ? 3 : 4} className="mb-4">
              <div className="d-block">
                <img
                  style={{
                    height: isTablet ? "238px" : "435px",
                    width: isTablet ? "228px" : "400px",
                    marginBottom: "10px",
                    paddingRight: 10,
                  }}
                  src="https://www.potsandpans.com/cdn/shop/files/PNG-48874_KA_KKG_8.5_open_frying_pan_nonstick_enhanced_1_2_750x.png?v=1704736332"
                  alt="Firstimage"
                />
                <span>NITRO Carbon Steel Cookware</span>
              </div>
            </Col>
            <Col xs={isMobile ? 3 : 4} className="mb-4">
              <div className="d-block">
                <img
                  style={{
                    height: isTablet ? "238px" : "435px",
                    width: isTablet ? "228px" : "400px",
                    marginBottom: "10px",
                  }}
                  src="https://www.potsandpans.com/cdn/shop/files/Untitled_design_39_750x.png?v=1686945299"
                  alt="Twomage"
                />
                <span style={{}}>Hard Anodized Ceramic Cookware</span>
              </div>
            </Col>
            {isMobile && (
              <Col xs={3} className="mb-4">
                <div className="d-block">
                  <img
                    style={{
                      height: isTablet ? "238px" : "435px",
                      width: isTablet ? "228px" : "400px",
                      marginBottom: "10px",
                    }}
                    src="https://www.potsandpans.com/cdn/shop/files/Untitled_design_-_2022-06-01T195517.496_750x.png?v=1654138541"
                    alt="Twomage"
                  />
                  <span style={{}}>Hard Anodized Ceramic Cookware</span>
                </div>
              </Col>
            )}
          </Row> */}
        </div>
        <div>
          <center>
            <h2 style={{ fontSize: "36px" }} className="title-custom">
              Recipes For Right Now...
            </h2>
          </center>

          <div>
            <ListItem count={3} />
          </div>
        </div>
        <center>
          <Link to="/recipes">
            <button
              type="button"
              className="button-custom"
              style={{
                borderWidth: 0,
                fontSize: "13px",
                justifyContent: "center",
                marginBottom: "50px",
              }}
            >
              VIEW ALL RECIPES
            </button>
          </Link>
        </center>
      </div>
    </main>
  );
}

export default HomePage;
