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
                <div className="col-md-3">
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
                                03. Stores
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>
                                04. Environment Mgmt
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div className="col-md-9">
                    {/* Tab panes */}
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                        <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Production</h4>
                            <div className="text">Each manufacturing block has processing and filling for liquid orals & Capsules, Compression & Coating for Tablets. Primary packing area for Alu Alu & Blister Tablets & Capsules. For Powders Pouch filling, Induction sealing & Sleeving in Jars is done with specialized machines.</div>
                            <div className="text">
                            The corridors are with Forced Draft Filter to filter air through 5 Micron filters. The primary filling areas have HEPA Filters with Air condition and controlled temperature & Relative Humidity.
                            </div>
                            <div className="text">
                            The manufacturing area is supplied with Purified Water via a Loop System built as per ICH-GMP Guidelines.
                            </div>
                            <div>
                            {/* <img src="/assets/images/resource/production-1.jpg"/> */}
                            </div>
                            
                        </div>
                        <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Quality Control</h4>
                            <div className="text">Quality Control Laboratory is supplemented with state of the art equipment like HPLC, FITR, Chromatography, Dissolution equipment, Karl fischner Titrator, Polarimeter, Analytical balance, PH meter, Refractometer, Friability tester which are required for pharmacopoeia analysis.</div>
                            <div className="text">
                            A separate microbiology section with primary and secondary change rooms and Laminar Airflow unit is provided for carrying out microbiological analysis.
                            </div>
                           <div className="infraimg d-none">
                           <img src="/assets/images/resource/meter.jpg"/>
                           </div>
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Stores</h4>
                            <div className="text">Stores are supplied with hoists for transfer of Raw Materials, Packing Materials and Finished Product. The entire passage of the stores is provided with Forced Draft Ventilation.</div>
                            <div className="text">
                            Raw Materials and Finished Products are stored in separate rooms with Temperature Control and constant Monitoring.
                            </div>
                            <div className="infraimg d-none">
                            <img src="/assets/images/resource/warehouse.jpg"/>
                            </div>
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Environment Management</h4>
                            <div className="text">The manufacturing site adheres to its commitment to the environment by treating the effluent generated by the site within the prescribed norms before discharging the same to the centralized effluent treatment plant.</div>
                            <div className="text">
                            To this effect, a Solvent Stripping and Recovery System and an Effluent Treatment Plant has been installed operated and monitored on a daily basis.
                            </div>
                            <div className="infraimg d-none">
                            <img src="/assets/images/resource/schamber.jpg"/>
                            </div>
                        </div>
                          
                    </div>
                </div>
            </div>
        </>
    )
}
