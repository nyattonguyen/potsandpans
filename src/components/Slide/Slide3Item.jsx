import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Slide3Item.css";
import { Link } from "react-router-dom";

function Slide3Item() {
  const { isMobile, isTablet } = useSelector((state) => state.widthDevice);

  const data = [
    {
      src: "https://cdn.accentuate.io/53227323469/1596130252177/AC_AYA_Skillet_Red_eBiz-Glam_JPG.jpg?v=0",
      title: "Cookware",
    },
    {
      src: "https://cdn.accentuate.io/53227323469/1596130739313/Square-47192_AYC-Bakeware-Lifestyle_Copper_Glam.jpg?v=1697828105307",
      title: "Bakeware",
    },
    {
      src: "https://cdn.accentuate.io/53227323469/1596130284945/Square-RR_RWH_Cucina_Serveware_Glam.jpg?v=1697828162173",
      title: "Dinnerware",
    },
    {
      src: "https://cdn.accentuate.io/53227323469/1596130302676/Square-HPT818CS_LNL_LL1_14pcset_Refrigerator-Glam-R1-rgb.jpg?v=1697828240818",
      title: "Food Strorage",
    },
    {
      src: "https://cdn.accentuate.io/53227323469/1596130318155/Square-BJR-6580_Bonjour-Catalog-Cover-Glam.tif-crop.jpg?v=1697828341011",
      title: "Beverageware",
    },
    {
      src: "https://cdn.accentuate.io/53227323469/1596130336635/Square-RR_Tools_Ceramics_Collection.jpg?v=1697828323042",
      title: "Tools & Accessories",
    },
  ];
  const itemsPerSlide = isMobile ? 1 : 3;
  return (
    <Carousel
      data-bs-theme="dark"
      style={{ marginTop: isTablet ? "140px" : "" }}
    >
      {data.map((item, index) => {
        const slideIndex = Math.floor(index / itemsPerSlide); // Calculate slide index
        const startIndex = slideIndex * itemsPerSlide; // Calculate start index of items for current slide
        const endIndex = Math.min(startIndex + itemsPerSlide, data.length); // Calculate end index of items for current slide
        const slideItems = data.slice(startIndex, endIndex);
        return (
          <Carousel.Item key={slideIndex}>
            <Row
              xs={12}
              className="w-full justify-content-center"
              style={{ marginTop: "50px" }}
            >
              {slideItems // Slice items for each slide
                .map((subItem, subIndex) => (
                  <Col
                    xs={3}
                    className="mb-4"
                    key={subIndex}
                    style={{
                      width: isMobile ? "100%" : "",
                      margin: isMobile ? 10 : 20,
                    }}
                  >
                    <Link to={`/collections/category/${subItem.title}`}>
                      <center>
                        <img
                          style={{
                            height: isTablet ? "200px" : "435px",
                            width: isTablet ? "180px" : "400px",
                            marginBottom: "30px",
                          }}
                          src={subItem.src}
                          alt="First slide"
                        />
                        <span
                          style={{ fontSize: isMobile ? "22px" : "28px" }}
                          className="content-custom"
                        >
                          {subItem.title}
                        </span>
                      </center>
                    </Link>
                  </Col>
                ))}
            </Row>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slide3Item;
