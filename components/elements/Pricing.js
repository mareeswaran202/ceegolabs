"use client";
import { robotos } from "@/app/util/font";
import { useState } from "react";

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <section className="pricing-section pt-0">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2 className={robotos.className}>Our Capabilities</h2>
            <div className="text-decoration">
              <span className="left" />
              <span className="right" />
            </div>
          </div>
          <div className="text-center">
            <div className="pricing-btn">
              <ul className="nav nav-tabs tab-btn-style-one" role="tablist">
                <li className="nav-item" onClick={() => handleOnClick(1)}>
                  <a
                    className={
                      activeIndex == 1 ? "nav-link active" : "nav-link"
                    }
                  >
                    Manufacturing
                  </a>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(2)}>
                  <a
                    className={
                      activeIndex == 2 ? "nav-link active" : "nav-link"
                    }
                  >
                    Capacity
                  </a>
                </li>
                {/* <li className="nav-item" onClick={() => handleOnClick(3)}>
                  <a
                    className={
                      activeIndex == 3 ? "nav-link active" : "nav-link"
                    }
                  >
                    Packaging
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="pricing-content">
            {/* Tab panes */}
            <div
              className="tab-content wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1200ms"
            >
              <div
                className={
                  activeIndex == 1
                    ? "tab-pane fadeInUp animated show active"
                    : "tab-pane fadeInUp animated"
                }
              >
                {/* <h3>Switch to Manufacturing plan and get 25% offer.</h3> */}
                <div className="wrapper-box">
                  <div className="row m-0">
                    <div
                      className="col-lg-3 pricing-block animated fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                    >
                      <div className="inner-box">
                        <div className="top-content">
                          <div className="row m-0 justify-content-between">
                            <div className={`${robotos.className} category`}>Tablets</div>
                            {/* <div className="price"><span>$</span>24.00 <sub>/mo</sub></div>  */}
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul>
                            <li>
                              <i className="flaticon-tick" />
                              Bilayer
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Film coated
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Sustained release Tablets
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Enteric coated
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Effervescent Tablets
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Chewable Tablets
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Mouth dissolving Tablets
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Uncoated Tablets
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Compressed Tablets
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 pricing-block active animated fadeInLeft"
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                    >
                      <div className="inner-box">
                        <div className="top-content">
                          <div className="row m-0 justify-content-between">
                            <div className={`${robotos.className} category`}>Capsules</div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul>
                            <li>
                              <i className="flaticon-tick" />
                              Veg Capsules (HPMC)
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Hard Gelatin Capsules
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Tablet in Capsules
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 pricing-block animated fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                    >
                      <div className="inner-box">
                        <div className="top-content">
                          <div className="row m-0 justify-content-between">
                            <div className={`${robotos.className} category`}>Powders</div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul>
                            <li>
                              <i className="flaticon-tick" />
                              Sports nutrition
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              FSMP
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Diabetic, Gynaec Powders
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Lactation Powders
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Cardio, Neuro Powders
                            </li>
                            <li>
                              <i className="flaticon-tick" /> Pediatric Powders
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Geriatric powders
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Granules
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Mouth Dissolving powder
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 pricing-block animated fadeInUp"
                      style={{ borderRight: "none" }}
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                    >
                      <div className="inner-box">
                        <div className="top-content">
                          <div className="row m-0 justify-content-between">
                            <div className={`${robotos.className} category`}>Liquid</div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul>
                            <li>
                              <i className="flaticon-tick" />
                              Sugar based syrups
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Sorbitol based syrups.
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Shots
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Gel
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Oral Solutions
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Herbal formulations
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Suspensions
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Elixirs
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  activeIndex == 2
                    ? "tab-pane fadeInUp animated show active"
                    : "tab-pane fadeInUp animated"
                }
              >
                <div className="wrapper-box">
                  <div className="row m-0">
                    <div
                      className="col pricing-block animated fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                    >
                      <div className="inner-box">
                        <div className="top-content">
                          <div className="row m-0 justify-content-between">
                            <div className={`${robotos.className} category`}>Annual Capacity</div>
                          </div>
                        </div>
                        <div className="lower-content lowercontent2">
                          <section className="heighlight-section pt-5">
                            <div>
                              <div className="row pb-3">
                                <div className="col">
                                  <p className="capacitypara"><i class="far fa-dot-circle"></i>The installed capacity is more than 10 KL
                                      per shift for liquid orals with dedicated
                                      stainless steel tanks for manufacturing
                                      and filling, 750 kg of granules for
                                      Tablets per shift, and 2000 kg of powder
                                      per shift.</p>
                                      
                                     
                                   
                                </div>
                              </div>
                              <div className="row mt-5">
                                <div className="col-lg-3 heighlight-block">
                                  <div className="inner-box">
                                    <div className="icon">
                                      <img
                                        src="/assets/images/resource/capacity-tablets.png"
                                        alt=""
                                      />
                                    </div>
                                    <h4>Tablets</h4>

                                    <div className="link-btn theme-btn btn-style-cap">
                                      <span className="btn-titles">
                                        50 Crores
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 heighlight-block">
                                  <div className="inner-box">
                                    <div className="icon">
                                      <img
                                        src="/assets/images/resource/capacity-capsules.png"
                                        alt=""
                                      />
                                    </div>
                                    <h4>Capsules</h4>
                                    <div className="link-btn theme-btn btn-style-cap">
                                      <span className="btn-titles">
                                        20 Crores
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 heighlight-block">
                                  <div className="inner-box">
                                    <div className="icon">
                                      <img
                                        src="/assets/images/resource/capacity-liquids.png"
                                        alt=""
                                      />
                                    </div>
                                    <h4>Liquids</h4>
                                    <div className="link-btn theme-btn btn-style-cap">
                                      <span className="btn-titles">
                                        5 Crores
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 heighlight-block">
                                  <div className="inner-box">
                                    <div className="icon">
                                      <img
                                        src="/assets/images/resource/capacity-powder.png"
                                        alt=""
                                      />
                                    </div>
                                    <h4>Powders</h4>
                                    <div className="link-btn theme-btn btn-style-cap">
                                      <span className="btn-titles">
                                        1000 Tons
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div
                className={
                  activeIndex == 3
                    ? "tab-pane fadeInUp animated show active"
                    : "tab-pane fadeInUp animated"
                }
              >
                
                <div className="wrapper-box">
                  <div className="row m-0">
                    <div
                      className="col-lg-4 pricing-block animated fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                    >
                      <div className="inner-box">
                        <div className="top-content">
                          <div className="row m-0 justify-content-between">
                            <div className="category">Tablet & Capsule</div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul>
                            <li>
                              <i className="flaticon-tick" />
                              Alu alu blistersh
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Blisters
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Strip Packing
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              HDPE Jars
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              HDPE Bottles
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Pet Bottles
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Glass Bottles
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 pricing-block active animated fadeInRight"
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                    >
                      <div className="inner-box">
                        <div className="top-content">
                          <div className="row m-0 justify-content-between">
                            <div className="category">Powders</div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <h4 className="mt-3" style={{ textAlign: "left" }}>
                            In our Automated Powder manufacturing section, we
                            have different packaging lines
                          </h4>
                          <ul>
                            <li>
                              <i className="flaticon-tick" />
                              In printed pouches ( 50 to 500 gm )
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Stand-up Pouch, In Carton{" "}
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Sachet ( 3 to 30 gm ){" "}
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              TIN Containers{" "}
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Zip pouches{" "}
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Gel in Sachet{" "}
                            </li>
                            <li
                              style={{
                                lineHeight: "32px",
                                marginTop: "18px",
                                marginBottom: "18px",
                                display: "flex",
                              }}
                            >
                              <i className="flaticon-tick d-flex" />
                              In HDPE or PET with shrink sleeves or Sticker
                              label as direct filling or in pouches{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 pricing-block animated fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                    >
                      <div className="inner-box">
                        <div className="top-content">
                          <div className="row m-0 justify-content-between">
                            <div className="category">Liquids</div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul>
                            <li>
                              <i className="flaticon-tick" />
                              Glass bottles
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              HDP bottles (30ml-500ml)
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Pet bottles (30ml-500ml)
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Gel in sachet
                            </li>
                            <li>
                              <i className="flaticon-tick" />
                              Shots
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
