

import Layout from "@/components/layout/Layout"
import AuditSlider1 from "@/components/slider/AuditSlider1"
import ServiceSlider1 from "@/components/slider/ServiceSlider1"
import Link from "next/link"
export const metadata = {
    title:'Quality Complaince'
  }
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Quality Compliance" wrapperCls="home_2">
                <div>
                    <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <AuditSlider1 />
                                    <div className="row mb-5">
                                       
                                        <div className="col-md-12">
                                            <div className="text"><p>We know how important quality is to your brand’s success. We follow regulations and maintain a comprehensive quality system. We ensure that all YOUR products undergo strict manufacturing standards, absolute quality check along the manufacturing process, and a thorough finished product testing is conducted in our laboratories.</p>

                                            <p className="mt-2">The manufacturing facility is supplemented with a well-equipped Quality analysis Laboratory - HPLC (P-series & LC-2010C), FTIR, U.V.Spectrophotometer, A separate microbiology section with primary and secondary change rooms and Laminar Airflow unit.</p>
                                            </div>
                                            
                                            <ul className="list">
                                                <li><i className="fa fa-check" />Customer Satisfaction</li>
                                                <li><i className="fa fa-check" />Uncompromised Quality</li>
                                                <li><i className="fa fa-check" />Latest Technology</li>
                                                <li><i className="fa fa-check" />CompetitivePrice</li>
                                                 
                                            </ul>
                                        </div>
                                    </div>
                                    <h2>Explore Our Quality Compliance Services</h2>
                                    {/*Theme Carousel*/}
                                    <ServiceSlider1 />
                                    
                                </div>
                                <aside className="col-lg-4">
                                    <div className="service-sidebar">
                                        <div className="widget widget_categories_two">
                                            <div className="widget-content">
                                                <ul className="categories-list clearfix">

                                                <li><Link href="/contract-manufacturing">Contract Manufacturing <span /></Link></li>
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