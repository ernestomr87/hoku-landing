import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);
function Banner1() {
  const bannerSlider = {
    slidesPerView: 1,
    speed: 1000 * 64,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: ".next-btn-1",
      prevEl: ".prev-btn-1",
    },
    pagination: false,
  };
  return (
    <div className="banner-section1">
      <div className="banner-vector">
        <img
                  
          className="vector-top"
          src="assets/images/icon/shape2.svg"
          alt=""
        />
        <img
                  
          className="vector-btm"
          src="assets/images/icon/shape1.svg"
          alt=""
        />
      </div>
      <Swiper {...bannerSlider} className="swiper banner1-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="banner-wrapper d-flex align-items-center justify-content-between">
              <div className="social-area">
                <ul className="m-0 p-0 d-flex align-items-center">
                  <li>
                    <a href="https://www.facebook.com/">Facebook</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.skype.com/">Skype</a>
                  </li>
                </ul>
              </div>
              <div className="banner-left-img">
                <img src="assets/images/icon/union-left.svg" alt="union-left" />
                <div className="food-img">
                  <img
                    height={370}
                    width={370}
                    className="img-fluid"
                    src="assets/images/bg/hokuF1.png"
                    alt="banner-img-1"
                  />
                </div>
              </div>
              <div className="banner-content">
                <span>
                  <img
                    className="left-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                  Bienvenido a Hoku{" "}
                  <img
                    className="right-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                </span>
                <h1>¡Sabor global, alegría local!</h1>
                <p className="px-5">
                  Descubre la fusión de sabores internacionales en nuestro
                  restaurante, donde la alegría local se mezcla con platos del
                  mundo entero. Te esperamos para una experiencia culinaria
                  única. ¡Sabor global, alegría local!
                </p>
                <Link legacyBehavior href="/menu1">
                  <a className="primary-btn2">
                    <i className="bi bi-arrow-up-right-circle" />
                    Menu
                  </a>
                </Link>
              </div>
              <div className="banner-right-img">
                <img
                  src="assets/images/icon/union-right.svg"
                  alt="union-right"
                />
                <div className="food-img">
                  <img
                    height={370}
                    width={370}
                    className="img-fluid"
                    src="assets/images/bg/hokuF2.png"
                    alt="banner-img-2"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className="swiper-btn d-flex justify-content-between align-items-center">
          <div style={{ cursor: "pointer" }} className="prev-btn-1">
            <i className="bi bi-chevron-left" />
          </div>
          <div style={{ cursor: "pointer" }} className="next-btn-1">
            <i className="bi bi-chevron-right" />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Banner1;
