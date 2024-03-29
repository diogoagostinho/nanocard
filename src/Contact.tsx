import Footer from "./Footer";
import { useInView } from "react-intersection-observer";

function Contact() {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <>
      <div className="other__header">
        <h1
          ref={ref}
          className={inView ? "other__anim animation-pages" : "other__anim"}
        >
          Contact Us
        </h1>
      </div>
      <div
        className={
          inView
            ? "other__body other__anim animation-pages"
            : "other__body other__anim"
        }
      >
        <p>In this case, contact me, because I made the website alone 😁.</p>
        <br />
        <a href="https://github.com/diogoagostinho" target="_blank">
          <p className="other__link">GitHub</p>
        </a>
        <a href="https://twitter.com/agostinho_dev" target="_blank">
          <p className="other__link">Twitter</p>
        </a>
        <a
          href="https://www.linkedin.com/in/diogo-agostinho-b99a33224/"
          target="_blank"
        >
          <p className="other__link">LinkedIn</p>
        </a>
        <a href="https://dev.to/diogoagostinho" target="_blank">
          <p className="other__link">DEV.to</p>
        </a>
        <a href="https://hashnode.com/@diogoagostinho" target="_blank">
          <p className="other__link">Hashnode</p>
        </a>
        <a href="https://app.daily.dev/diogoagostinho" target="_blank">
          <p className="other__link">daily.dev</p>
        </a>
        <a href="https://dribbble.com/diogoagostinho" target="_blank">
          <p className="other__link">Dribbble</p>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
