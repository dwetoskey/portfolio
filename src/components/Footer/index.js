import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css';


function Footer() {
    return(
        <div className="footerdiv">
            <div className="mx-4">
        <p className="fs-3 text-light">David Wetoskey |</p>
        </div>
        <div className="ml-auto mr-auto">
        <a href="https://github.com/dwetoskey" target="_blank" className="text-light fs-5">Github</a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/dwetoskey" target="_blank" className="text-light fs-5">linkedIn</a>
        </div>
        </div>
    )
}

export default Footer;