import { robotos } from "@/app/util/font"

export default function Process() {
    return (
        <>
            <section className="process-section-two">
                <div className="auto-container">
                    <div className="sec-title style-two text-center">
                        <h4><span className="flaticon-endless" />Work process</h4>
                        <h2 className={robotos.className}>Way to Reach Success</h2>
                        
                    </div>
                    <div className="process-wrapper">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 process-block-two">
                                <div className="inner-box">
                                    <h4>Contact</h4>
                                    <p className="d-none">First step of process</p>
                                    <div className="icon"><i className="flaticon-permission" /><span className="step-count">01</span></div>
                                    
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 process-block-two">
                                <div className="inner-box">
                                    <h4>Discussion</h4>
                                    <p className="d-none">Our second easy step</p>
                                    <div className="icon"><i className="flaticon-discussion" /><span className="step-count">02</span></div>
                                    
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 process-block-two">
                                <div className="inner-box">
                                    <h4>Implement</h4>
                                    <p className="d-none">Important third step</p>
                                    <div className="icon"><i className="flaticon-rocket-ship" /><span className="step-count">03</span></div>
                                    
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 process-block-two">
                                <div className="inner-box">
                                    <h4>Closure</h4>
                                    <p className="d-none">Solution in final step</p>
                                    <div className="icon"><i className="flaticon-success" /><span className="step-count">04</span></div>
                                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
