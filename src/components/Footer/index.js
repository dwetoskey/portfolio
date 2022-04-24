import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css';


function Footer() {
    return(
        <div className="d-flex flex-row flex-wrap">
            <div className="mx-4">
        <p className="fs-3 text-light">David Wetoskey |</p>
        </div>
        <div className="d-flex align-items-center align-content-center col-1 justify-items-center ml-auto mr-auto">
        <a href="https://github.com/dwetoskey" target="_blank" className="text-light fs-5">Github</a>
        </div>
        <div className="d-flex align-items-center align-content-center col-1 justify-items-center">
        <a href="https://www.linkedin.com/in/dwetoskey" target="_blank" className="text-light fs-5">linkedIn</a>
        </div>
        </div>
    )
}

export default Footer;