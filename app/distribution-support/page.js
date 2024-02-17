import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Distribution Support"
        wrapperCls="home_2"
      >
        <div>
          <section className="services-details">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-8 content-side">
                  
                  <div className="row mb-5">
                    <div className="col-md-12">
                      <div className="text">
                        <p>
                          As one of our service private label manufacturer, we
                          have a strict focus on quality in our manufacturing
                          operation. We only use state-of- the-art production
                          technologies – and many of our progressive formulas
                          are proven successful in many markets.All our products
                          comply with, and exceed, the strictest regulatory
                          standards
                        </p>
                      </div>

                     
                    </div>
                  </div>
                 
                </div>
                
              </div>
            </div>
          </section>
          <section className="testimonial-section-six">
                    <div className="auto-container">
                        <div className="sec-title style-four text-center">
                            <h2>Our Exporting Countries</h2>
                            <span className="text-decoration-three" />
                        </div>
                        <div className="wrapper-box">
                            <div className="pointer-block d-none">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/client-22.png" alt="" /></div>
                                    <div className="text">“I love Envolve; everyone has been great to work with and you’re all great partner for company, we thank you.”</div>
                                    <h4>Boris Elbert, <span>Managing Director</span></h4>
                                </div>
                                <div className="point"><span /></div>
                            </div>
                            <div className="pointer-block">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/canada.png" alt="" /></div>
                                    <div className="text">Canada</div>
                                    {/* <h4>Boris Elbert, <span>Managing Director</span></h4> */}
                                </div>
                                <div className="point" />
                            </div>
                            <div className="pointer-block d-none">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/client-22.png" alt="" /></div>
                                    <div className="text">“I love Envolve; everyone has been great to work with and you’re all great partner for company, we thank you.”</div>
                                    <h4>Boris Elbert, <span>Managing Director</span></h4>
                                </div>
                                <div className="point" />
                            </div>
                            <div className="pointer-block d-none">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/client-22.png" alt="" /></div>
                                    <div className="text">“I love Envolve; everyone has been great to work with and you’re all great partner for company, we thank you.”</div>
                                    <h4>Boris Elbert, <span>Managing Director</span></h4>
                                </div>
                                <div className="point" />
                            </div>
                            <div className="pointer-block d-none">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/client-22.png" alt="" /></div>
                                    <div className="text">“I love Envolve; everyone has been great to work with and you’re all great partner for company, we thank you.”</div>
                                    <h4>Boris Elbert, <span>Managing Director</span></h4>
                                </div>
                                <div className="point" />
                            </div>
                            <div className="pointer-block">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/qatar.png" alt="" /></div>
                                    <div className="text">Qatar</div>
                                     
                                </div>
                                <div className="point" />
                            </div>
                            <div className="pointer-block">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/india.png" alt="" /></div>
                                    <div className="text">India</div>
                                     
                                </div>
                                <div className="point" />
                            </div>
                            <div className="pointer-block">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/singapore.png" alt="" /></div>
                                    <div className="text">Singapore</div>
                                    {/* <h4>Boris Elbert, <span>Managing Director</span></h4> */}
                                </div>
                                <div className="point" />
                            </div>
                            <div className="pointer-block d-none">
                                <div className="content">
                                    <div className="logo"><img src="/assets/images/resource/client-22.png" alt="" /></div>
                                    <div className="text">“I love Envolve; everyone has been great to work with and you’re all great partner for company, we thank you.”</div>
                                    <h4>Boris Elbert, <span>Managing Director</span></h4>
                                </div>
                                <div className="point" />
                            </div>
                            <img src="/assets/images/resource/world-map-2.jpg" alt="" />
                        </div>
                    </div>
                </section>
        </div>
      </Layout>
    </>
  );
}
