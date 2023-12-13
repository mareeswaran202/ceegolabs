import dynamic from 'next/dynamic'
const PortfolioFilter1 = dynamic(() => import('@/components/elements/PortfolioFilter1'), {
    ssr: false,
})
import Layout from "@/components/layout/Layout"
import Link from "next/link"
function Infrastructure(){
    return(
        <>
         <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Our Infrastructure" wrapperCls="home_2">
                <section className="portfolio-section">
                    <div className="auto-container">
                        {/*Sortable Galery*/}
                        <div className="sortable-masonry">
                            {/*Filter*/}
                            <PortfolioFilter1/>
                            <div className="link-btn text-center mb-30"><Link href="#" className="theme-btn btn-style-one text-white"><span className="btn-title">Load More</span></Link></div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}

export default Infrastructure