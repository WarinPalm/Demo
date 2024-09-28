import React from "react";
const Navbar = ()=> {
    return(
        <>
            <div style={{position:'sticky', top:'0',zIndex:'100'}}>
                <nav className="navbar1">
                    <div className="container nav-content">
                        <h1>Demo</h1>
                        <div className="">
                            <ul class="nav justify-content-end">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Active</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </nav>
            </div>
        </>
    )
};
export default Navbar;