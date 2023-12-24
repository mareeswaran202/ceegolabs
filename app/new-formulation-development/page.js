

import Layout from "@/components/layout/Layout"
import AuditSlider1 from "@/components/slider/AuditSlider1"
import ServiceSlider1 from "@/components/slider/ServiceSlider1"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="New Formulation Development" wrapperCls="home_2">
                <div>
                    <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <AuditSlider1 />
                                    <div className="row mb-5">
                                       
                                        <div className="col-md-12">
                                            <div className="text"><p>RESEARCH AND DEVELOPMENT Our Research & Development team is the key behind the science in our products. We are keen to develop & formulate the latest & up to date formulas to ensure that our products are leading in the market & keep up with the changing trends in the industry to ensure outstanding & highest quality products. EXTENSIVE MANUFACTURING CAPACITY</p></div>
                                            
                                            <ul className="list">
                                                <li><i className="fa fa-check" />Customer Satisfaction</li>
                                                <li><i className="fa fa-check" />Uncompromised Quality</li>
                                                <li><i className="fa fa-check" />Latest Technology</li>
                                                <li><i className="fa fa-check" />Competitice Price</li>
                                                 
                                            </ul>
                                        </div>
                                    </div>
                                    <h2>Explore Our Research & Development Services</h2>
                                    {/*Theme Carousel*/}
                                    <ServiceSlider1 />
                                    
                                </div>
                                <aside className="col-lg-4">
                                    <div className="service-sidebar">
                                        <div className="widget widget_categories_two">
                                            <div className="widget-content">
                                                <ul className="categories-list clearfix">
                                                <li><Link href="/contract-manufacturing">Contract Manufacturing <span /></Link></li>
                                                                      <li><Link href="/quality-complaince">Quality Compliance <span /></Link></li>
                        <li><Link href="/private-labeling">Private Labeling <span /></Link></li>
                        <li><Link href="/custom-packaging">Custom Packaging <span /></Link></li>
                        <li><Link href="/distribution-support">Distribution Support <span /></Link></li>
                        


                                                     
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
    )
}