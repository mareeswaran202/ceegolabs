import AwardSlider5 from "@/components/slider/AwardSlider5"


export default function Award() {
    return (
        <>
            <section className="award-section-two">
                <div className="auto-container">
                    <div className="sec-title style-four">
                        <h2>Our awards and achivements</h2>
                        <div className="text-decoration">
                      <span className="left" />
                      <span className="right" />
                    </div>
                    </div>
                    <div className="position-relative">
                        <AwardSlider5 />
                    </div>
                </div>
            </section>
        </>
    )
}
