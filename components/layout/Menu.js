import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                
                    
                
                <li className="dropdown"><Link href="#">Company</Link>
                    <ul>
                        <li><Link href="/about-3">About Us</Link>
                       
                        </li>
                        <li><Link href="/infrastructure">Infrastructure</Link></li>
                        {/* <li><Link href="/team-3">Meet Our Team</Link>
                            
                        </li> */}
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Services</Link>
                    <ul>
                       
                        <li><Link href="/contract-manufacturing">Contract Manufacturing</Link></li>
                        <li><Link href="/quality-complaince">Quality Compliance</Link></li>
                        <li><Link href="/private-labeling">Private Labeling</Link></li>
                        <li><Link href="/custom-packaging">Custom Packaging</Link></li>
                        <li><Link href="/distribution-support">Distribution Support</Link></li>
                        <li><Link href="/new-formulation-development">New Formulation Development</Link></li>
                        
                    </ul>
                </li>
               
                <li><Link href="/export-products">Export Products</Link></li>
                <li><Link href="/contact-2">Contact Us</Link></li>
               
               
            </ul>
        </>
    )
}
