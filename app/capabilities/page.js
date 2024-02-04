import Layout from "@/components/layout/Layout";
import Pricing from "@/components/elements/Pricing";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Our Capabilities"
        wrapperCls="home_2"
      >
        <div>
          <section className="portfolio-section">
          <Pricing/>
          </section>

           
        </div>
      </Layout>
    </>
  );
}
