

import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
 
  
    return (
        <>
            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Research & Development"  wrapperCls="home_2">
                <div>
                    <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                   
                                    <div className="row mb-5">
                                       
                                        <div className="col-md-12">
                                            <div className="text"><p>Our Research & Development team is the key behind the science in our products. our
formulation development Department is motivated to achieve improved bioavailability,
efficacy and efficiency. utilizing the latest & newest formulas and radical innovation, we
ensure that your products are leading in the market & keep up with the changing needs in
the industry </p></div>
                                            
                                            {/* <ul className="list">
                                                <li><i className="fa fa-check" />Customer Satisfaction</li>
                                                <li><i className="fa fa-check" />Uncompromised Quality</li>
                                                <li><i className="fa fa-check" />Latest Technology</li>
                                                <li><i className="fa fa-check" />Competitive Price</li>
                                                 
                                            </ul> */}
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
                        </div>
                    </section>
                   
                </div>

            </Layout>
        </>
    )
}