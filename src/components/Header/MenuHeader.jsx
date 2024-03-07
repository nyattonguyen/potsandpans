import React, { useEffect, useRef, useState } from "react";
import { Col, ListGroup, Nav, NavLink, Row } from "react-bootstrap";
import brands from "../../Mock/subcategory.json";
import categories from "../../Mock/subcategory2.json";
import { useDispatch } from "react-redux";
import { updateItemSearch } from "../../Redux/Slices/ItemSearch";

function MenuHeader({ isTablet, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredItem, setIsHoveredItem] = useState(false);
  const [isHoveredBrand, setIsHoveredBrand] = useState(false);
  const [isHoveredCategory, setIsHoveredCategory] = useState(false);

  const [listSubMenu, setListSubMenu] = useState([]);
  const [itemContent, setItemContent] = useState(null);
  const itemRefs = useRef([]);
  const [text, setText] = useState("");

  const listBrand = [];
  const listCategory = [];

  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleHoverBrand = () => {
    setIsHoveredCategory(false);
    setIsHoveredBrand(true);
    handleMouseEnterItem(0);
  };

  const handleHoverCategory = () => {
    setIsHoveredBrand(false);
    setIsHoveredCategory(true);
    handleMouseEnterItemCategory(0);
  };

  // hover change by item
  const handleMouseEnterItemCategory = (index) => {
    setIsHoveredItem(true);
    setIsHovered(true);
    setIsHoveredCategory(true);
    setItemContent(null);
    const content = itemRefs.current[index]?.textContent;
    setItemContent(content);
  };

  // hover change by item
  const handleMouseEnterItem = (index) => {
    setIsHoveredItem(true);
    setIsHovered(true);
    setIsHoveredBrand(true);
    setItemContent(null);
    const content = itemRefs.current[index]?.textContent;
    setItemContent(content);
  };
  // move hover overitem
  const handleMouseLeaveItem = () => {
    setItemContent(null);
    setIsHoveredItem(false);
    setIsHovered(false);
  };

  brands.data.forEach((item) => {
    if (
      !listBrand.includes(item.header) &&
      item.header !== "undefined" &&
      item.header !== ""
    ) {
      listBrand.push(item.header);
    }
  });

  categories.data.forEach((item) => {
    if (
      !listCategory.includes(item.header) &&
      item.header !== "undefined" &&
      item.header !== ""
    ) {
      listCategory.push(item.header);
    }
  });

  const handleSearchText = () => {
    dispatch(updateItemSearch({ text }));
  };
  const handleEnterText = (e) => {
    setText(e.target.value);
  };

  const fetchItemMenu = () => {
    var updateSubMenu = [];
    if (isHoveredBrand) {
      updateSubMenu = brands.data.filter((item) => item.header == itemContent);
    } else {
      updateSubMenu = categories.data.filter(
        (item) => item.header == itemContent
      );
    }

    const newArray = updateSubMenu.map((item) => ({
      header: item.header,
      title: item.title,
      listitem: item.listitem,
    }));

    setListSubMenu(newArray);
  };

  useEffect(() => {
    if (itemContent !== null) {
      fetchItemMenu();
    }
  }, [itemContent]);

  return (
    <div>
      <div
        style={{
          height: 1,
          background: "gray",
        }}
      ></div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{}}>
          <Nav
            variant="pills"
            activeKey="1"
            style={{
              marginLeft: "90px",
              display: "flex",
            }}
          >
            <Nav.Item>
              <Nav.Link
                href="/shop-by-brand"
                id="item-menu"
                style={{ fontSize: 20, marginLeft: 10 }}
                eventKey="2"
                title="Item"
                onMouseEnter={handleHoverBrand}
              >
                BRANDS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/shop-by-category"
                style={{ fontSize: 20, marginLeft: 10 }}
                id="item-menu"
                eventKey="2"
                title="Item"
                onMouseEnter={handleHoverCategory}
              >
                CATEGORIES
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ fontSize: 20, marginLeft: 10 }}
                id="item-menu"
                eventKey="2"
                title="Item"
              >
                RECIPES
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ fontSize: 20, marginLeft: 10 }}
                id="item-menu"
                eventKey="2"
                title="Item"
              >
                NEW
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ fontSize: 20, marginLeft: 10 }}
                id="item-menu"
                eventKey="2"
                title="Item"
              >
                CLEARANCE
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div style={{ display: isTablet ? "none" : "flex" }}>
            {isHovered && (
              <>
                <div style={{ width: "24%" }}>
                  <ListGroup>
                    {isHoveredBrand &&
                      listBrand.map((item, index) => (
                        <ListGroup.Item
                          style={{
                            fontWeight: "500",
                            fontSize: 18,
                          }}
                          action
                          ref={(el) => (itemRefs.current[index] = el)}
                          variant="light"
                          onMouseEnter={() => handleMouseEnterItem(index)}
                        >
                          {item}
                        </ListGroup.Item>
                      ))}
                    {isHoveredCategory &&
                      listCategory.map((item, index) => (
                        <ListGroup.Item
                          style={{
                            fontWeight: "500",
                            fontSize: 18,
                          }}
                          action
                          ref={(el) => (itemRefs.current[index] = el)}
                          variant="light"
                          onMouseEnter={() =>
                            handleMouseEnterItemCategory(index)
                          }
                        >
                          {item}
                        </ListGroup.Item>
                      ))}
                    <ListGroup.Item style={{ height: 200 }}></ListGroup.Item>
                  </ListGroup>
                </div>
                {isHoveredItem && (
                  <Row
                    style={{
                      width: "76%",
                      height: "100%",
                      display: "flex",
                      marginLeft: 20,
                    }}
                    onMouseLeave={handleMouseLeaveItem}
                  >
                    {" "}
                    {listSubMenu.length > 0 &&
                      listSubMenu?.map((item, index) => (
                        <Col key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
                          <p style={{ marginTop: 10, fontWeight: "500" }}>
                            {item.title}
                          </p>
                          <ul
                            className="list-item-sub"
                            style={{ listStyleType: "none" }}
                          >
                            {" "}
                            {item.listitem.map((itemSub) => (
                              <li
                                className="item-sub-menu"
                                style={{
                                  height: "auto",
                                  marginLeft: 10,
                                  marginTop: 4,
                                  marginBottom: 4,
                                }}
                              >
                                {isHoveredBrand ? (
                                  <NavLink
                                    href={`/collections/brand/${
                                      item.header + " " + itemSub
                                    }`}
                                  >
                                    {itemSub}
                                  </NavLink>
                                ) : (
                                  <NavLink
                                    href={`/collections/category/${itemSub}`}
                                  >
                                    {itemSub}
                                  </NavLink>
                                )}
                              </li>
                            ))}
                          </ul>
                        </Col>
                      ))}
                  </Row>
                )}
              </>
            )}
          </div>
        </div>
        <div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              onChange={handleEnterText}
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={handleSearchText}
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;
