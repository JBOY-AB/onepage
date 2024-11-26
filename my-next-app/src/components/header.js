import Image from "next/head";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import 'react-alice-carousel/lib/react-alice-carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faBars, faDownload, faPhoneVolume, faToggleOn } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <>
            <AliceCarousel autoPlay infinite autoPlayInterval="3000" disableButtonsControls className="owl-carousel">
                <div className="bg-bg1">
                    <img src="/1.jpg" alt="bgroung" width={1500} height={1000} />
                </div>
                <div className="bg-bg1">
                    <img src="/2.jpg" alt="bgroung" width={1500} height={1000} />
                </div>
                <div className="bg-bg1">
                    <img src="/3.jpg" alt="bgroung" width={1500} height={1000} />
                </div>
            </AliceCarousel>

            <header className="headingsticking">
                {/* first page */}
                <div className="alternate12">
                    <nav>
                        <img src="/logo.png" alt="logo" width={50} height={100} />
                        <ul>
                            <li>
                                <a href="#intro">Intro</a>
                            </li>
                            <li>
                                <a href="#countdown">Countdown</a>
                            </li>
                            <li>
                                <a href="#notes">Notes</a>
                            </li>
                            <li>
                                <a href="#location">Location</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                        <div className="toggleswitch">
                            < FontAwesomeIcon icon={faMoon} className="fa-solid fa-moon" />
                            <button className="toggle" onclick="toggleMode()">
                                <FontAwesomeIcon icon={faToggleOn} className="fa-solid fa-toggle-on toggleon" id="toggle" />
                            </button>
                            <FontAwesomeIcon  icon={faSun}  className="fa-solid fa-sun" />
                        </div>
                        <div id="menu">
                            <FontAwesomeIcon icon={faBars} className="fa-solid fa-bars" />
                        </div>
                        <button id="button" className="btn1">
                            <FontAwesomeIcon icon={faPhoneVolume} className="fa-solid fa-phone-volume call" />
                            Call us
                        </button>
                    </nav>
                    <section id="intro" className="section1">
                        <p>
                            <strong>
                                <i>IMOMOTIMI FOUNDATION PRESENTS</i>
                            </strong>
                        </p>
                        <h3>Imomotimi Ijaw</h3>
                        <h3>Dance Contest 2024</h3>
                        <button className="btn2">
                            Download Entry Form
                            <FontAwesomeIcon   icon={faDownload} className="fa-solid fa-download download" />
                        </button>
                        <p>
                            All duly filled out form the entry fees should be brought along to the
                            audition.
                        </p>
                        <div className="mouse-scroll">
                            <div className="mouse">
                                <div className="wheel" />
                            </div>
                            <div className="mouse-arrow">
                                <span />
                            </div>
                        </div>
                    </section>
                    <img
                        id="firstimg"
                        src="/shape-top-white-80.png"
                        alt=" topimage"
                        className="image-top"
                        width={50} height={50}
                    />
                </div>
            </header>
        </>



    );
}
export default Home;