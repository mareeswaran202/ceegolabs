'use client'
import { useState } from "react"
import '../../public/assets/css/custom.css'
export default function ServiceTabs1() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <ul className="nav nav-tabs tab-btn-style-one mr-md-4" role="tablist">
                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>01. Production
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                            <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>
                                02. Quality Control
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                                03. Warehouse
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>
                                04. Environment Management
                            </a>
                        </li>
                        {/* <li className="nav-item" onClick={() => handleOnClick(5)}>
                            <a className={activeIndex == 5 ? "nav-link active" : "nav-link"}>
                                05. Uncompromised Quality
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(6)}>
                            <a className={activeIndex == 6 ? "nav-link active" : "nav-link"}>
                                06. Competitive Price
                            </a>
                        </li> */}
                    </ul>
                </div>
                <div className="col-md-7">
                    {/* Tab panes */}
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                        <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Production</h4>
                            <div className="text">Each manufacturing block has processing and Filling for liquid orals & Capsules, Compression, Coating for tablets primary packing area Alu Alu & Blister tablets & Capsules, Pouch filling, Induction sealing & Sleeving in Jars for powders with specialized machines.</div>
                            <div className="text">
                            The corridors have Forced Draft Filter air filtered through 5 Micron filters. The primary filling areas have HEPA Filters with Air condition and controlled temperature & Relative Humidity.
                            </div>
                            <div className="text">
                            The manufacturing area is supplied with Purified Water via a Loop System built as per ICH-GMP Guidelines.
                            </div>
                            <div className="infraimg">
                            <img src="/assets/images/resource/production.png"/>
                            </div>
                            
                        </div>
                        <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Quality Control</h4>
                            <div className="text">The manufacturing facility is also supplemented with a well-equipped Quality Control Laboratory which has state of the art equipment like HPLC, FTIR . which are required for  pharmacopoeia analysis.</div>
                            <div className="text">
                            A separate microbiology section with primary and secondary change rooms and Laminar Airflow unit is provided for carrying out microbiological analysis.
                            </div>
                           <div className="infraimg">
                           <img src="/assets/images/resource/meter.jpg"/>
                           </div>
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Ware House</h4>
                            <div className="text">The warehouse is equipped with hoists for transfer of Raw Materials, Packing Materials and Finished Product. The entire passage of the warehouse is supplied with Forced Draft Ventilation.</div>
                            <div className="text">
                            The Raw Materials and Finished Products are stored in rooms with Temperature Control and Monitoring.
                            </div>
                            <div className="infraimg">
                            <img src="/assets/images/resource/warehouse.jpg"/>
                            </div>
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Environment Management</h4>
                            <div className="text">The manufacturing site adheres to its commitment to the environment by treating the effluent generated by the site within the prescribed norms before discharging the same to the centralized effluent treatment plant.</div>
                            <div className="text">
                            To this effect, a Solvent Stripping and Recovery System and an Effluent Treatment Plant has been installed operated and monitored on a daily basis.
                            </div>
                            <div className="infraimg">
                            <img src="/assets/images/resource/schamber.jpg"/>
                            </div>
                        </div>
                        {/* <div className={activeIndex == 5 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Uncompromised Quality</h4>
                            <div className="text">Our passion for excellence ensures the highest quality of product.</div>
                            
                        </div>
                        <div className={activeIndex == 6 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Competitive Price</h4>
                            <div className="text">Ceego Labs is the company that is committed to good health for all by providing quality medicines at affordable prices.</div>
                             
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
