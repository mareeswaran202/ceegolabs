'use client'
import Link from "next/link"
import { useState } from "react"


export default function Pricing() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="pricing-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Our Capabilities</h2>
                        <div className="text-decoration">
                            <span className="left" />
                            <span className="right" />
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="pricing-btn">
                            <ul className="nav nav-tabs tab-btn-style-one" role="tablist">
                                <li className="nav-item" onClick={() => handleOnClick(1)}>
                                    <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>Manufacturing
                                    </a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(2)}>
                                    <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>
                                        Capacity
                                    </a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(3)}>
                                    <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                                   	Packaging
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pricing-content">
                        {/* Tab panes */}
                        <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                            <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                {/* <h3>Switch to Manufacturing plan and get 25% offer.</h3> */}
                                <div className="wrapper-box">
                                    <div className="row m-0">
                                        <div className="col-lg-3 pricing-block animated fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                            <div className="inner-box">
                                                <div className="top-content">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="category">Tablets</div>
                                                    {/* <div className="price"><span>$</span>24.00 <sub>/mo</sub></div>  */}
                                                    </div>
                                                </div>
                                                <div className="lower-content">
                                                    {/* <h5>Tablets</h5>
                                                    <h4>Power of choice is untrammelled and <br />do what we like best.</h4> */}
                                                    <ul>
                                                        <li><i className="flaticon-tick" />Bilayer</li>                                                         
                                                        <li><i className="flaticon-tick" />Film coated</li>
                                                        <li><i className="flaticon-tick" />Sustained release tablets</li>
                                                        <li><i className="flaticon-tick" />Enteric coated</li>
                                                        <li><i className="flaticon-tick" />Effervescent tablets</li>
                                                        <li><i className="flaticon-tick" />Chewable tablets</li>
                                                        <li><i className="flaticon-tick" />Mouth dissolving tablets</li>
                                                        <li><i className="flaticon-tick" />Uncoated tablets</li>
                                                    </ul>
                                                    {/* <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Get Started a Free Trail</span></Link></div>
                                                    <div className="hint"><span>*</span> No credit card required</div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 pricing-block active animated fadeInLeft" data-wow-delay="200ms" data-wow-duration="1200ms">
                                            <div className="inner-box">
                                                <div className="top-content">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="category">Capsules</div>
                                                        {/* <div className="price"><span>$</span>45.00 <sub>/mo</sub></div> */}
                                                    </div>
                                                </div>
                                                <div className="lower-content">
                                                    {/* <h5>for Large Business</h5>
                                                    <h4>Matters to  principle of selection our <br />pleasures to secure.</h4> */}
                                                    <ul>
                                                        <li><i className="flaticon-tick" />Veg Capsules (HPMC)</li>
                                                        <li><i className="flaticon-tick" />Hard Gelatin Capsules</li>                                                         
                                                        <li><i className="flaticon-tick" />Tablet in Capsules</li>
                                                    </ul>
                                                    {/* <div className="link-btn"><Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Get Started a Free Trail</span></Link></div>
                                                    <div className="hint"><span>*</span> No credit card required</div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 pricing-block animated fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                            <div className="inner-box">
                                                <div className="top-content">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="category">Powders</div>
                                                         
                                                    </div>
                                                </div>
                                                <div className="lower-content">
                                                     
                                                    <ul>
                                                        <li><i className="flaticon-tick" />Sports nutrition</li>
                                                        <li><i className="flaticon-tick" />FSMP</li>
                                                        <li><i className="flaticon-tick" />Diabetic, Gynaec Powders</li>
                                                        <li><i className="flaticon-tick" />Lactation Powders</li>
                                                        <li><i className="flaticon-tick" />Cardio, Neuro Powders</li>
                                                        <li><i className="flaticon-tick" /> Pediatric Powders</li>
                                                        <li><i className="flaticon-tick" />Geriatric powders</li>
                                                        <li><i className="flaticon-tick" />Granules</li>
                                                        <li><i className="flaticon-tick" />Mouth Dissolving powder</li>
                                                    </ul>
                                                     
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 pricing-block animated fadeInUp" style={{borderRight:'none'}} data-wow-delay="200ms" data-wow-duration="1200ms">
                                            <div className="inner-box">
                                                <div className="top-content">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="category">Liquid</div>
                                                         
                                                    </div>
                                                </div>
                                                <div className="lower-content">
                                                    
                                                    <ul>
                                                        <li><i className="flaticon-tick" />Sugar based syrups</li>
                                                        <li><i className="flaticon-tick" />Sorbitol based syrups.</li>
                                                        <li><i className="flaticon-tick" />Shots</li>
                                                        <li><i className="flaticon-tick" />Gel</li>
                                                        <li><i className="flaticon-tick" />Oral Solutions</li>
                                                        <li><i className="flaticon-tick" />Herbal formulations</li>
                                                        <li><i className="flaticon-tick" />Suspensions</li>
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <h3>Switch to Capacity plan and get 25% offer.</h3>
                                <div className="wrapper-box">
                                    <div className="row m-0">
                                        <div className="col pricing-block animated fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                            <div className="inner-box">
                                                <div className="top-content">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="category">Annual Capacity</div>
                                                         
                                                    </div>
                                                </div>
                                                <div className="lower-content lowercontent2">
                                                     
                                                    <ul style={{display:'flex',gap:'10px'}}>
                                                        <li style={{borderBottom:'none'}}><i className="flaticon-tick" />Tablets</li>
                                                        <li style={{borderBottom:'none'}}>50 Cr</li>
                                                       
                                                    </ul>
                                                    <ul style={{display:'flex',gap:'10px'}}>
                                                        <li style={{borderBottom:'none'}}><i className="flaticon-tick" />Capsules </li>
                                                        <li style={{borderBottom:'none'}}>20 Cr</li>
                                                       
                                                    </ul>
                                                    <ul style={{display:'flex',gap:'10px'}}>
                                                        <li style={{borderBottom:'none'}}><i className="flaticon-tick" />Liquids </li>
                                                        <li style={{borderBottom:'none'}}>5 Cr</li>
                                                       
                                                    </ul>
                                                    <ul style={{display:'flex',gap:'10px'}}>
                                                        <li style={{borderBottom:'none'}}><i className="flaticon-tick" />Powders</li>
                                                        <li style={{borderBottom:'none'}}>1000 tons</li>
                                                       
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <h3>Switch to packaingig plan and get 25% offer.</h3>
                                <div className="wrapper-box">
                                    <div className="row m-0">
                                        <div className="col-lg-4 pricing-block animated fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                            <div className="inner-box">
                                                <div className="top-content">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="category">Tablet & Capsule</div>
                                                        
                                                    </div>
                                                </div>
                                                <div className="lower-content">
                                                     
                                                    <ul>
                                                        <li><i className="flaticon-tick" />Alu alu blistersh</li>                                                        
                                                        <li><i className="flaticon-tick" />Blisters</li>
                                                        <li><i className="flaticon-tick" />Strip Packing</li>
                                                        <li><i className="flaticon-tick" />HDPE Jars</li>
                                                        <li><i className="flaticon-tick" />HDPE Bottles</li>
                                                        <li><i className="flaticon-tick" />Pet Bottles</li>
                                                        <li><i className="flaticon-tick" />Glass Bottles</li>
                                                    </ul>
                                                     
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 pricing-block active animated fadeInRight" data-wow-delay="200ms" data-wow-duration="1200ms">
                                            <div className="inner-box">
                                                <div className="top-content">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="category">Powders</div>
                                                         
                                                    </div>
                                                </div>
                                                <div className="lower-content">
                                                    
                                                    <h4 className="mt-3" style={{textAlign:'left'}}>In our Automated Powder manufacturing section, we have different packaging lines</h4>
                                                    <ul>
                                                        <li><i className="flaticon-tick" />In printed pouches ( 50 to 500 gm )</li>
                                                        <li><i className="flaticon-tick" />Stand-up Pouch, In Carton </li>                                                         
                                                        <li><i className="flaticon-tick" />Sachet ( 3 to 30 gm ) </li>
                                                        <li><i className="flaticon-tick" />TIN Containers </li>
                                                        <li><i className="flaticon-tick" />Zip pouches </li>
                                                        <li><i className="flaticon-tick" />Gel in Sachet  </li>
                                                        <li style={{lineHeight:'32px',marginTop:'18px', marginBottom:'18px', display:'flex'}}><i className="flaticon-tick d-flex"  />In HDPE or PET with shrink sleeves or Sticker label as direct filling or in pouches   </li>
                                                    </ul>
                                                     
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 pricing-block animated fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                            <div className="inner-box">
                                                <div className="top-content">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="category">Liquids</div>
                                                         
                                                    </div>
                                                </div>
                                                <div className="lower-content">
                                                   
                                                    <ul>
                                                        <li><i className="flaticon-tick" />Glass bottles</li>
                                                        <li><i className="flaticon-tick" />HDP bottles (30ml-500ml)</li>
                                                        <li><i className="flaticon-tick" />Pet bottles (30ml-500ml)</li>
                                                        <li><i className="flaticon-tick" />Gel in sachet</li>
                                                        <li><i className="flaticon-tick" />Shots</li>
                                                    </ul>
                                                     
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
