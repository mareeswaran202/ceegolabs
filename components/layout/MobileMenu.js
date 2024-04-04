"use client";
import Link from "next/link";
import { useState } from "react";
export default function MobileMenu({
  isSidebar,
  handleMobileMenu,
  handleSidebar,
}) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="icon flaticon-remove" />
        </div>
        <nav className="menu-box">
          {/* <div className="nav-logo"><Link href="/"><img src="/assets/images/logo.png" alt="" /></Link></div> */}
          <div className="menu-outer mt-5">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">Company</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/aboutus">About Us</Link>
                    </li>
                    <li>
                      <Link href="/capabilities">Capabilities</Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li
                  className={
                    isActive.key == 3 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">Services</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 3 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/contract-manufacturing">
                        Contract Manufacturing
                      </Link>
                    </li>

                    {/* <li>
                      <Link href="/private-labeling">Private Labeling</Link>
                    </li> */}
                    <li>
                      <Link href="/custom-packaging">Custom Packaging</Link>
                    </li>
                    <li>
                      <Link href="/distribution-support">
                        Distribution Support
                      </Link>
                    </li>
                    <li>
                      <Link href="/new-formulation-development">
                        New Formulation Development
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(3)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li>
                  <Link href="/infrastructure">Infrastructure</Link>
                </li>
                <li><Link href="/export">Export</Link></li>
                <li>
                  <Link href="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>         
        </nav>
      </div>
      {/* End Mobile Menu */}
      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
}
