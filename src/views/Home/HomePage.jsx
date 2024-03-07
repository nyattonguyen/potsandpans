import React, { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import "./homepage.css";

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

  const [showVideo, setShowVideo] = useState(false);

  const videoId = "9IbuIl0_NWw"; // Thay thế bằng ID video YouTube của bạn
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`; // URL thumbnail của video
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
        <div className="position-relative">
          <img
            alt="Delicious food"
            className="img-fluid"
            src="https://www.potsandpans.com/cdn/shop/files/KitchenAid_Nitro_Carbon_Steel_Shrimp_Stir_Fry_c60d5b4c-0c23-4add-b370-e0aa403064b2_1500x.jpg?v=1706642981"
            style={{ objectFit: "cover", width: "100%", height: "700px" }}
          />
          <div
            className="position-absolute top-50 start-50 p-3 bg-white shadow-lg"
            style={{ width: "350px", transform: "translate(-80%, -45%)" }}
          >
            <h2 className="h2 fw-bold text-dark">KitchenAid®</h2>
            <p className="mt-2 text-muted">
              Discover the latest cookware innovations from this iconic brand,
              including new NITRO Carbon Steel collection.
            </p>
            <Button className="btn btn-primary mt-4">Learn More</Button>
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
          <div style={{ maxWidth: "40%", textAlign: "center" }}>
            <p>{selectedProduct?.description}</p>
            <button className="shop-now-btn button-customs  ">Shop Now</button>
          </div>
        </div>
        <div className="youtube-video-container" style={{ margin: "20px 0" }}>
          {!showVideo ? (
            <img
              src={thumbnailUrl}
              width="100%"
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
      </div>
    </main>
  );
}

export default HomePage;
