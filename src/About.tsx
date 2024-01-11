import Footer from "./Footer";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <>
      <div className="other__header">
        <h1
          ref={ref}
          className={inView ? "other__anim animation-pages" : "other__anim"}
        >
          About Us
        </h1>
      </div>
      <div
        className={
          inView
            ? "other__body other__anim animation-pages"
            : "other__body other__anim"
        }
      >
        <p>
          NanoCard is a website about a fictional platform to receive a card
          able to connect to various crypto wallets in order to use it's capital
          to purchase different products around the world. Easy to use and free
          for everyone, the website would send you to a page to create an
          account in order to start using the card, after account creation, the
          servers would send a ticket to start making the client's nanocard, and
          sending it to it's desired location.
        </p>
        <br />
        <p>
          Then after receiving the card, the client would register it via PIN or
          some other kind of acess code, to link the card to the account, now
          being able to monitor the crypto in sync with the nanocard and the
          desired wallets.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
