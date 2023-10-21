import React from "react";

import info from "../../info";
import Link from "next/link";

function Topbar() {
  return (
    <div className="top-bar">
      <div className="container-lg container-fluid ">
        <div className="row">
          <div className="col-lg-5 col-md-5 d-flex align-items-center justify-content-md-start justify-content-center">
            <div className="open-time">
              <p>
                <span>Horario:</span> {info.openingHours}
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 d-flex justify-content-end">
            <div className="contact-info">
              <ul>
                <li>
                  <a href="mailto:info@example.com">
                    <i className="bi bi-envelope" /> {info.email}
                  </a>
                </li>
                <li>
                  <a>
                    <i className="bi bi-geo-alt" />
                    <Link
                      target="_blank"
                      href="https://maps.app.goo.gl/cPo7ih47fEamfivh8"
                    >
                      {info.address}
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
