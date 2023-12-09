import Link from "next/link"


export default function News() {
    return (
        <>
            <section className="news-section-three">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-17.png)' }} />
                <div className="auto-container">
                    <div className="sec-title style-three text-center">
                        <h5>News &amp; Updates</h5>
                        <h2>Latest from our news room</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 news-block-three">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images/resource/news-6.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <div className="category">Business</div>
                                    <ul className="post-meta">
                                        <li><Link href="#">14 February, 2020</Link></li>
                                        <li>// </li>
                                        <li>By Raana irave </li>
                                    </ul>
                                    <h4><Link href="/blog-details">Don’t know what customers <br />want, do you want?</Link></h4>
                                    <Link href="/blog-details" className="read-more-link">Continue to read<i className="flaticon-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 news-block-three">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images/resource/news-7.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <div className="category">Projects</div>
                                    <ul className="post-meta">
                                        <li><Link href="#">21 January, 2020 </Link></li>
                                        <li>// </li>
                                        <li>By Brendan Duke</li>
                                    </ul>
                                    <h4><Link href="/blog-details">Towards effective and future <br />oriented managemant</Link></h4>
                                    <Link href="/blog-details" className="read-more-link">Continue to read<i className="flaticon-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="news-block-wrapper">
                                <div className="news-block-four">
                                    <div className="inner-box">
                                        <div className="lower-content">
                                            <div className="category">Marketing</div>
                                            <ul className="post-meta">
                                                <li><Link href="#">04 January, 2020 </Link></li>
                                                <li>// </li>
                                                <li>By Garrett Ford</li>
                                            </ul>
                                            <h4><Link href="/blog-details">That Should You Include In <br /> Your Marketing Plan</Link></h4>
                                        </div>
                                        <div className="overlay">
                                            <h4><Link href="/blog-details">That Should You Include In <br /> Your Marketing Plan</Link></h4>
                                            <Link href="/blog-details" className="read-more-link">Read More<i className="flaticon-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="news-block-four">
                                    <div className="inner-box">
                                        <div className="lower-content">
                                            <div className="category">Marketing</div>
                                            <ul className="post-meta">
                                                <li><Link href="#">04 January, 2020 </Link></li>
                                                <li>// </li>
                                                <li>By Garrett Ford</li>
                                            </ul>
                                            <h4><Link href="/blog-details">That Should You Include In <br /> Your Marketing Plan</Link></h4>
                                        </div>
                                        <div className="overlay">
                                            <h4><Link href="/blog-details">That Should You Include In <br /> Your Marketing Plan</Link></h4>
                                            <Link href="/blog-details" className="read-more-link">Read More<i className="flaticon-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link href="#" className="read-more-post">Read More Post<i className="flaticon-right" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
