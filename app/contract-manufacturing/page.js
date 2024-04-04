

import Layout from "@/components/layout/Layout"
import AuditSlider1 from "@/components/slider/AuditSlider1" 
import Link from "next/link"
export const metadata = {
    title:'Contract Manufacturing'
  }
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
                                          <div className="text"><span className="ceegotxtpara">Ceego Labs</span> specializes in manufacturing and developing Nutraceuticals and pharmaceuticals products offering comprehensive quality, assurance testing, Business Development solutions  based on our customers’ needs with the best quality at competitive prices. <span className="ceegotxtpara">Ceego Labs</span> can work with you to turn your ideas and concepts into a retail-ready product.</div>
                                            
                                            
                                            <ul className="list d-none">
                                              <li><i className="fa fa-check" />We have expertise in new formulations in terms of delivery systems and label claims with unique selling points, or we can manufacture label claims tailor-made for your requirements.</li>
                                                {/* <li><i className="fa fa-check" /><span className="ceegotxtpara">Ceego Labs</span> Pvt Ltd is a - WHO,GMP,ISO 22000:2005,DUNS certified Contract manufacturers & Exporter of Nutraceuticals , Food Supplements , Dietary Supplements</li>
                                                <li><i className="fa fa-check" /><span className="ceegotxtpara">Ceego Labs</span> is on the Chennai-Bangalore Highway.
In a built-in area of approx. 48,000 sq ft in an eco-friendly area of 3.0 acres.</li>
                                                <li><i className="fa fa-check" />We have experienced staff and are assured of on-time services.</li>
                                                <li><i className="fa fa-check" />
We have expertise in new formulations in terms of delivery systems and label claims with unique selling points, or we can manufacture label claims tailor-made for your requirements.</li> */}
                                                 
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                <aside className="col-lg-4 d-none d-md-block">
                                    <div className="service-sidebar">
                                        <div className="widget widget_categories_two">
                                            <div className="widget-content">
                                                <ul className="categories-list clearfix">

                                                                      <li className="d-none"><Link href="/quality-complaince">Quality Compliance <span /></Link></li>
                        {/* <li><Link href="/private-labeling">Private Labeling <span /></Link></li> */}
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