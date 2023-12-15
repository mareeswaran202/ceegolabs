
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
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
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
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
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>Show All <span className="count">0</span></li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Capsules <span className="count">0</span></li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Powder <span className="count">0</span></li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Syrups <span className="count">0</span></li>
                    <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>Tablets <span className="count">0</span></li>
                   
                </ul>
            </div>
            <div className="items-container row clearfix">
                {/* Case Block cat-1 starts */}
                <div className="case-block-one masonry-item  cat-1 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/gallery/himmel.png" alt="" />
                        </div>
                        {/* <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Marketing</h5>
                                <h4>Business Leadership</h4>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* Case Block */}
                 {/* Case Block */}
                 <div className="case-block-one masonry-item  cat-1 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/gallery/stamax.png" alt="" />
                        </div>
                        {/* <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Marketing</h5>
                                <h4>Business Leadership</h4>
                            </div>
                        </div> */}
                    </div>
                </div>
                 {/* Case Block cat-1 Ends */}
                 <div className="case-block-one masonry-item  cat-1 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/gallery/nevrostop.png" alt="" />
                        </div>
                        {/* <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Marketing</h5>
                                <h4>Business Leadership</h4>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item  cat-2 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/gallery/vps-protein-powder.png" alt="" />
                        </div>
                        {/* <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Technical</h5>
                                <h4>Market Expansion</h4>
                            </div>
                        </div> */}
                    </div>
                </div>
                 {/* Case Block */}
                 <div className="case-block-one masonry-item  cat-2 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/gallery/vps-dia-powder.png" alt="" />
                        </div>
                        {/* <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Technical</h5>
                                <h4>Market Expansion</h4>
                            </div>
                        </div> */}
                    </div>
                </div>
                 {/* Case Block */}
                 <div className="case-block-one masonry-item  cat-2 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/gallery/vps-weight-solution.png" alt="" />
                        </div>
                        {/* <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Technical</h5>
                                <h4>Market Expansion</h4>
                            </div>
                        </div> */}
                    </div>
                </div>
                 {/* Case Block */}
                 <div className="case-block-one masonry-item  cat-2 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/gallery/vps-preg-powder.png" alt="" />
                        </div>
                        {/* <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Technical</h5>
                                <h4>Market Expansion</h4>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item  cat-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/gallery/cartisin.png" alt="" />
                        </div>
                        {/* <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Coaching</h5>
                                <h4>Money Savings</h4>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item  cat-4  col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/gallery/vithair.png" alt="" />
                        </div>
                        {/* <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Business</h5>
                                <h4>Helthy Solutions</h4>
                            </div>
                        </div> */}
                    </div>
                </div>
                   {/* Case Block */}
                <div className="case-block-one masonry-item  cat-4  col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/gallery/matribone.png" alt="" />
                        </div>
                        {/* <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Business</h5>
                                <h4>Helthy Solutions</h4>
                            </div>
                        </div> */}
                    </div>
                </div>

                  {/* Case Block */}
                  <div className="case-block-one masonry-item  cat-4  col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/gallery/mevina.png" alt="" />
                        </div>
                        {/* <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Business</h5>
                                <h4>Helthy Solutions</h4>
                            </div>
                        </div> */}
                    </div>
                </div>

                  {/* Case Block */}
                  <div className="case-block-one masonry-item  cat-4  col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/gallery/immuactiv-cz.png" alt="" />
                        </div>
                        {/* <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Business</h5>
                                <h4>Helthy Solutions</h4>
                            </div>
                        </div> */}
                    </div>
                </div>

                  {/* Case Block */}
                  <div className="case-block-one masonry-item  cat-4  col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                            <img src="/assets/images/gallery/immuactiv-z.png" alt="" />
                        </div>
                        {/* <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Business</h5>
                                <h4>Helthy Solutions</h4>
                            </div>
                        </div> */}
                    </div>
                </div>
                
            </div>
        </>
    )
}
