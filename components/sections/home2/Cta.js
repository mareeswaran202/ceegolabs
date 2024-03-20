import Link from "next/link"
import { robotos } from "@/app/util/font"


export default function Cta() {
    return (
        <>
            <section className="cta-section-two" style={{ backgroundImage: 'url(assets/images/background/bg-5.jpg)' }}>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h2 className={robotos.className}><span className="flaticon-team" />Say hello to better  <br />Business.</h2>
                        </div>
                        <div className="col-lg-5">
                            <div className="wrapper-box">
                                
                                <Link href="/contactus" className="theme-btn btn-style-four"><span className="btn-title">Let’s Start</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
