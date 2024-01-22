import Link from "next/link"


export default function Services() {
    return (
        <>
            <section className="services-section" style={{ backgroundImage: 'url(assets/images/background/bg-4.jpg)' }}>
                <div className="auto-container">
                    <div className="row m-0 align-items-center justify-content-between">
                        <div className="sec-title style-two">
                            <h4><span className="flaticon-endless" />What We Do</h4>
                            <h2>Our Services</h2>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 service-block-one">
                            <div className="inner-box">
                                <div className="icon"><div className="icon-inner"><span className="flaticon-up" /></div></div>
                                <h4>Contract Manufacturing</h4>
                                <div className="text">Pharmaceuticals and Nutraceuticals industries play a vital role all over the world...</div>
                                <Link href="/contract-manufacturing" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 service-block-one">
                            <div className="inner-box">
                                <div className="icon"><div className="icon-inner"><span className="flaticon-chart" /></div></div>
                                <h4>Quality Complaince</h4>
                                <div className="text">We know how important quality is to your brand’s success. We carefully follow regulations and maintain...</div>
                                <Link href="/quality-complaince" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 service-block-one">
                            <div className="inner-box">
                                <div className="icon"><div className="icon-inner"><span className="flaticon-system" /></div></div>
                                <h4>Private Labeling</h4>
                                <div className="text">CEEGO LABS is equipped to efficiently handle medium and large production runs...</div>
                                <Link href="/private-labeling" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 service-block-one">
                            <div className="inner-box">
                                <div className="icon"><div className="icon-inner"><span className="flaticon-business-and-finance" /></div></div>
                                <h4>Custom Packing</h4>
                                <div className="text">CEEGO LABS is equipped to efficiently handle medium and large production runs...</div>
                                <Link href="/custom-packaging" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 service-block-one">
                            <div className="inner-box">
                                <div className="icon"><div className="icon-inner"><span className="flaticon-support" /></div></div>
                                <h4>Distribution Support</h4>
                                <div className="text">As one of our service private label manufacturer, we have a strict focus on quality in our manufacturing operation. </div>
                                <Link href="/distribution-support" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 service-block-one">
                            <div className="inner-box">
                                <div className="icon"><div className="icon-inner"><span className="flaticon-endless" /></div></div>
                                <h4>New Formulation Development</h4>
                                <div className="text">Our Research & Development team is the key behind the science in our products. We are keen to develop & formulate... </div>
                                <Link href="/new-formulation-development" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
