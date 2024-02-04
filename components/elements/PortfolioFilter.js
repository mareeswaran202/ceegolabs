
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
   // Isotope
   const isotope = useRef()
   const [filterKey, setFilterKey] = useState("cat-1") // Set initial filter to "cat-1" (Business)
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

           // Arrange items for the initial filterKey (cat-1)
           isotope.current.arrange({ filter: `.${filterKey}` })
       }, 1000)
   }, [filterKey]) // Re-run useEffect when filterKey changes

   const handleFilterKeyChange = useCallback((key) => () => {
       setFilterKey(key)
   }, [ ])

   const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")




    return (
        <>

            <div className="filters clearfix">
                <ul className="filter-tabs filter-btns clearfix">
                    {/* <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All Topics <span className="count">0</span></li> */}
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Business <span className="count">0</span></li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Coaching <span className="count">0</span></li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Financial <span className="count">0</span></li>
                    <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>Marketing <span className="count">0</span></li>
                    <li className={activeBtn("cat-5")} onClick={handleFilterKeyChange("cat-5")}>Technical <span className="count">0</span></li>
                </ul>
            </div>
            <div className="items-container row clearfix">
                {/* Case Block */}
                <div className="case-block-one masonry-item cat-1 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                           <p>Business Leadership</p>
                        </div>
                        <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Marketing</h5>
                                <h4>Business Leadership</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item  cat-2 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                        <p>Coaching</p>
                        </div>
                        <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Technical</h5>
                                <h4>Market Expansion</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item  cat-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                        <p>Finance</p>
                        </div>
                        <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Coaching</h5>
                                <h4>Money Savings</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item  cat-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                        <p>Marketing</p>
                        </div>
                        <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Business</h5>
                                <h4>Helthy Solutions</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item  cat-5 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image">
                        <p>Technical</p>
                        </div>
                        <div className="overlay">
                            <div className="title"><span className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></span>Precision</div>
                            <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                            <div className="content">
                                <h5>Marketing</h5>
                                <h4>Startup Business</h4>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
