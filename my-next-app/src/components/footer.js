import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
    return (


        <footer>
            <div className="footer-content">
                <div className="social-media">
                    <h3>We Are Social</h3>
                    <div className="social-icons">
                        <a href="#">
                            <span className="icon">
                                <FontAwesomeIcon icon={faFacebook} className="fa-brands fa-facebook" />
                            </span>
                        </a>
                        <a href="#">
                            <span className="icon">
                                <FontAwesomeIcon icon={faXTwitter} className="fa-brands fa-x-twitter" />
                            </span>
                        </a>
                        <a href="#">
                            <span className="icon">
                                <FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram" />
                            </span>
                        </a>
                        <a href="#">
                            <span className="icon">
                                <FontAwesomeIcon icon={faYoutube} className="fa-brands fa-youtube" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <p style={{ paddingTop: 20 }}>
                © 2024 Imomotimi Foundation. All right Reserved.
            </p>
            <a href="#" id="scroll" title="Go to top">
                <FontAwesomeIcon icon={faArrowAltCircleUp} className="fa-solid fa-arrow-up" />
            </a>
        </footer>


    );
}
 export default Footer;