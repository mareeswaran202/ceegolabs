import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import About from "@/components/sections/home2/About"

import Services from "@/components/sections/home2/Services"
import Process from "@/components/sections/home2/Process"
import Cta from "@/components/sections/home2/Cta"
import Team from "@/components/sections/home2/Team"
import Client from "@/components/sections/home2/Client"
import Funfacts from "@/components/sections/home2/Funfacts"
import News from "@/components/sections/home2/News"
 

 
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2} wrapperCls="home_2">
                <Banner/>             
                <About/>
                 
                 <Services/>
                 <Process/>
                 <Cta/>
                 <Team/>
                 <Client/>
                 <Funfacts/>
                 <News/>
                  
            </Layout>
        </>
    )
}