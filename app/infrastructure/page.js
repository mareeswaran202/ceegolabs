import ServiceTabs1 from "@/components/elements/ServiceTabs1";
import Layout from "@/components/layout/Layout";
import InfraBanner from "@/components/slider/Infraslider";
import Newsletter from "@/components/elements/Newsletter";
 
export const metadata = {
  title:'Our Infrastructure'
}

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
                  The manufacturing facility consists of 3 Independent Manufacturing Blocks and 1 Separate Milling Room. Our Unit is equipped with complete AHU system fitted with HEPA filters - the Standard of ISO 22000: 2005 & WHO GMP certification for Food Supplements.
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
