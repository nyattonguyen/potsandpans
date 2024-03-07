import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/Home/HomePage";
import AboutPage from "../views/About/AboutPage";
import ClearancePage from "../views/Collection/clearance";
import CategoryPage from "../views/Category/CategoryPage";
import BrandPage from "../views/Brand/BrandPage";
import Kitchenaid from "../views/Brand/Kitchenaid";
import Page404 from "../components/Page404";
import AyeshaCurry from "../views/Brand/AyeshaCurry";
import Detail from "../views/Product/Detail";
import CollectionFill from "../views/Collection/CollectionFill";
import SignIn from "../components/SignUp-SignIn/SignIn";
import SignUp from "../components/SignUp-SignIn/SignUp";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/collections/clearnace",
    element: <ClearancePage />,
  },
  {
    path: "/shop-by-category",
    element: <CategoryPage />,
  },
  {
    path: "/shop-by-brand",
    element: <BrandPage />,
  },
  {
    path: "/kitchenaid",
    element: <Kitchenaid />,
  },
  {
    path: "/ayesha-curry",
    element: <AyeshaCurry />,
  },
  {
    path: "/product/detail/:id",
    element: <Detail />,
  },
  {
    path: "/collections/:keyfill/:id",
    element: <CollectionFill />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);
