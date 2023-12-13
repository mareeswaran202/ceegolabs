'use client'
import { useState } from "react"

export default function ServiceTabs1() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs tab-btn-style-one mr-md-4" role="tablist">
                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>01. Our Teams Strength
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                            <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>
                                02. Our Core Value
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                                03. Customer Satisfaction
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>
                                04. Latest Technologies
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(5)}>
                            <a className={activeIndex == 5 ? "nav-link active" : "nav-link"}>
                                05. Uncompromised Quality
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(6)}>
                            <a className={activeIndex == 6 ? "nav-link active" : "nav-link"}>
                                06. Competitive Price
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    {/* Tab panes */}
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                        <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Our Team</h4>
                            <div className="text">Ceego Labs has well Experienced, Qualified and Competent Technical Personnel in various departments of Quality Assurance, Quality Control, Production, Personnel & Administration, Engineering & Warehouse and more.</div>
                            
                        </div>
                        <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Our Core Value</h4>
                            <div className="text">At Ceego Labs, we share a strong set of values that serve as the foundation for our individual and associates performance, upheld daily by each of us, through our involvement, actions and initiatives. we work for – a healthy commitment to produce world class products and services</div>
                             
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Customer Satisfaction</h4>
                            <div className="text">Since establishment, the prime aim of CEEGO LABS is seeking and nurturing ideas from OUR ASSOCIATES AND  teams TO provide satisfaction to the clients by serving them  the best END PRODUCT END TO END..</div>
                             
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Latest Technologies</h4>
                            <div className="text">Installed with the advanced machinery and technology our formulation meets international manufacturing standards.</div>
                             
                        </div>
                        <div className={activeIndex == 5 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Uncompromised Quality</h4>
                            <div className="text">Our passion for excellence ensures the highest quality of product.</div>
                            
                        </div>
                        <div className={activeIndex == 6 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Competitive Price</h4>
                            <div className="text">Ceego Labs is the company that is committed to good health for all by providing quality medicines at affordable prices.</div>
                             
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
