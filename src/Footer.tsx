function Footer() {
  return (
    <>
      <div className="main__footer">
        <div className="home__footer-content margin-content">
          <div className="home__footer-cta">
            <h2>Create an account and enjoy your free card experience.</h2>
            <a href="https://github.com/diogoagostinho" target="_blank">
              <button className="button_color">START NOW</button>
            </a>
          </div>

          <hr />
          <div className="home__footer-info">
            <h3 className="navbar-title">
              Nano<span className="light-text">Card</span>
            </h3>
            <p>
              ©{" "}
              <a href="https://github.com/diogoagostinho" target="_blank">
                Diogo Agostinho
              </a>
              , All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
