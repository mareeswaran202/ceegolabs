
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("cat-1")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "cat-1"
                ? isotope.current.arrange({ filter: `cat-1` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")



    return (
        <>

            <div className="filters clearfix">
                <ul className="filter-tabs filter-btns clearfix">
                     
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Production <span className="count">0</span></li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Quality Control <span className="count">0</span></li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Ware House <span className="count">0</span></li>
                    <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>Environment Management <span className="count">0</span></li>
                     
                </ul>
            </div>
            <div className="items-container row clearfix">
                {/* Case Block */}
                <div className="case-block-one masonry-item  cat-1 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/resource/production.png" alt="" />
                        </div>
                        <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Production</h5>
                                <h4>Business Leadership</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item  cat-2 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/gallery/gallery-2.jpg" alt="" />
                        </div>
                        <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Quality Control</h5>
                                <h4>Market Expansion</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item  cat-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/gallery/gallery-3.jpg" alt="" />
                        </div>
                        <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Warehouse</h5>
                                <h4>Money Savings</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item  cat-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/gallery/gallery-4.jpg" alt="" />
                        </div>
                        <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Environment</h5>
                                <h4>Helthy Solutions</h4>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
