import Layout from "@/components/layout/Layout";
import AuditSlider1 from "@/components/slider/AuditSlider1";
import ServiceSlider1 from "@/components/slider/ServiceSlider1";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Custom Packaging"
        wrapperCls="home_2"
      >
        <div>
          <section className="services-details">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-8 content-side">
                  {/*Theme Carousel*/}
                  <AuditSlider1 />
                  <div className="row mb-5">
                    <div className="col-md-12">
                      <div className="text">
                        <p>                          
                        <span className="ceegotxtpara">Ceego Labs</span> is equipped to efficiently handle medium and large production runs. We can manufacture a variety of delivery systems in multiple packaging formats, so you can offer your customers several options.
                        </p>                       
                      </div>                     
                    </div>
                  </div>
                 
                
                </div>
                <aside className="col-lg-4">
                  <div className="service-sidebar">
                    <div className="widget widget_categories_two">
                      <div className="widget-content">
                        <ul className="categories-list clearfix">
                          <li>
                            <Link href="/contract-manufacturing">
                              Contract Manufacturing <span />
                            </Link>
                          </li>
                          {/* <li>
                            <Link href="/quality-complaince">
                              Quality Compliance <span />
                            </Link>
                          </li> */}
                          <li>
                            <Link href="/private-labeling">
                              Private Labeling <span />
                            </Link>
                          </li>

                          <li>
                            <Link href="/distribution-support">
                              Distribution Support <span />
                            </Link>
                          </li>
                          <li>
                            <Link href="/new-formulation-development">
                              New Formulation Development <span />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
             <div className="row">
               <div className="wrapper-box" style={{borderLeft:'1px solid rgb(225, 229, 233)', borderBottom:'1px solid rgb(225, 229, 233)'}}>
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
             </div>
             <div className="row mt-5">
               <div className="col-lg-8 content-side">
               <h2>Explore Our Custom Packaging Services</h2>
                  {/*Theme Carousel*/}
                  <ServiceSlider1 headone='Unique Packaging Design' headtwo='Experienced Product Design Team' headthree='Cost Effective Packaging' />
               </div>
             </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
