import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./CollectionFill.css";
import { Pagination } from "react-bootstrap";
import productList from "../../Mock/exportproduct.json";
import { Link, useParams } from "react-router-dom";

export default function CollectionFill() {
  const { id, keyfill } = useParams();
  const [listProductBrand, setListProductBrand] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openCategory, setOpenCategory] = useState(true);
  const [openBrand, setOpenBrand] = useState(true);
  const [openMaterial, setOpenMaterial] = useState(true);
  const [productsOnSale, setProductsOnSale] = useState([]);
  const [titlePage, setTitlePage] = useState("");
  const productsPerPage = 16;
  function capitalizeFirstLetter(str) {
    let title = str.charAt(0).toUpperCase() + str.slice(1);
    setTitlePage(title);
  }

  const categories = [
    { name: "Accessories", count: 5 },
    { name: "Bakeware", count: 22 },
    { name: "Cookware", count: 23 },
    { name: "Cutlery", count: 1 },
    { name: "Food Storage", count: 21 },
    { name: "Ovenware", count: 3 },
    { name: "Salt Box", count: 2 },
    { name: "Food Storage", count: 21 },
    { name: "Ovenware", count: 3 },
    { name: "Salt Box", count: 2 },
    { name: "Food Storage", count: 21 },
    { name: "Ovenware", count: 3 },
    { name: "Salt Box", count: 2 },
    { name: "Food Storage", count: 21 },
    { name: "Ovenware", count: 3 },
    { name: "Salt Box", count: 2 },
    { name: "Food Storage", count: 21 },
    { name: "Ovenware", count: 3 },
    { name: "Salt Box", count: 2 },
  ];

  const brands = [
    { name: "Anolon", count: 7 },
    { name: "Ayesha Curry", count: 47 },
    { name: "Circulon", count: 7 },
    { name: "Farberware", count: 1 },
    { name: "Farberware-Clearance", count: 3 },
    { name: "LocknLock", count: 24 },
    { name: "Rachael Ray", count: 4 },
    { name: "Rachael Ray", count: 4 },
    { name: "LocknLock", count: 24 },
  ];

  const materials = [
    { name: "Ceramics", count: 1 },
    { name: "Damascus", count: 1 },
    { name: "Enamel On Steel", count: 1 },
    { name: "Glass-Borosilicate", count: 1 },
    { name: "Hard Anodized Aluminum", count: 10 },
    { name: "Parawood", count: 5 },
    { name: "Parawood & Silicone", count: 2 },
    { name: "Damascus", count: 1 },
    { name: "Enamel On Steel", count: 1 },
    { name: "Glass-Borosilicate", count: 1 },
  ];

  useEffect(() => {
    capitalizeFirstLetter(id.toLowerCase());
    var lowercaseId = id.toLowerCase();
    var productsArray = Array.from(productList.products);
    var filteredProducts = productsArray.filter((element) =>
      element.categories.some((category) =>
        category.toLowerCase().includes(lowercaseId)
      )
    );

    setListProductBrand(filteredProducts);
    setProductsOnSale(filteredProducts);
  }, [id]);
  const brandArray = [];

  // filter by brand
  const handleBrandChange = (brand, checked) => {
    if (checked) {
      console.log(brand.name);
      brandArray.push(brand.name);
    } else {
      const index = brandArray.indexOf(brand.name);
      if (index > -1) {
        brandArray.splice(index, 1);
      }
    }
  };

  // console.log("day ne da ", brandArray);

  // Tính toán tổng số trang
  const pageCount = Math.ceil(productsOnSale.length / productsPerPage);

  // Lấy ra sản phẩm cho trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsOnSale.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Xử lý khi chuyển trang
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleCategory = () => {
    setOpenCategory(!openCategory);
  };

  const toggleBrand = () => {
    setOpenBrand(!openBrand);
  };

  const toggleMaterial = () => {
    setOpenMaterial(!openMaterial);
  };

  const handleToDetail = (item) => {
    console.log("da ", item);
  };
  return (
    <main>
      <div className="bg-white d-flex justify-content-center pb-4">
        <header className="fw-medium fs-3">{titlePage}</header>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-lg-3">
            {/* Category */}

            <div
              className="bg-white p-3"
              style={{ borderBottom: "1px solid #dee2e6" }}
            >
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h2 className="fs-5 fw-bold">Categories</h2>
                <button onClick={toggleCategory} className="btn p-0">
                  {openCategory ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              <div
                className={`${openCategory ? "" : "collapse"}`}
                id="categoryAccordion"
                style={{ maxHeight: "300px", overflowY: "auto" }}
              >
                {categories.map((category, index) => (
                  <div key={index} className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`category-${index}`}
                    />
                    <label
                      className="form-check-label d-flex justify-content-between align-items-center w-100"
                      htmlFor={`category-${index}`}
                    >
                      {category.name}
                      <span className="text-muted">({category.count})</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {keyfill == "brand" ? (
              <></>
            ) : (
              <div
                className="bg-white p-3"
                style={{ borderBottom: "1px solid #dee2e6" }}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h2 className="fs-5 fw-bold">Brand</h2>
                  <button onClick={toggleBrand} className="btn p-0">
                    {openBrand ? <FaMinus /> : <FaPlus />}
                  </button>
                </div>
                <div
                  className={`${openBrand ? "" : "collapse"}`}
                  style={{ maxHeight: "300px", overflowY: "auto" }}
                >
                  {brands.map((brand, index) => (
                    <div key={index} className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`brand-${index}`}
                        onChange={(e) =>
                          handleBrandChange(brand, e.target.checked)
                        }
                      />
                      <label
                        className="form-check-label d-flex justify-content-between align-items-center w-100"
                        htmlFor={`brand-${index}`}
                      >
                        {brand.name}
                        <span className="text-muted">({brand.count})</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/*Brand */}

            {/* Material */}
            <div
              className="bg-white p-3"
              style={{ borderBottom: "1px solid #dee2e6" }}
            >
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h2 className="fs-5 fw-bold">Material</h2>
                <button onClick={toggleMaterial} className="btn p-0">
                  {openMaterial ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              <div
                className={`${openMaterial ? "" : "collapse"}`}
                style={{ maxHeight: "300px", overflowY: "auto" }}
              >
                {materials.map((material, index) => (
                  <div key={index} className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`material-${index}`}
                    />
                    <label
                      className="form-check-label d-flex justify-content-between align-items-center w-100"
                      htmlFor={`material-${index}`}
                    >
                      {material.name}
                      <span className="text-muted">({material.count})</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products section */}
          <div className="col-md-8 col-lg-9">
            <div className="row">
              {currentProducts.length > 0 ? (
                currentProducts.map((product, index) => (
                  <Link
                    to={`/product/detail/${product.id}`}
                    key={index}
                    id="item-product"
                    className="col-md-6 col-lg-3 mb-4"
                  >
                    <div className="card h-100" style={{ border: "none" }}>
                      <div className="card-header bg-transparent border-0">
                        <span
                          className="badge  text-white"
                          style={{ backgroundColor: "#000" }}
                        >
                          {titlePage === "New arrivals" ? "New" : "On sale"}
                        </span>
                      </div>
                      <img
                        src={product.imageURL}
                        className="card-img-top img-fluid "
                        alt={product.name}
                        style={{ maxHeight: "400px", width: "80%" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title fz-18">{product.name}</h5>
                        <div className="card-footer bg-transparent border-0">
                          <div className="d-flex product-price justify-content-center">
                            <span
                              className={
                                product.comparePrice == "0.00"
                                  ? "price-col price-color fz fz-24" // Apply both classes if comparePrice exists
                                  : "price-col fz fz-24" // Apply only "price-col" if comparePrice doesn't exist
                              }
                            >
                              ${product.price}
                            </span>
                            {product.comparePrice == "0.00" ? (
                              " "
                            ) : (
                              <span className="text-muted price-col fz ml-4">
                                <s>${product.comparePrice}</s>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <center>
                  <h3>There are no products in this category</h3>
                </center>
              )}
            </div>
          </div>

          {/* Pagination*/}
          <Pagination className="justify-content-center my-pagination">
            <Pagination.First
              onClick={() => handlePageClick(1)}
              disabled={currentPage === 1}
            />
            <Pagination.Prev
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1}
            />

            <Pagination.Item
              onClick={() => handlePageClick(1)}
              active={currentPage === 1}
            >
              1
            </Pagination.Item>

            {currentPage > 3 && <Pagination.Ellipsis disabled />}

            {currentPage > 2 && (
              <Pagination.Item onClick={() => handlePageClick(currentPage - 1)}>
                {currentPage - 1}
              </Pagination.Item>
            )}

            {currentPage !== 1 && currentPage !== pageCount && (
              <Pagination.Item active>{currentPage}</Pagination.Item>
            )}

            {currentPage < pageCount - 1 && (
              <Pagination.Item onClick={() => handlePageClick(currentPage + 1)}>
                {currentPage + 1}
              </Pagination.Item>
            )}

            {currentPage < pageCount - 2 && <Pagination.Ellipsis disabled />}

            {pageCount > 1 && (
              <Pagination.Item
                onClick={() => handlePageClick(pageCount)}
                active={currentPage === pageCount}
              >
                {pageCount}
              </Pagination.Item>
            )}

            <Pagination.Next
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === pageCount}
            />
            <Pagination.Last
              onClick={() => handlePageClick(pageCount)}
              disabled={currentPage === pageCount}
            />
          </Pagination>
        </div>
      </div>
    </main>
  );
}
