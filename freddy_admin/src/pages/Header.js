import React from 'react'

const Header = () => {
  return (
    <React.Fragment>
     <div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>
    <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
    
      <aside class="left-sidebar" data-sidebarbg="skin6">
            <div class="scroll-sidebar" data-sidebarbg="skin6">
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        <li class="sidebar-item"> <a class="sidebar-link sidebar-link" href={'/'}
                                aria-expanded="false"><i data-feather="home" class="feather-icon"></i><span
                                    class="hide-menu">Dashboard</span></a></li>
                        <li class="list-divider"></li>
                       
                                <li class="sidebar-item"><a href={'/Categorytable/'} class="sidebar-link"><span
                                            class="hide-menu"> Category 
                                        </span></a>
                                </li>
                                <li class="sidebar-item"><a href={'/SubCategorytable/'} class="sidebar-link"><span
                                            class="hide-menu"> SubCategory 
                                        </span></a>
                                </li>
                                <li class="sidebar-item"><a href={'/Ordertable/'} class="sidebar-link"><span
                                            class="hide-menu"> Order 
                                        </span></a>
                                </li>
                               
                                <li class="sidebar-item"><a href={'/IndexPro/'} class="sidebar-link"><span
                                            class="hide-menu"> Product 
                                        </span></a>
                                </li>
                                <li class="sidebar-item"><a href={'/Stocktable/'} class="sidebar-link"><span
                                            class="hide-menu"> Product stock 
                                        </span></a>
                                </li>
                                <li class="sidebar-item"><a href={'/Billtable/'} class="sidebar-link"><span
                                            class="hide-menu"> Bill 
                                        </span></a>
                                </li>
                                <li class="sidebar-item"><a href={'/Customertable/'} class="sidebar-link"><span
                                            class="hide-menu"> Customer 
                                        </span></a>
                                </li>
                                <li class="sidebar-item"><a href={'/Registertable/'} class="sidebar-link"><span
                                            class="hide-menu"> Register 
                                        </span></a>
                                </li>
                                <li class="sidebar-item"><a href={'/Contacttable/'} class="sidebar-link"><span
                                            class="hide-menu"> Contact 
                                        </span></a>
                                </li>
                    </ul>
                </nav>
            
            </div>
            
        </aside>

        </div>
    </React.Fragment>
  )
}

export default Header
