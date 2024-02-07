 

import Layout from "@/components/layout/Layout"
import AuditSlider1 from "@/components/slider/AuditSlider1"
import ServiceSlider1 from "@/components/slider/ServiceSlider1"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Custom Packaging" wrapperCls="home_2">
                <div>
                    <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <AuditSlider1 />
                                    <div className="row mb-5">
                                       
                                        <div className="col-md-12">
                                            <div className="text"><p><span className="ceegotxtpara">Ceego Labs</span> is equipped to efficiently handle medium and large production runs, We can manufacture a variety of delivery systems in multiple packaging formats so you can offer your customers several options. </p></div>
                                            
                                            <ul className="list">
                                                <li><i className="fa fa-check" />Blister packs</li>
                                                <li><i className="fa fa-check" />Sachets</li>
                                                <li><i className="fa fa-check" />Containers</li>
                                                <li><i className="fa fa-check" />Strips</li>
                                                <li><i className="fa fa-check" />Bottles</li>
                                                <li><i className="fa fa-check" />Foil</li>
                                                 
                                            </ul>
                                        </div>
                                    </div>
                                    <h2>Explore Our Custom Packaging Services</h2>
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