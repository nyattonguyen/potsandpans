import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./config/Routes.jsx";
import Header from "./components/Header/Header.jsx";
import React from "react";
import Announcement from "./components/Announcemen/Announcement.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store.jsx";

function App() {
  return (
    <React.Fragment>
      <Announcement />
      <Provider store={store}>
        <Header />
        <div className="content-container">
          <RouterProvider router={routes} />
        </div>
        <Footer />
      </Provider>
    </React.Fragment>
  );
}

export default App;
