import Layout from "@/components/layout/Layout";
export const metadata = {
  title: "Distribution Support",
};
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Distribution Support"
        wrapperCls="home_2"
      >
        <section
          className="subscribe-newsletter-three pt-5"
          style={{ backgroundImage: "url(assets/images/background/bg-14.jpg)" }}
        >
          <div className="auto-container">
            <div className="row">
              <div className="col">
                <div className="sec-title text-center">
                  <h2>Distribution Support</h2>
                  <div className="text-decoration">
                    <span className="left" />
                    <span className="right" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-4">
                <div
                  className="content-box"
                  style={{ boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.2)" }}
                >
                  <div className="image">
                    <img
                      src="/assets/images/resource/b2b.jpg"
                      alt=""
                      style={{ height: "260px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="lower-content">
                    <h4
                      className="text-center"
                      style={{ fontSize: "25px", fontWeight: "600" }}
                    >
                      Business To Business
                    </h4>
                    <ul>
                      <li>
                        <i className="flaticon-tick"></i>Own Distribution
                        Support
                      </li>
                      <li>
                        <i className="flaticon-tick"></i>Third Party
                        Distribution
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="content-box"
                  style={{ boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.2)" }}
                >
                  <div className="image">
                    <img
                      src="/assets/images/resource/b2c.jpg"
                      style={{ height: "260px", objectFit: "contain" }}
                      alt=""
                    />
                  </div>
                  <div className="lower-content">
                    <h4
                      className="text-center"
                      style={{ fontSize: "25px", fontWeight: "600" }}
                    >
                      Business To Customers
                    </h4>
                    <ul>
                      <li>
                        <i className="flaticon-tick"></i>Market place E-commerce
                      </li>
                      <li>
                        <i className="flaticon-tick"></i>Online E-commerce
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </section>

        
      </Layout>
    </>
  );
}
