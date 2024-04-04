import Layout from "@/components/layout/Layout";
import Award from "@/components/slider/Award";
export const metadata = {
  title: "Our Exporting Countries",
};
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Export"
        wrapperCls="home_2"
      >
        

        <section className="testimonial-section-six">
          <div className="row">
            <div className="col">
              <div className="sec-title text-center">
                <h2>Our Exporting Countries</h2>
                <div className="text-decoration">
                  <span className="left" />
                  <span className="right" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
           <div className="col">
            <div className="text2">
            Exporting to the below countries under our own brand and as a contract manufacturer.
            </div>
           </div>
          </div>
          <div className="auto-container">
            <div className="wrapper-box">
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/azerbaijan.png" alt="" />
                  </div>
                  <div className="text">Azerbaijan</div>
                </div>
                <div className="point" />
              </div>
              <div className="pointer-block d-none">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/canada.png" alt="" />
                  </div>
                  <div className="text">Canada</div>
                </div>
                <div className="point" />
              </div>
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/nigeria.png" alt="" />
                  </div>
                  <div className="text">Nigeria</div>
                </div>
                <div className="point" />
              </div>
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/poland.png" alt="" />
                  </div>
                  <div className="text">Poland</div>
                </div>
                <div className="point" />
              </div>
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/oman.png" alt="" />
                  </div>
                  <div className="text">Oman</div>
                </div>
                <div className="point" />
              </div>
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/qatar.png" alt="" />
                  </div>
                  <div className="text">Qatar</div>
                </div>
                <div className="point" />
              </div>
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/india.png" alt="" />
                  </div>
                  <div className="text">India</div>
                </div>
                <div className="point" />
              </div>
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/singapore.png" alt="" />
                  </div>
                  <div className="text">Singapore</div>
                  {/* <h4>Boris Elbert, <span>Managing Director</span></h4> */}
                </div>
                <div className="point" />
              </div>
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/srilanka.png" alt="" />
                  </div>
                  <div className="text">Srilanka</div>
                </div>
                <div className="point" />
              </div>
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/myanmar.png" alt="" />
                  </div>
                  <div className="text">Myanmar</div>
                </div>
                <div className="point" />
              </div>
              <img src="/assets/images/resource/world-map-2.jpg" alt="" />
            </div>
          </div>
          <div className="auto-container d-sm-none">
          <div className="wrapper-box">
               <div className="row d-flex justify-content-center">
                    <div
                      className="col-lg-4 col-6 pricing-block animated fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                      style={{borderLeft:'1px solid rgb(225, 229, 233)'}}
                    >
                      <div className="inner-box">
                       
                        <div className="lower-content">
                          <ul>
                            <li>
                              <img className="flagcls" src="/assets/images/resource/india.png" alt="" />
                              India
                            </li>
                            <li>
                            <img className="flagcls" src="/assets/images/resource/srilanka.png" alt="" />
                              Srilanka
                            </li>
                            <li className="d-none">
                               <img className="flagcls" src="/assets/images/resource/canada.png" alt="" />
                             Canada
                            </li>
                            
                            <li>
                            <img className="flagcls" src="/assets/images/resource/poland.png" alt="" />
                              Poland
                            </li>
                            <li>
                            <img className="flagcls" src="/assets/images/resource/myanmar.png" alt="" />
                              Myanmar
                            </li>
                            <li>
                            <img className="flagcls" src="/assets/images/resource/nigeria.png" alt="" />
                              Nigeria
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-6 pricing-block active animated fadeInRight"
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                    >
                      <div className="inner-box">
                        
                        <div className="lower-content">
                          
                          <ul>
                          <li>
                              <img className="flagcls" src="/assets/images/resource/singapore.png" alt="" />
                             Singapore
                            </li>
                            <li>
                            <img className="flagcls" src="/assets/images/resource/oman.png" alt="" />
                              Oman
                            </li>
                            <li>
                               <img className="flagcls" src="/assets/images/resource/qatar.png" alt="" />
                               Qatar
                            </li>
                            
                            <li>
                            <img className="flagcls" src="/assets/images/resource/azerbaijan.png" alt="" />
                            Azerbaijan
                            </li>
                           
                            
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                   
                  </div>
               </div>
          </div>
        </section>
        <Award/>
      </Layout>
    </>
  );
}
