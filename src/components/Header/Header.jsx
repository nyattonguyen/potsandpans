import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { NavDropdownMenu } from "react-bootstrap-submenu";
import "react-bootstrap-submenu/dist/index.css";
import MenuHeader from "./MenuHeader";
import { CiShoppingBasket } from "react-icons/ci";
import CartRight from "../../views/Cart/CartRight";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleResizeTablet = () => {
      setIsTablet(window.innerWidth < 1024);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResizeTablet);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleResizeTablet);
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

  const headerClass = isScrolled
    ? "header-container header-scrolled"
    : "header-container";

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ display: "block" }}
      variant="white"
      className={headerClass}
      onToggle={toggleNav}
      expanded={isNavExpanded}
    >
      <Container className="flex">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/">
          <div className="logo">
            <img
              src="https://www.potsandpans.com/cdn/shop/files/Pots_and_Pans_Logo_Black-01_350x.png?v=1614351360"
              alt="Pots & Pans Logo"
              className={`logo-img ${isScrolled ? "logo-scrolled" : ""}`}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {!isMobile && (
              <div className="d-flex ">
                <Nav.Link style={{ fontSize: 15 }} href="/signin">
                  LogIn/SignUp
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
            {isMobile && (
              <>
                <Nav.Link
                  href="#cart"
                  className={
                    !isNavExpanded
                      ? "mobile-cart-icon"
                      : "mobile-cart-icon hidden"
                  }
                ></Nav.Link>
                <NavDropdownMenu
                  title="Menu"
                  id="collasible-nav-dropdown"
                  alignRight
                >
                  <NavDropdown.Item href="#login">
                    LogIn/SignUp
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdownMenu>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
        {isMobile && !isNavExpanded && (
          <Nav.Link href="#cart" className="mobile-cart-icon">
            <FaShoppingCart />
          </Nav.Link>
        )}
        <CartRight />
      </Container>

      {!isMobile && <MenuHeader isTablet={isTablet} isMobile={isMobile} />}
    </Navbar>
  );
}

export default Header;
