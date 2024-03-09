import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { MdArrowRightAlt } from "react-icons/md";
import { useSelector } from "react-redux";
function ListItem({ count }) {
  const { isMobile, isTablet } = useSelector((state) => state.widthDevice);

  const data = [
    {
      title: "New York Steak with Red Pepper Chimichurri",
      content:
        "For achieving steak perfection, your kitchen ally must be as exceptional as the meal itself. Enter the NITRO Carbon Steel pan from ...",
      url: "https://www.potsandpans.com/cdn/shop/articles/KitchenAid_New_York_Steak_with_Red_Pepper_Chimichurri_800x.jpg?v=1709664625",
    },
    {
      title: "Pan Fried Potatoes",
      content:
        "Experience the ultimate potato perfection by using the innovative NITRO Carbon Steel Skillet from KitchenAid®. With its rapid a...",
      url: "https://www.potsandpans.com/cdn/shop/articles/Horizontal-48874_KA_KKG_8.5in_Fry_Pan_Scratch_Resistant_800x.jpg?v=1705707078",
    },
    {
      title: "Chicken Piccata",
      content:
        "Craft a delectable one-pan dinner featuring creamy chicken with zesty lemon, delivering a burst of flavors. Prepare this delightful...",
      url: "https://www.potsandpans.com/cdn/shop/articles/Horizontal-48737_KA_KKG_10in_Fry_Pan_Chicken_Picatta_Recipe_800x.jpg?v=1705706871",
    },
    {
      title: "Pan Roasted Brussel Sprouts",
      content:
        "The perfect flavorful side dish to make weeknight dinners stand out. Savor the fresh taste of brussel sprouts cooked down in a buttery garlic marin...",
      url: "https://www.potsandpans.com/cdn/shop/articles/3_800x.png?v=1604416747",
    },
    {
      title: "Apple Pie Cupcakes",
      content:
        "Everyone's favorite pie gets transformed into the treat of the season with apple pie cupcakes. Cinnamon-infused cupcakes topped with spiced butterc...",
      url: "https://www.potsandpans.com/cdn/shop/articles/PNP_6900_Apple_Pie_Cupcakes_Recipe_H_Glam_TIF_800x.jpg?v=1593463974",
    },
    {
      title: "Butternut Squash Mac & Cheese With Bacon",
      content:
        "This Butternut Squash Mac & Cheese With Bacon is perfect comfort food for the Holidays! It's every bit as healthy, as it is rich and indulgent!...",
      url: "https://www.potsandpans.com/cdn/shop/articles/1024px_x_600px_-_PNP.com_Recipe_Images_d041e057-bcd6-47dd-811c-24f74eaa6b2a_800x.png?v=1603917075",
    },
    {
      title: "Penne with Caramelized Pumpkin, Onion, Sage and Brown Butter",
      content:
        "At once rustic and sophisticated, this dish can be on the table in less than 45 minutes.",
      url: "https://www.potsandpans.com/cdn/shop/articles/1024px_x_600px_-_PNP.com_Recipe_Images_e04ed73d-3f38-4a56-a6f7-2c24682ef67b_800x.png?v=1602690186",
    },
    {
      title:
        "Bucatini with Guanciale, Spinach, Toasted Walnut Crumbs and Poached Egg",
      content:
        "Guanciale is a rich and flavorful cured meat which lends deep flavor to this special pasta dish, while the walnut crumbs add appealing texture. Whe...",
      url: "https://www.potsandpans.com/cdn/shop/articles/Weekend_-_Bucatini_with_Guanciale_Spinach_Toasted_Walnut_Crumbs_and_Poached_Egg_1_800x.jpg?v=1616519623",
    },
    {
      title: "Chili Braised Short Ribs",
      content:
        "GSpicy, sweet, smoky and meaty: these short ribs are deeply flavorful and outrageously satisfying.",
      url: "https://www.potsandpans.com/cdn/shop/articles/1024px_x_600px_-_PNP.com_Recipe_Images_1_6634f2b3-75a4-4e0d-bc9c-1368e01f33fa_800x.png?v=1608247001",
    },
    {
      title: "Lasagna Bolognese",
      content:
        "Creamy béchamel and a meaty tomato sauce make this the standard-setter for lasagnas.",
      url: "https://www.potsandpans.com/cdn/shop/articles/ANO_Recipe_Images_1024px_x_700px_2_800x.png?v=1609953262",
    },
    {
      title: "Turkey and Sweet Potato Pot Pie with Flaky",
      content:
        "This pot pie is inducement enough to cook a turkey, and makes the days after Thanksgiving as delicious as the feast itself. Using sweet potato inst...",
      url: "https://www.potsandpans.com/cdn/shop/articles/55a2ad9d7a9ebac14dda91ce4d750171_800x.jpg?v=1592863375",
    },
    {
      title: "Turtle Thumbprint Cookies",
      content:
        "Classic turtles are taken up a notch when turned into the ultimate holiday cookie! Chocolate thumbprints coated in pecans and filled with homemade ...",
      url: "https://www.potsandpans.com/cdn/shop/articles/1024px_x_600px_-_PNP.com_Recipe_Images_665201b3-07e4-401c-ae9d-e97f875390bb_800x.png?v=1608058729",
    },
  ];

  const truncateContent = (content) => {
    return content.length > 12 ? content.substring(0, 12) + "..." : content;
  };
  return (
    <center>
      <Row md={3} lg={3} className="g-4">
        {/* Map over your list of items here */}
        {data.slice(0, count !== 0 ? count : data.length).map(
          (
            item // Replace with your actual data
          ) => (
            <Col key={item}>
              <Card
                className="p-080"
                style={{
                  height: isTablet ? "300px" : "460px",
                  width: isTablet ? "200px" : "380px",
                  marginTop: 50,
                  marginBottom: 50,
                }}
              >
                <Card.Img
                  variant="top"
                  src={item.url}
                  style={{
                    width: "100%",
                    height: isTablet ? "124px" : "200px",
                  }}
                />
                <Card.Body
                  className="p-20 box-content "
                  id="#card-bodyrecipe"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "start",
                    backgroundColor: "#7a99a3",
                    color: "aliceblue",
                    padding: "20px",
                  }}
                >
                  <div className="p-20">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      <p>
                        {isTablet
                          ? truncateContent(item.content)
                          : item.content}
                      </p>
                    </Card.Text>
                  </div>
                  <div
                    className="d-flex "
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <p>Read more</p>
                    <MdArrowRightAlt style={{ marginBottom: 16 }} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>
    </center>
  );
}

export default ListItem;
