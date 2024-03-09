import React, { useState, useEffect } from "react";
import "./Header.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaBars } from "react-icons/fa6";
import "react-bootstrap-submenu/dist/index.css";
import MenuHeader from "./MenuHeader";
import { CiShoppingBasket } from "react-icons/ci";
import CartRight from "../../views/Cart/CartRight";
import { useDispatch, useSelector } from "react-redux";
import { updateWidthDevice } from "../../Redux/Slices/CheckWidth";
import HeaderTablet from "./HeaderTablet";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobile, isTablet } = useSelector((state) => state.widthDevice);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth < 1024 && !isMobile;
      dispatch(updateWidthDevice({ isMobile, isTablet }));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Trigger initially

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = isTablet
    ? "header-container"
    : isScrolled
    ? "header-container header-scrolled"
    : "header-container";

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <Navbar
      expand="lg"
      style={{
        display: "block",
        maxHeight: "136px",
        backgroundColor: "#ffffff",
        border: "none",
        borderBottom: 1,
        borderColor: "black",
      }}
      variant="white"
      className={headerClass}
      onToggle={toggleNav}
      expanded={isNavExpanded}
    >
      <Container className="flex" id={isMobile ? "header-l" : ""}>
        {isTablet ||
          (isMobile && <FaBars size={30} onClick={handleShowMenu} />)}
        <Navbar.Brand
          href="/"
          style={{
            margin: isTablet ? "auto" : "",
            justifyContent: isMobile ? "center" : "",
            marginLeft: "-50px",
          }}
        >
          <div
            className="logo"
            style={{
              display: isMobile ? "flex" : "",
              justifyContent: isMobile ? "center" : "",
            }}
          >
            <img
              src="https://www.potsandpans.com/cdn/shop/files/Pots_and_Pans_Logo_Black-01_350x.png?v=1614351360"
              alt="Pots & Pans Logo"
              className={`logo-img ${
                isTablet ? "" : isScrolled ? "logo-scrolled" : ""
              }`}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {!isTablet && (
              <div className="d-flex ">
                <Nav.Link style={{ fontSize: 15 }} href="/signin">
                  Login / Sign up
                </Nav.Link>
                <div
                  style={{
                    width: "auto",
                    display: "flex",
                    alignItems: "center",
                  }}
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <CiShoppingBasket
                    size={28}
                    fontWeight={500}
                    style={{
                      marginLeft: 30,
                      fontWeight: 500,
                      fontFamily: "Arial",
                    }}
                    onClick={handleShow}
                  />
                </div>
                <CartRight open={show} close={handleClose} />
              </div>
            )}
          </Nav>
        </Navbar.Collapse>

        <CartRight />
      </Container>
      {isTablet && (
        <HeaderTablet show={showMenu} handleClose={handleCloseMenu} />
      )}
      {!isMobile && !isTablet && (
        <MenuHeader isTablet={isTablet} isMobile={isMobile} />
      )}
    </Navbar>
  );
}

export default Header;
