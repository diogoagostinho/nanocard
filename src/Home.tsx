import Belt from "./Belt";

function Home() {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <h1>Spend your crypto right from your personal wallet</h1>
          <p>
            Card designed for all your needs to help you manage your spendings
            and reinvest money.
          </p>
          <button className="button_black">START NOW</button>
        </div>
        <div className="header__right">
          <img src="../public/card4.png" />
        </div>
        <span className="header__info">
          We are in private alpha and accepting new users on a rolling basis.
        </span>
      </div>
      <div className="information section">
        <h2>Simple, Fast & Secure</h2>
        <div className="information__blocks">
          <div className="block">
            <img src="../public/secure.png" />
            <h2>Secure & Decentralized</h2>
            <p>
              Experience full spectrum of blockchain features with our
              non-custodial wallet.
            </p>
          </div>
          <div className="block">
            <img src="../public/card3.png" />
            <h2>We got you covered</h2>
            <p>
              Both Mastercard and Visa cards are supported to give you what you
              need.
            </p>
          </div>
          <div className="block">
            <img src="../public/balance.png" />
            <h2>Optimize your cashflow</h2>
            <p>
              Use our wallet to pay your bills, split bills, transfer and more.
              All from one place.
            </p>
          </div>
        </div>
        <hr />
      </div>
      <div className="multichain section">
        <h2>Multichain of Madness</h2>
        <p>
          All networks at the palm of your hand , right there within single
          ecosystem.
        </p>
        <div className="multichain__belt">
          <div className="upper_belt">
            <Belt coinName="SOLANA" />
            <Belt coinName="USD" />
          </div>
          <div className="lower_belt">
            <Belt coinName="DAI" />
            <Belt coinName="ETHEREUM" />
          </div>
        </div>
      </div>
      <hr />
      <div className="wallet section">
        <div className="wallet__left"></div>
        <div className="wallet__right">
          <h2>Supported Wallets</h2>
          <p>Explore growing list of supported wallets. More coming soon.</p>
        </div>
      </div>
      <div className="cta section">
        <h2>Sign up and enjoy most versatile wallet in crypto space.</h2>
        <button className="button_black">START NOW</button>
      </div>
    </>
  );
}

export default Home;
