import {
  Route,
  Router,
  RouterProvider,
  Routes,
  useParams,
} from "react-router-dom";
import "./App.css";
import { routes } from "./config/Routes.jsx";
import Header from "./components/Header/Header.jsx";
import React, { useEffect } from "react";
import Announcement from "./components/Announcemen/Announcement.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store.jsx";
import HomePage from "./views/Home/HomePage.jsx";
import AboutPage from "./views/About/AboutPage.jsx";
import ClearancePage from "./views/Collection/clearance.jsx";
import CategoryPage from "./views/Category/CategoryPage.jsx";
import BrandPage from "./views/Brand/BrandPage.jsx";
import Kitchenaid from "./views/Brand/Kitchenaid.jsx";
import AyeshaCurry from "./views/Brand/AyeshaCurry.jsx";
import Detail from "./views/Product/Detail.jsx";
import CollectionFill from "./views/Collection/CollectionFill.jsx";
import SignIn from "./components/SignUp-SignIn/SignIn.jsx";
import SignUp from "./components/SignUp-SignIn/SignUp.jsx";
import Recipes from "./components/Recipes/Recipes.jsx";
import Page404 from "./components/Page404.jsx";
import Comfirm from "./views/Cart/Comfirm.jsx";
import Checkout from "./components/PayMent/Checkout.jsx";

function App() {
  return (
    <React.Fragment>
      <Announcement />
      <Provider store={store}>
        <Header />

        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/collections/clearnace" element={<ClearancePage />} />
            <Route path="/shop-by-category" element={<CategoryPage />} />
            <Route path="/shop-by-brand" element={<BrandPage />} />
            <Route path="/kitchenaid" element={<Kitchenaid />} />
            <Route path="/ayesha-curry" element={<AyeshaCurry />} />
            <Route path="/product/detail/:id" element={<Detail />} />
            <Route
              path="/collections/:keyfill/:id"
              element={<CollectionFill />}
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/account/confirm" element={<Comfirm />} />
            <Route path="/account/paypal" element={<Checkout />} />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>

        <Footer />
      </Provider>
    </React.Fragment>
  );
}

export default App;
