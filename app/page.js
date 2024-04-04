import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import About from "@/components/sections/home2/About"
import Services from "@/components/sections/home2/Services"
import Process from "@/components/sections/home2/Process"
import Cta from "@/components/sections/home2/Cta"
import Funfacts from "@/components/sections/home2/Funfacts"
import Award from "@/components/slider/Award"
 
 
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2} wrapperCls="home_2">
                <Banner/>             
                <About/>                 
                 <Services/>
                 <Cta/>    
                 <Process/>        
                 <Funfacts/>               
                 <Award/>
            </Layout>
        </>
    )
}