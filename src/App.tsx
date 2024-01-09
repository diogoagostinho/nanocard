import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import "./index.css";

function App() {
  return (
    <>
      <div className="content">
        <div className="navbar">
          <div className="navbar__left">
            <Link to="/">
              <h3 className="navbar-title">
                Nano<span className="light-text">Card</span>
              </h3>
            </Link>
          </div>
          <div className="navbar__right">
            <Link to="/">
              <p className="navbar-text">HOME</p>
            </Link>
            <Link to="/about">
              <p className="navbar-text">ABOUT</p>
            </Link>
            <Link to="/contact">
              <p className="navbar-text">CONTACT</p>
            </Link>
          </div>
        </div>
        <hr />

        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
