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
                        <div className="link-btn mb-50"><Link href="#" className="theme-btn btn-style-five"><span className="btn-title">All Services</span></Link></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 service-block-one">
                            <div className="inner-box">
                                <div className="icon"><div className="icon-inner"><span className="flaticon-up" /></div></div>
                                <h4>Contract <br />Manufacturing</h4>
                                <div className="text">Lorem Ipsum is &amp; dummy text of the printing and typesetting industry.</div>
                                <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 service-block-one">
                            <div className="inner-box">
                                <div className="icon"><div className="icon-inner"><span className="flaticon-chart" /></div></div>
                                <h4>Quality <br />Complaince</h4>
                                <div className="text">Lorem Ipsum is &amp; dummy text of the printing and typesetting industry.</div>
                                <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 service-block-one">
                            <div className="inner-box">
                                <div className="icon"><div className="icon-inner"><span className="flaticon-system" /></div></div>
                                <h4>Private <br />Labeling</h4>
                                <div className="text">Lorem Ipsum is &amp; dummy text of the printing and typesetting industry.</div>
                                <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 service-block-one">
                            <div className="inner-box">
                                <div className="icon"><div className="icon-inner"><span className="flaticon-business-and-finance" /></div></div>
                                <h4>Custom <br />Packing</h4>
                                <div className="text">Lorem Ipsum is &amp; dummy text of the printing and typesetting industry.</div>
                                <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 service-block-one">
                            <div className="inner-box">
                                <div className="icon"><div className="icon-inner"><span className="flaticon-support" /></div></div>
                                <h4>Distribution <br />Support</h4>
                                <div className="text">Lorem Ipsum is &amp; dummy text of the printing and typesetting industry.</div>
                                <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 service-block-one">
                            <div className="inner-box">
                                <div className="icon"><div className="icon-inner"><span className="flaticon-endless" /></div></div>
                                <h4>New Formulation <br />Development</h4>
                                <div className="text">Lorem Ipsum is &amp; dummy text of the printing and typesetting industry.</div>
                                <Link href="#" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
