import Belt from "./Belt";
import { useInView } from "react-intersection-observer";

function Home() {
  const [ref, inViewOnce] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [refInfo, inViewOnceInfo] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [refCardImage, inViewOnceCardImage] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [refInformation, inViewOnceInformation] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [refMultichain, inViewOnceMultichain] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [refWallets, inViewOnceWallets] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [refBelt1, inViewOnceBelt1] = useInView({
    threshold: 0,
  });
  const [refBelt2, inViewOnceBelt2] = useInView({
    threshold: 0,
  });
  const [refCta, inViewOnceCta] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [refFeatures, inViewOnceFeatures] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [refCtaLeftCard, inViewOnceCtaLeftCard] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <>
      <div className="root__content">
        <div className="header ">
          <div className="header__content margin-content">
            <div className="header__left">
              <h1
                ref={ref}
                className={
                  inViewOnce
                    ? "animation-opacity animation-pages"
                    : "animation-opacity"
                }
              >
                Spend your crypto right from your personal wallet
              </h1>
              <p
                ref={ref}
                className={
                  inViewOnce
                    ? "animation-opacity animation-pages"
                    : "animation-opacity"
                }
              >
                Card designed for all your needs to help you manage your
                spendings and reinvest money.
              </p>
              <a href="https://github.com/diogoagostinho" target="_blank">
                <button
                  ref={ref}
                  className={
                    inViewOnce
                      ? "button_black animation-button animation-pages"
                      : "button_black animation-button"
                  }
                >
                  START NOW
                </button>
              </a>
            </div>
            <div
              ref={refCardImage}
              className={
                inViewOnceCardImage
                  ? "header__right animation-card-image"
                  : "header__right"
              }
            >
              <img src="../public/card4.png" />
            </div>
          </div>
          <p
            ref={refInfo}
            className={
              inViewOnceInfo
                ? "header__info margin-content animation-pages"
                : "header__info margin-content"
            }
          >
            We are in private alpha and accepting new users on a rolling basis.
          </p>
        </div>
        <img src="../public/blur1.jpg" className="background__1" />
        <div
          ref={refInformation}
          className={
            inViewOnceInformation
              ? "information section animation-pages"
              : "information section"
          }
        >
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
                Both Mastercard and Visa cards are supported to give you what
                you need.
              </p>
            </div>
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
        <div
          ref={refMultichain}
          className={
            inViewOnceMultichain
              ? "multichain section animation-pages"
              : "multichain section"
          }
        >
          <h2 className="margin-content">Multichain of Madness</h2>
          <p className="multichain__description margin-content">
            All networks at the palm of your hand , right there within single
            ecosystem.
          </p>
          <div className="multichain__belt">
            <div
              ref={refBelt1}
              className={
                inViewOnceBelt1
                  ? "upper_belt animation-belt-left"
                  : "upper_belt"
              }
            >
              <Belt coinName="SOLANA" />
              <Belt coinName="USD" />
              <Belt coinName="DAI" />
              <Belt coinName="SOLANA" />
              <Belt coinName="USD" />
              <Belt coinName="DAI" />
            </div>
            <div
              ref={refBelt2}
              className={
                inViewOnceBelt2
                  ? "lower_belt animation-belt-right"
                  : "lower_belt"
              }
            >
              <Belt coinName="DAI" />
              <Belt coinName="ETHEREUM" />
              <Belt coinName="SOLANA" />
              <Belt coinName="DAI" />
              <Belt coinName="ETHEREUM" />
              <Belt coinName="SOLANA" />
            </div>
          </div>
        </div>
        <hr />
        <div
          ref={refWallets}
          className={
            inViewOnceWallets
              ? "wallet section animation-pages"
              : "wallet section"
          }
        >
          <div className="wallet__left">
            <div className="wallet__left-content">
              <div className="wallet-item w1">
                <img src="../public/metamask.png" />
              </div>
              <div className="wallet-item w2">
                <img src="../public/trustwallet.png" />
              </div>
              <div className="wallet-item w3">
                <img src="../public/gnosis.png" />
              </div>
              <div className="wallet-item w4">
                <img src="../public/rainbow.png" />
              </div>
              <div className="wallet-item w5">
                <img src="../public/ghost.png" />
              </div>
              <div className="wallet-item w6">
                <img src="../public/authereum.svg" />
              </div>
            </div>
          </div>
          <div className="wallet__right">
            <div className="wallet__right-content">
              <h2>Supported Wallets</h2>
              <p>
                Explore growing list of supported wallets. <br /> More coming
                soon.
              </p>
            </div>
          </div>
        </div>
        <div className="cta">
          <div
            ref={refCtaLeftCard}
            className={
              inViewOnceCtaLeftCard
                ? "cta__left-image animation-card-cta"
                : "cta__left-image"
            }
          >
            <img src="../public/card5.png" />
          </div>
          <div
            ref={refCta}
            className={
              inViewOnceCta
                ? "cta__background animation-cta"
                : "cta__background"
            }
          >
            <div className="cta__content">
              <h2>Sign up and enjoy most versatile wallet in crypto space.</h2>
              <a href="https://github.com/diogoagostinho" target="_blank">
                <button className="button_black">START NOW</button>
              </a>
            </div>
          </div>
          <div className="cta__right-image">
            <img src="../public/card2.png" />
          </div>
        </div>
        <div
          ref={refFeatures}
          className={
            inViewOnceFeatures
              ? "features section animation-features"
              : "features section"
          }
        >
          <h2 className="margin-content">Loaded with features.</h2>
          <h2 className="margin-content">Free, forever.</h2>
          <div className="grid__section margin-content">
            <div className="feature__grid">
              <div className="feature block1">
                <img src="../public/eye.svg" />
                <h2>Monitor your money</h2>
                <p>
                  Track your spending on our dashboard to see where your money
                  is going
                </p>
              </div>
              <div className="feature block2">
                <img src="../public/gas.svg" />
                <h2>Free of all fees</h2>
                <p>
                  Never worry about high cost of transactions. We got it
                  covered.
                </p>
              </div>
            </div>
            <div className="feature block3">
              <div className="feature__block-left">
                <img src="../public/key.svg" />
                <h2>Secured.</h2>
                <h2>By you.</h2>
              </div>
              <div className="feature__block-right">
                <img src="../public/card1.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="home__footer">
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
      </div>
    </>
  );
}

export default Home;
