import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css';


function Footer() {
    return(
        <div className="d-flex ">
        <p className="fs-3 text-light">David Wetoskey | </p>
        <a href="https://github.com/dwetoskey" target="_blank" className="text-light p-2 fs-5">Github  </a>
        <a href="https://www.linkedin.com/in/dwetoskey" target="_blank" className="text-light fs-5 p-2">linkedIn</a>
        </div>
    )
}

export default Footer;