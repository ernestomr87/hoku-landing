import React from "react";

function BestOffer1() {
  return (
    <div className="best-offer-area1 mb-120">
      <div className="container">
        <div className="row d-flex justify-content-center mb-40">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <span>
                <img
                  className="left-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
                Best Offer
                <img
                  className="right-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
              </span>
              <h2>Choose Your Best Offer</h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 col-md-6">
            <div className="best-offer-wrap clearfix">
              <div className="best-offer-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/best-offer-img1.png"
                  alt="best-offer-img1"
                />
                <div className="price-tag">
                  <span>$55</span>
                </div>
              </div>
              <div className="best-offer-content">
                <h3>Buy One Get One Free</h3>
                <p>If you are going to use a passage of Lorem Ipsum need. </p>
                <a className="primary-btn3 btn-sm">Limited Offer</a>
                <ol className="features">
                  <li>Prawn with Noodls.</li>
                  <li>Special Drinks.</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="best-offer-wrap clearfix">
              <div className="best-offer-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/best-offer-img2.png"
                  alt="best-offer-img1"
                />
                <div className="price-tag">
                  <span>$55</span>
                </div>
              </div>
              <div className="best-offer-content">
                <h3>Buy One Get One Free</h3>
                <p>If you are going to use a passage of Lorem Ipsum need. </p>
                <a className="primary-btn3 btn-sm">Limited Offer</a>
                <ol className="features">
                  <li>Fried Chicken.</li>
                  <li>Watermelon Juice.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestOffer1;
