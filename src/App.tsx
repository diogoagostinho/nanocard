import { Routes, Route, Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import "./index.css";
import "./animations.css";

function App() {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <>
      <div className="content">
        <div
          ref={ref}
          className={inView ? "navbar animation-navbar" : "navbar"}
        >
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
