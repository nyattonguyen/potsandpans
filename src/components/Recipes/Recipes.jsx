import React, { useEffect, useState } from "react";
import { li, Pagination, Row } from "react-bootstrap";
import "./Recipes.css";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
function Recipes() {
  let active = 1;
  const { isMobile, isTablet } = useSelector((state) => state.widthDevice);

  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        id="item-pagination"
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="container ">
      <div className="text-center mt-4 mb-4">
        <h1 className="title-recipe">Recipes For Every Cook</h1>
      </div>
      <div className="box-filter">
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            listStyleType: "none",
          }}
        >
          <li>
            <span
              className="item-filter-main"
              style={{ fontSize: "26px", color: "#1d4242" }}
            >
              Filter:{" "}
            </span>
          </li>

          <li>
            <span className="item-filter">Pan Type</span>
            <div className="line-custom animate__fadeOutLeft"></div>
          </li>
          <li>
            <span className="item-filter">Ingredient</span>
            <div className="line-custom"></div>
          </li>
          <li>
            <span className="item-filter">Occasion</span>
            <div className="line-custom"></div>
          </li>
          <li>
            <span className="item-filter">Meal</span>
            <div className="line-custom"></div>
          </li>
          <li>
            <span className="item-filter">Season</span>
            <div className="line-custom"></div>
          </li>
          <li>
            <span className="item-filter">All</span>
            <div className="line-custom"></div>
          </li>
        </ul>
      </div>
      <div>
        <ListItem />
      </div>
      <div
        className="w-full d-flex justify-content-center align-items-center"
        style={{ marginTop: isTablet ? "70px" : "" }}
      >
        <center>
          <Pagination>{items}</Pagination>
        </center>
      </div>
    </div>
  );
}

export default Recipes;
