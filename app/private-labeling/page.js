import Layout from "@/components/layout/Layout";
import AuditSlider1 from "@/components/slider/AuditSlider1";
import ServiceSlider1 from "@/components/slider/ServiceSlider1";
import Link from "next/link";
export const metadata = {
  title:'Private Labelling '
}
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Private Labelling"
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
                        
                          At <span className="ceegotxtpara">Ceego Labs</span>, quality means doing it right when no
                          one is looking. The highly qualified team at <span className="ceegotxtpara">Ceego Labs</span>, comprising highly knowledgeable consultants,
                          biochemists, and microbiologists, works round the
                          clock to give
                        
                         
                      </div>

                      <ul className="list">
                        <li>
                          <i className="fa fa-check" />
                          Customer Satisfaction
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Uncompromised Quality
                        </li>
                        {/* <li>
                          <i className="fa fa-check" />
                          Latest Technology
                        </li> */}
                        <li>
                          <i className="fa fa-check" />
                          CompetitivePrice
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h2>Explore Our Private Labelling  Services</h2>
                  {/*Theme Carousel*/}
                  <ServiceSlider1 headone='Statutory Compliances' headtwo='Experienced Team' headthree='Accrediations'/>
                </div>
                <aside className="col-lg-4 d-none d-md-block">
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
                            <Link href="/custom-packaging">
                              Custom Packaging <span />
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
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
