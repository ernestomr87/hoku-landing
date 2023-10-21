import Link from "next/link";
import React from "react";

function Breadcrumb({ pageTitle, pageName }) {
  return (
    <div className="breadcrumb-section">
      <div className="breadcrumb-left-vec">
        <img
          src="assets/images/icon/breadcumb-left-vec.svg"
          alt="breadcumb-left-vec"
        />
      </div>
      <div className="breadcrumb-right-vec">
        <img
          src="assets/images/icon/breadcumb-right-vec.svg"
          alt="breadcumb-right-vec"
        />
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-12">
            <h2 className="breadcrumb-title">{pageTitle}</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb d-flex">
                <li className="breadcrumb-item">
                  <Link legacyBehavior href="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {pageName}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
