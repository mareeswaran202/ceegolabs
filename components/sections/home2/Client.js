import { robotos } from "@/app/util/font"

export default function Client() {
    return (
        <>
            <section className="client-section-two mt-5 p-5">
                <div className="auto-container">
                    <div className="top-content row m-0 align-items-center justify-content-between">
                        <div className="sec-title style-two">                           
                            <h2 className={robotos.className}>Our Awards and Achievements</h2>
                        </div>
                        
                    </div>
                    <div className="wrapper-box">
                        <div className="outer-box">
                            <div className="row m-0">
                                <div className="column col-lg-3 col-md-6">
                                    <div className="image"><img src="/assets/images/resource/iso2018.png" alt="" /></div>
                                </div>
                                <div className="column col-lg-3 col-md-6">
                                    <div className="image"><img src="/assets/images/resource/award-9.png" alt="" /></div>
                                </div>
                                <div className="column col-lg-3 col-md-6">
                                    <div className="image"><img src="/assets/images/resource/award-10.png" alt="" style={{width:'100px'}} /></div>
                                </div>
                                 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
