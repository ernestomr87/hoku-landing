import Link from "next/link";
import React from "react";
import Image from "next/image";

import info from "../../info";

function Footer() {
  return (
    <footer>
      <div className="footer-top ">
        <div className="container">
          <div className="row justify-content-center align-items-center gy-5">
            <div className="col-lg-4 col-md-6  order-md-1 order-2">
              <div className="footer-widget one">
                <div className="widget-title">
                  <Link legacyBehavior href="/">
                    <h3
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      Inicio
                    </h3>
                  </Link>
                </div>
                <div className="menu-container">
                  <ul>
                    <li>
                      <Link legacyBehavior href="/menu1">
                        Sobre nosotros
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/reservation">
                        Menu
                      </Link>
                    </li>
                    {/* <li>
                      <Link legacyBehavior href="/menu1">
                        Reservación
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/category">
                        Contacto
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-md-2 order-1">
              <div className="footer-widgetfooter-widget social-area">
                <div className="footer-logo text-center">
                  <Link legacyBehavior href="/">
                    <img style={{
                      height: 100,
                    }} src="assets/images/icon/hoku-logo.png" alt="" />
                  </Link>
                  <p>Established . 2023</p>
                  <span>
                    <img src="assets/images/icon/footer-shape.svg" alt="" />
                  </span>
                </div>
                <div className="footer-social">
                  <ul className="social-link d-flex align-items-center justify-content-center">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-3">
              <div className="footer-widget one">
                <div className="widget-title">
                  <h3>Address Info</h3>
                </div>
                <div className="contact-info">
                  <div className="single-contact">
                    <span className="title">Phone:</span>
                    <span className="content">
                      <a href="tel:+8801776766767">{info.phone}</a>
                    </span>
                  </div>
                  <div className="single-contact">
                    <span className="title">Email:</span>
                    <span className="content">
                      <a href="mailto:info@example.com">{info.email}</a>
                    </span>
                  </div>

                  <div className="single-contact">
                    <span className="title">Location:</span>
                    <span className="content">
                      <a href="https://maps.app.goo.gl/cPo7ih47fEamfivh8">
                        C. de Bravo Murillo, 371,
                        <br />
                        28020 Madrid.
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-btm">
        <div className="container">
          <div className="row border-ttop g-2">
            <div className="col-md-8 justify-content-md-start justify-content-center">
              <div className="copyright-area">
                <p>
                  @Copyright by{" "}
                  <Link legacyBehavior href="#">
                    Hoku Code Team
                  </Link>
                  -2023, Todos los derechos reservados.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-md-end justify-content-center">
              <div className="privacy-policy">
                <p>
                  {/* <Link legacyBehavior href="#">
                    Privacy &amp; Policy
                  </Link>{" "}
                  | <a href="#">Terms and Conditions</a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
