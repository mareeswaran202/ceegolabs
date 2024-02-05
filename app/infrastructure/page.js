import ServiceTabs1 from "@/components/elements/ServiceTabs1";
import Layout from "@/components/layout/Layout";
import InfraBanner from "@/components/slider/Infraslider";
import Newsletter from "@/components/elements/Newsletter";
 


function Infrastructure() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} wrapperCls="home_2">
        <InfraBanner />

        <section className="services-details pt-5">
          <div className="auto-container content-side">
            <div class="row">
              <div class="col-lg-12 mt-5">
                <div class="sec-title text-center">
                  <h2>Our Infrastructure</h2>
                  <div class="text-decoration">
                    <span class="left"></span>
                    <span class="right"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="text">
                  <p className="text-center">
                    The manufacturing facility consists of 3 Independent
                    Manufacturing Blocks and 1 Separate Milling Room. The
                    installed capacity is more than 10 KL per shift for Liquid
                    orals with dedicated Stainless-Steel tanks for manufacturing
                    and filling, 750kg granules for tablets per shift & 2000 Kg
                    for Powder per shift.The production areas have dedicated men
                    and material movement passages, and each manufacturing block
                    has clean corridors and airlocks.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 mt-5">
                <div class="sec-title text-center">
                  <h2>Our Quality Standards</h2>
                  <div class="text-decoration">
                    <span class="left"></span>
                    <span class="right"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Newsletter />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <ServiceTabs1 />
              </div>
            </div>
            
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Infrastructure;
