import Layout from "@/components/layout/Layout";
import Award from "@/components/slider/Award";
import AboutBanner from "@/components/sections/home2/Aboutbanner";
import "@/public/assets/css/custom.css";



export const metadata = {
  title:'About Ceegolabs'
}



export default function Home() {
  
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
       
        wrapperCls="home_2"
      >
        
        <div>
          <section className="about-section-six pt-0">
          <AboutBanner headertxtone='Our Vision' subheadertxtone='Innovation - Forward thinking, confidence-conviction, Respect-Embracing difference,Solidarity-Social responsibility, Integrity-Acting ethically'/>
            <div className="auto-container mt-5">
              <div className="row">
                <div className="col-lg-6 content-column">
                  <div className="sec-title">
                    <h2>About Us</h2>
                     
                    <div className="text-decoration">
                      <span className="left" />
                      <span className="right" />
                    </div>
                    <div className="text">
                    <span className="ceegotxtpara">Ceego Labs</span> provides state-of-the-art manufacturing facilities for Food Supplements, Pharmaceutical and Feed Supplement Formulations. We have good manufacturing practices and superior-quality products as a cardinal principle. Quality is paramount at <span className="ceegotxtpara">Ceego Labs</span>. Our quality check processes and procedures span every area of manufacturing, from raw materials to finished products. Our combination of highly experienced, well-qualified professionals and the latest technology allows us to be a pioneer in Pharmaceutical and Nutraceuticals manufacturing. We are dedicated to delivering the highest possible levels of customer satisfaction.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="experience-years-block">
                    <div className="image">
                      <img src="/assets/images/resource/image-46.jpg" alt="" />
                      <h2>12</h2>
                    </div>
                    <div className="text">
                      Years <br /> experience
                    </div>
                  </div>
                </div>
              </div>

              <div className="row sec-title mb-3">
                <div className="col-lg-12 content-column">
                  <div className="text">
                    <ul className="aboutlist">
                      <li>
                        Since 2012, <span className="ceegotxtpara">Ceego Labs</span> Pvt. Ltd. has been involved in P2P manufacturing and exports of Nutraceuticals, Pharmaceuticals and Feed Supplement Formulations.
                      </li>
                      {/* <li>
                      <span className="ceegotxtpara">Ceego Labs</span> has a strong presence in both the domestic and global markets. 
                      </li> */}
                      <li>
                        Our manufacturing unit is located in an eco-friendly area 45km from Chennai, India, with a built-up area of 48,000 sq. ft. on 3 acres of land. It is designed as per the latest GMP, GLP, and ISO 22000:2018. specifications  
                      </li>
                      <li>We have good manufacturing practices and superior-quality products as a cardinal principle. Quality is paramount at <span className="ceegotxtpara">Ceego Labs</span></li>
                     
                    </ul>
                  </div>
                </div>
              </div>
              
             <div className="auto-container2">
             <div className="row">
                <div className="col-lg-12 content-column">
                <div className="sec-title">
                <div className="text mt-0 text-center">
                  With our driven commitment to innovation, service, and quality, we strive to be at the forefront of manufacturing with state-of-the-art facilities and the latest technology and research-backed formulations.
                  </div>
                </div>
                </div>
              </div>
             </div>

              <div className="row">
                <div className="col-lg-12 mt-5">
                  <div className="sec-title text-center">
                    <h2>
                      Reason for choosing  <br /> <span className="ceegotxtbighead">Ceego Labs</span>
                    </h2>
                    <div className="text-decoration">
                      <span className="left" />
                      <span className="right" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="whay-choose-block">
                    <div className="inner-box">
                      <div className="icon">
                        <span className="flaticon-bot" />
                      </div>
                      <h4>Our Team Strength</h4>
                      <div className="text">
                        <span className="ceegotxtpara">Ceego Labs</span> has well Experienced, Qualified and Competent
                        Technical Personnel in various departments.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="whay-choose-block">
                    <div className="inner-box">
                      <div className="icon">
                        <span className="flaticon-diamond" />
                      </div> 
                      <h4>Our Core Value</h4>
                      <div className="text">
                        At <span className="ceegotxtpara">Ceego Labs</span>, we share a strong set of values that
                        shapes our business focus, objectives, and our
                        integrity. Our involvement, practices and initiatives
                        reflect in – a healthy commitment to provide world class
                        products and formulations of high efficacy
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="whay-choose-block">
                    <div className="inner-box">
                      <div className="icon">
                        <span className="flaticon-bot" />
                      </div>
                      <h4>Customer Satisfaction</h4>
                      <div className="text">
                      <span className="ceegotxtpara">Ceego Labs</span> main goal has been to solicit and promote
                        ideas from its teams in order to ensure customer
                        satisfaction by providing the best final product
                        end-to-end.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="whay-choose-block">
                    <div className="inner-box">
                      <div className="icon">
                        <span className="flaticon-diamond" />
                      </div>
                      <h4>Latest Technologies</h4>
                      <div className="text">
                        Installed with the advanced machinery and technology our
                        formulation meets international manufacturing standards.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="whay-choose-block">
                    <div className="inner-box">
                      <div className="icon">
                        <span className="flaticon-bot" />
                      </div>
                      <h4>Uncompromised Quality</h4>
                      <div className="text">
                        Our passion for excellence ensures the highest quality
                        of product.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="whay-choose-block">
                    <div className="inner-box">
                      <div className="icon">
                        <span className="flaticon-bot" />
                      </div>
                      <h4>Competitive Price</h4>
                      <div className="text">
                      <span className="text">Ceego Labs</span> is the company that is committed to good
                        health for all by providing quality medicines at
                        affordable prices.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section five */}

          {/* Award Section */}
          <Award/>
          <section
            className="award-section style-two d-none"
            style={{
              backgroundImage: "url(assets/images/background/bg-21.jpg)",
            }}
          >
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="sec-title light">
                    <h2>Our awards and achivements</h2>
                    <div className="text-decoration">
                      <span className="left" />
                      <span className="right" />
                    </div>
                  </div>
                  <div className="wrapper-box">
                    <div className="row">
                      <div className="col-lg-4 award-block d-flex justify-content-center">
                        <div className="inner-box">
                          <div className="image award-image-con">
                            <img
                              src="/assets/images/resource/iso2018.png"
                              alt=""
                            />
                          </div>
                          <h4>
                            Food Safety <br /> Management System
                          </h4>
                        </div>
                      </div>
                      <div className="col-lg-4 award-block d-flex justify-content-center">
                        <div className="inner-box">
                          <div className="image award-image-con">
                            <img
                              className="gmp"
                              src="/assets/images/resource/award-9.png"
                              alt=""
                            />
                          </div>
                          <h4>
                            Good Manufacturing <br /> Practice
                          </h4>
                        </div>
                      </div>
                      <div className="col-lg-4 award-block d-flex justify-content-center">
                        <div className="inner-box">
                          <div className="image award-image-con">
                            <img
                              src="/assets/images/resource/award-10.png"
                              alt=""
                            />
                          </div>
                          <h4>
                            Registrar Corp <br /> USA
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
         
        
         
        </div>
      </Layout>
    </>
  );
}
