import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-light py-3" id="footer-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <img
              src="//www.potsandpans.com/cdn/shop/files/main_logo_220x.png?v=1614348493"
              alt="Pots&Pans logo"
              className="mb-3 logo"
            />
            <p className="font-weight-light text-muted mb-0">
              TRUSTED BRANDS FOR EVERY KITCHEN
            </p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4 font-weight-bold title-footer">
              Shop
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Gift Cards
                </a>
              </li>
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Brands
                </a>
              </li>
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Cookware
                </a>
              </li>
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Bakeware
                </a>
              </li>
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4 font-weight-bold title-footer">
              Company
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  About Us
                </a>
              </li>
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Affiliate Program
                </a>
              </li>
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Accessibility Statement
                </a>
              </li>
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Product FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4 font-weight-bold title-footer">
              Support
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Product Registration
                </a>
              </li>
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Support Overview
                </a>
              </li>
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Shipping & Delivery
                </a>
              </li>
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Returns
                </a>
              </li>
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Warranty
                </a>
              </li>
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Pay with Affirm
                </a>
              </li>
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Promotional Terms
                </a>
              </li>
              <li className="mb-2 item-footer-main">
                <a href="#" className="text-muted">
                  Product Disclosures
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-lg-0">
            <h5 className="text-uppercase mb-4 font-weight-bold title-footer">
              Our Cooking Community
            </h5>
            <form className="mb-4">
              <div
                className="input-group d-flex"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <input
                  type="email"
                  className="input-foter-main fz-8"
                  placeholder="Email Address"
                />
                <button
                  className="btn button-custom button-custom-footer fz-8 "
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div>
              <a href="#" className="text-muted mr-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-muted mr-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-muted mr-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-muted mr-2">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="text-muted mr-2">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <p
              className="text-muted small fz-12"
              style={{ marginTop: "-20px" }}
            >
              Sign up for our newsletter and receive 10% off your first order.
            </p>
          </div>
        </div>

        <hr className="my-4" />

        <div className="text-center text-muted small">
          © 2021 PotsandPans.com - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
