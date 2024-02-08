

import Layout from "@/components/layout/Layout"
import AuditSlider1 from "@/components/slider/AuditSlider1" 
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Contract Manufacturing" wrapperCls="home_2">
                <div>
                    <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <AuditSlider1 />
                                    <div className="row mb-5">
                                       
                                        <div className="col-md-12">
                                            <div className="text"><p>Pharmaceuticals and Nutraceuticals industries play a vital role all over the world.  </p> <p><span className="ceegotxtpara">Ceego Labs</span> specializes in manufacturing and developing Nutraceuticals and pharmaceuticals products using the cutting edge technologies offering comprehensive quality, assurance testing, Business Development solutions and contract manufacturing facilities based on our customers’ needs with the best quality at competitive prices. <span className="ceegotxtpara">Ceego Labs</span> can work with you to turn your ideas and concepts into a retail-ready product </p></div>
                                            
                                            <ul className="list">
                                                <li><i className="fa fa-check" /><span className="ceegotxtpara">Ceego Labs</span> Pvt Ltd is a - WHO,GMP,ISO 22000:2005,DUNS certified Contract manufacturers & Exporter of Nutraceuticals , Food Supplements , Dietary Supplements</li>
                                                <li><i className="fa fa-check" /><span className="ceegotxtpara">Ceego Labs</span> is on the Chennai-Bangalore Highway.
In a built-in area of approx. 48,000 sq ft in an eco-friendly area of 3.0 acres.</li>
                                                <li><i className="fa fa-check" />We have experienced staff and are assured of on-time services.</li>
                                                <li><i className="fa fa-check" />
We have expertise in new formulations in terms of delivery systems and label claims with unique selling points, or we can manufacture label claims tailor-made for your requirements.</li>
                                                 
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                <aside className="col-lg-4">
                                    <div className="service-sidebar">
                                        <div className="widget widget_categories_two">
                                            <div className="widget-content">
                                                <ul className="categories-list clearfix">

                                                                      <li><Link href="/quality-complaince">Quality Compliance <span /></Link></li>
                        <li><Link href="/private-labeling">Private Labeling <span /></Link></li>
                        <li><Link href="/custom-packaging">Custom Packaging <span /></Link></li>
                        <li><Link href="/distribution-support">Distribution Support <span /></Link></li>
                        <li><Link href="/new-formulation-development">New Formulation Development <span /></Link></li>


                                                     
                                                </ul>
                                            </div>
                                        </div>
                                        
                                       
                                    </div>
                                </aside>
                            </div>
                            <div className="row">
                              <div className="col-12">
                              <h2>Our approved sections are for</h2>
                                    <section className="pricing-section mt-4 pt-0">
        
         
       
          <div className="pricing-content">
            {/* Tab panes */}
            <div
              className="tab-content wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1200ms"
            >
              <div
                
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
                            <div className="category">Tablets</div>
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
                            <div className="category">Capsules</div>
                             
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
                            <div className="category">Powders</div>
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
                            <div className="category">Liquid</div>
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
              
            </div>
          </div>
        
      </section>
                              </div>
                            </div>
                        </div>
                    </section>
                   
                </div>

            </Layout>
        </>
    )
}