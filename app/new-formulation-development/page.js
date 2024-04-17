import Layout from "@/components/layout/Layout";
import AuditSlider1 from "@/components/slider/AuditSlider1";
import Choose from "@/components/elements/Choose";
import Link from "next/link";
export const metadata = {
  title: "New Formulation Development",
};
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="New Formulation Development"
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
                        Our Research and Development team is the key to the
                        science behind our products. Our formulation development
                        department is motivated to achieve improved
                        bioavailability, efficacy, and efficiency. Utilizing the
                        latest and newest formulas and radical innovation. We provide excellent formulations for
                      </div>
                      <ul className="list">
                        <li style={{fontSize:'15px'}}>
                          <i className="fa fa-check" />
                          Dietary supplements
                        </li>
                        <li style={{fontSize:'15px'}}>
                          <i className="fa fa-check" />
                          Food supplements
                        </li>
                        <li style={{fontSize:'15px'}}>
                          <i className="fa fa-check" />
                          ⁠Nutraceuticals
                        </li>
                        <li style={{fontSize:'15px'}}>
                          <i className="fa fa-check" />
                          Sports Nutrition
                        </li>
                        <li style={{fontSize:'15px'}}>
                          <i className="fa fa-check" />
                          ⁠Functional foods
                        </li>
                        <li style={{fontSize:'15px'}}>
                          <i className="fa fa-check" />
                          Pre Probiotics
                        </li>
                        <li style={{fontSize:'15px'}}>
                          <i className="fa fa-check" />
                          Pharmaceuticals
                        </li>
                      </ul>
                    </div>
                  </div>
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
                          {/* <li>
                            <Link href="/private-labeling">
                              Private Labeling <span />
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
                        </ul>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="row">
                <div className="col">
                  <Choose />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
