import Link from "next/link"


export default function News() {
    return (
        <>
            <section className="news-section-two">
                <div className="auto-container">
                    <div className="sec-title style-two text-center">
                        <h4><span className="flaticon-endless" />News &amp; Updates</h4>
                        <h2>Latest From Our Blog</h2>
                        <div className="text">Which is the same as saying through shrinking from toil and pain. These cases are <br />perfectly simple and easy to distinguish.</div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 news-block-two">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href=""><img className="lazy-image owl-lazy" src="/assets/images/resource/news-6.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <div className="category">Business</div>
                                    <ul className="post-meta">
                                        <li><Link href="#">14 February, 2023</Link></li>
                                        <li>/</li>
                                        <li>By Raana irave </li>
                                    </ul>
                                    <h4><Link href="">Lorem Ipsum is simply dummy text of the printing</Link></h4>
                                    <Link href="" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 news-block-two">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href=""><img className="lazy-image owl-lazy" src="/assets/images/resource/news-7.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <div className="category">Projects</div>
                                    <ul className="post-meta">
                                        <li><Link href="#">21 January, 2023 </Link></li>
                                        <li>/</li>
                                        <li>By Brendan Duke</li>
                                    </ul>
                                    <h4><Link href="">Lorem Ipsum is simply dummy text of the printing</Link></h4>
                                    <Link href="" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 news-block-two">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href=""><img className="lazy-image owl-lazy" src="/assets/images/resource/news-8.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <div className="category">Marketing</div>
                                    <ul className="post-meta">
                                        <li><Link href="#">04 January, 2023 </Link></li>
                                        <li>/</li>
                                        <li>By Garrett Ford</li>
                                    </ul>
                                    <h4><Link href="">Lorem Ipsum is simply dummy text of the printing</Link></h4>
                                    <Link href="" className="read-more-link"><i className="flaticon-right-arrow" />Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
