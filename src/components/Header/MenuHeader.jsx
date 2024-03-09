import React, { useEffect, useRef, useState } from "react";
import { Col, ListGroup, Nav, Row } from "react-bootstrap";
import brands from "../../Mock/subcategory.json";
import categories from "../../Mock/subcategory2.json";
import { LiaSearchSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { updateItemSearch } from "../../Redux/Slices/ItemSearch";
import { Link, NavLink, useParams } from "react-router-dom";
import "./Header.css";
import { updateLinkCurrentHeader } from "../../Redux/Slices/TitleLink";

function MenuHeader({ isTablet, isMobile }) {
  const id = useParams();
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredItem, setIsHoveredItem] = useState(false);
  const [isHoveredBrand, setIsHoveredBrand] = useState(false);
  const [isHoveredCategory, setIsHoveredCategory] = useState(false);

  const [listSubMenu, setListSubMenu] = useState([]);
  const [itemContent, setItemContent] = useState(null);
  const itemRefs = useRef([]);
  const [text, setText] = useState("");
  const [active, setActive] = useState(false);

  const listBrand = [];
  const listCategory = [];

  const handleUpdateLink = (title) => {
    setActive(true);
    dispatch(updateLinkCurrentHeader());
  };

  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsHoveredCategory(false);
    setIsHoveredBrand(false);
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
    <div
      className="w-full submenu-main"
      style={{ height: "66.6px", background: "#ffffff" }}
    >
      <div style={{}}>
        <Nav
          id="list-item-menu-header-main"
          variant="pills"
          activeKey="1"
          style={{
            display: "flex",
          }}
        >
          <NavLink
            to="/shop-by-brand"
            id="item-menu-header-main"
            style={{ fontSize: 18, marginLeft: 10 }}
            eventKey="1"
            title="Item"
            onMouseEnter={handleHoverBrand}
          >
            BRANDS
            <div
              className={`${
                active ? "line-underline-active" : "line-underline"
              }`}
            ></div>
          </NavLink>
          <Nav>
            <NavLink
              to="/shop-by-category"
              style={{ fontSize: 18, marginLeft: 10 }}
              id="item-menu-header-main"
              eventKey="3"
              title="Item"
              onMouseEnter={handleHoverCategory}
            >
              CATEGORIES
              <div className="line-underline"></div>
            </NavLink>
          </Nav>
          <Nav>
            <NavLink
              to="/recipes"
              style={{ fontSize: 18, marginLeft: 10 }}
              id="item-menu-header-main"
              eventKey="4"
              title="Item"
              onMouseLeave={handleMouseLeave}
            >
              RECIPES
              <div className="line-underline"></div>
            </NavLink>
          </Nav>
          <Nav>
            <NavLink
              to="/collections/category/New Arrivals"
              style={{ fontSize: 18, marginLeft: 10 }}
              id="item-menu-header-main"
              eventKey="5"
              title="Item"
              onMouseLeave={handleMouseLeave}
            >
              NEW
              <div className="line-underline"></div>
            </NavLink>
          </Nav>
          <Nav>
            <NavLink
              to="/collections/category/Clearance"
              style={{ fontSize: 18, marginLeft: 10 }}
              id="item-menu-header-main"
              eventKey="6"
              title="Item"
              onMouseLeave={handleMouseLeave}
            >
              CLEARANCE
              <div className="line-underline"></div>
            </NavLink>
          </Nav>
        </Nav>
        <div
          style={{
            display: isTablet ? "none" : "flex",
            background: "#f8f9fa",
            width: "110%",
            marginLeft: "-60px",
            marginTop: "20px",
          }}
        >
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
                        id="item-sub"
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
                        id="item-sub"
                        ref={(el) => (itemRefs.current[index] = el)}
                        variant="light"
                        onMouseEnter={() => handleMouseEnterItemCategory(index)}
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
                        <p
                          style={{ marginTop: 10, fontWeight: "500" }}
                          className="item-submenu-header"
                        >
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
                                <Link
                                  className="id-itemsub-link"
                                  to={`/collections/brand/${
                                    item.header + " " + itemSub
                                  }`}
                                >
                                  {itemSub}
                                </Link>
                              ) : (
                                <Link
                                  className="id-itemsub-link"
                                  to={`/collections/category/${itemSub}`}
                                >
                                  {itemSub}
                                </Link>
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
        <div
          className="d-flex"
          style={{
            position: "relative",
            float: "right",
            right: "60px",
            top: "-30px",
          }}
        >
          <div style={{ height: "40px" }}>
            <input
              type="text"
              style={{}}
              class="input-search-custom"
              placeholder="Search"
              onChange={handleEnterText}
              aria-label="Search"
              aria-describedby="button-addon2"
            />
          </div>
          <div
            onClick={handleSearchText}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              marginLeft: "-20px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            <LiaSearchSolid />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;
