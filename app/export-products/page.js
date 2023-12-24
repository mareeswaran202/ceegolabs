'use client'
import * as React from "react";
import Layout from "@/components/layout/Layout";
import Lightbox from "yet-another-react-lightbox";
import{ Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,} from 'yet-another-react-lightbox/plugins'
  import 'yet-another-react-lightbox/plugins/captions.css'
  import 'yet-another-react-lightbox/plugins/thumbnails.css'
  
import "yet-another-react-lightbox/styles.css";
import Images from "./Images";

function Exportproducts(){
   const slides = [
    {
      src: '/assets/images/gallery/vps-protein-powder.png',
      title: 'VPS Protien Powder',
     
    },
    {
      src: '/assets/images/gallery/vps-preg-powder.png',
      title: 'VPS Preg Powder',
     
    },
    
    {
      src: '/assets/images/gallery/vps-dia-powder.png',
      title: 'VPS Dia Powder',
      
    },
    {
      src: '/assets/images/gallery/vps-weight-solution.png',
      title: 'VPS Weight Solution',
     
    },
    {
      src: '/assets/images/gallery/himmel.png',
      title: 'Himmel',
      
    },
    {
      src: '/assets/images/gallery/stamax.png',
      title: 'Stamax',
      
    },
    {
      src: '/assets/images/gallery/nevrostop.png',
      title: 'Nevrostop',
      
    },
   
   
    {
      src: '/assets/images/gallery/cartisin.png',
      title: 'Cartisin',
      
    },
    {
      src: '/assets/images/gallery/vithair.png',
      title: 'Vithair',
      
    },
    {
      src: '/assets/images/gallery/matribone.png',
      title: 'Matribone',
      
    },
    {
      src: '/assets/images/gallery/mevina.png',
      title: 'Mevina',
      
    },
    {
      src: '/assets/images/gallery/immuactiv-cz.png',
      title: 'Immuactiv-CZ',
      
    },
    {
      src: '/assets/images/gallery/immuactiv-z.png',
      title: 'Immuactiv-Z',
      
    },
  ]
  //  const[open,setOpen] = React.useState(false)

  const [index, setIndex] =React.useState(-1)
    
    return(
        <>
         <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Our Export Products" wrapperCls="home_2">
                <section className="portfolio-section">
                    <div className="auto-container">
                    <div className="items-container row clearfix">
                
                
                {/* <button onClick={()=>setOpen(true)}>Open</button> */}

                <Images data={slides} onClick={(currentIndex)=>setIndex(currentIndex)}/>
               
                 <Lightbox open={index>=0} index={index} close={()=>setIndex(-1)} slides={slides} plugins={[ Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,]} captions={{showToggle:true,descriptionTextAlign:'end'}}/>
                   
                
            </div>
                    </div>
                </section>

            </Layout>
        </>
    )
} 

export default Exportproducts