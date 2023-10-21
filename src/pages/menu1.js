import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";

import menu from "../menu";

function Menu1() {
  return (
    <Layout>
      <Breadcrumb pageName="Menu" pageTitle="Menu" />
      <div className="mt-120">
        {menu.map((item, index) => {
          return (
            <>
              <div className="pt-10">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 px-0 order-lg-1 order-2">
                      <div
                        style={{
                          minHeight: "798px",
                        }}
                        className="menu-wrapper1 two"
                      >
                        <img
                          className="menu-top-left"
                          src="assets/images/icon/menu-top-left.svg"
                          alt="menu-top-left"
                        />
                        <img
                          className="menu-top-right"
                          src="assets/images/icon/menu-top-right.svg"
                          alt="menu-top-right"
                        />
                        <img
                          className="menu-btm-right"
                          src="assets/images/icon/menu-btm-right.svg"
                          alt="menu-btm-right"
                        />
                        <img
                          className="menu-btm-left"
                          src="assets/images/icon/menu-btm-left.svg"
                          alt="menu-btm-left"
                        />
                        <div className="section-title text-center pt-60">
                          <span>
                            <img
                              className="left-vec"
                              src="assets/images/icon/sub-title-vec.svg"
                              alt="sub-title-vec"
                            />
                            {item.title}
                            <img
                              className="right-vec"
                              src="assets/images/icon/sub-title-vec.svg"
                              alt="sub-title-vec"
                            />
                          </span>
                        </div>
                        <div className="menu-list">
                          <ul>
                            {item.items.map((dish, index1) => {
                              return (
                                <li key={index1}>
                                  <div className="sl">
                                    <span>{`${index1}.`}</span>
                                  </div>
                                  <div className="menu-content">
                                    <div className="menu-title">
                                      <h4>{dish.name}</h4>
                                      <span className="dot">
                                        <img
                                          src="assets/images/icon/dot.svg"
                                          alt=""
                                        />
                                      </span>
                                      <span className="price">
                                        {dish.price}€
                                      </span>
                                    </div>
                                    <p>{dish.style}</p>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 px-0 order-lg-2 order-1">
                      <div className={`food-orgin ${item.title}`}>
                        <div className="resturent-name">
                          <h2>Hoku</h2>
                        </div>
                        <img
                          src="assets/images/icon/food-origin.svg"
                          alt="food-origin"
                        />
                        <h2>{item.title}</h2>
                        <img
                          src="assets/images/icon/food-origin.svg"
                          alt="food-origin"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="menu-divider">
                <img
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
                <span />
                <img
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
              </div>
            </>
          );
        })}
      </div>
    </Layout>
  );
}

export default Menu1;
