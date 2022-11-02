import "./Footer.css";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Map from "./Map";
import FooterBottom from "./FooterBottom";
const Footer = () => {
  return (
    <>
    <footer>
      <div className="links">
        <h3>Quicks Links</h3>
        <ul>
          <li>Date</li>
          <li>Cardamom</li>
          <li>Mango</li>
          <li>Coffee</li>
          <li>Berry</li>
          <li>Melon</li>
        </ul>
      </div>
      <div className="medias">
        <h3>Get Connected</h3>
        <p>
          Please let us know if you have any queries or concerns. We are always
          ready at your service.
        </p>
        <br />
        <div className="contact_links">
          <a href="" target="_blank">
            {" "}
            <FaFacebookF
              size={35}
              style={{
                verticalAlign: "middle",
                border: "1px solid white",
                borderRadius: "50%",
                padding: "5px",
                color: "var(--color-primary)"
              }}
              className="spin-animation"
            />{" "}
          </a>
          <a href="#" style={{ pointerEvents: "none" }}>
            {" "}
            <FaTwitter
              size={35}
              style={{
                verticalAlign: "middle",
                border: "1px solid white",
                borderRadius: "50%",
                padding: "5px",
                color: "var(--color-primary)"
              }}
              className="spin-animation"
            />{" "}
          </a>
          <a href="https://www.uttammishra.com/" target="_blank">
            {" "}
            <FaInstagram
              size={35}
              style={{
                verticalAlign: "middle",
                border: "1px solid white",
                borderRadius: "50%",
                padding: "5px",
                color: "var(--color-primary)"
              }}
              className="spin-animation"
            />{" "}
          </a>
          <a href="https://www.linkedin.com/in/uttam-mishra/" target="_blank">
            {" "}
            <FaLinkedinIn
              size={35}
              style={{
                verticalAlign: "middle",
                border: "1px solid white",
                borderRadius: "50%",
                padding: "5px",
                color: "var(--color-primary)"
              }}
              className="spin-animation"
            />{" "}
          </a>
        </div>
      </div>
      <div className="map">
        <h3>Visit Us</h3>
        <Map />
        <br />
      </div>
      
    </footer>

    <FooterBottom />
    </>
  );
};

export default Footer;
