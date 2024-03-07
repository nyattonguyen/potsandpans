import { Carousel } from "react-bootstrap";

export default function Announcement() {
  return (
    <Carousel
      indicators={false}
      controls={false}
      interval={3000}
      pause={false}
      style={{ position: "fixed", top: "0", left: 0, right: 0, zIndex: 1020 }}
    >
      <Carousel.Item>
        <div
          className="shopify-section d-flex justify-content-center align-items-center"
          style={{ height: "50px", backgroundColor: "#1d423c" }}
        >
          <p className="text-white m-0">FREE SHIPPING ON ORDERS OVER $75*</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="shopify-section d-flex justify-content-center align-items-center"
          style={{ height: "50px", backgroundColor: "#1d423c" }}
        >
          <p className="text-white m-0">
            NOW AN OFFICIAL PARTNER WITH KITCHENAID
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
