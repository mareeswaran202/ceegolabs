import dynamic from 'next/dynamic'
const PortfolioFilter1 = dynamic(() => import('@/components/elements/PortfolioFilter1'), {
    ssr: false,
})
import Layout from "@/components/layout/Layout"

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
                             
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}

export default Infrastructure