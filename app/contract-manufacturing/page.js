

import Layout from "@/components/layout/Layout"
import AuditSlider1 from "@/components/slider/AuditSlider1"
import ServiceSlider1 from "@/components/slider/ServiceSlider1"
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
                                            <div className="text"><p>Pharmaceuticals and Nutraceuticals industries play a vital role all over the world.  </p> <p><span className="ceegotxtpara">Ceego Labs</span> specializes in manufacturing and developing Nutraceuticals and pharmaceuticals products using the cutting edge technologies offering comprehensive quality, assurance testing, Business Development solutions and contract manufacturing facilities based on our customers’ needs with the best quality at competitive prices</p><p><span className="ceegotxtpara">Ceego Labs</span> can work with you to turn your ideas and concepts into a retail-ready product </p></div>
                                            
                                            <ul className="list">
                                                <li><i className="fa fa-check" />Customer Satisfaction</li>
                                                <li><i className="fa fa-check" />Uncompromised Quality</li>
                                                <li><i className="fa fa-check" />Latest Technology</li>
                                                <li><i className="fa fa-check" />Competitice Price</li>
                                                 
                                            </ul>
                                        </div>
                                    </div>
                                    <h2>Explore Our Contract Manufacturing Services</h2>
                                    {/*Theme Carousel*/}
                                    <ServiceSlider1 />
                                    
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
                        </div>
                    </section>
                   
                </div>

            </Layout>
        </>
    )
}